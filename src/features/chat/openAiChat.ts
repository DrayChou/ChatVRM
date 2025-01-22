import { Configuration, OpenAIApi } from "openai";
import { Message } from "../messages/messages";

export async function getChatResponse(
  messages: Message[], 
  apiKey: string,
  apiBaseUrl: string,
  defaultModel: string
  ) {
  if (!apiKey) {
    throw new Error("Invalid API Key");
  }

  let baseUrl = "https://api.openai.com/v1";
  if (apiBaseUrl) {
    baseUrl = apiBaseUrl;
  }

  let model = "gpt-3.5-turbo";
  if (defaultModel) {
    model = defaultModel;
  }

  const configuration = new Configuration({
    apiKey: apiKey,
    basePath: baseUrl,
  });
  // ブラウザからAPIを叩くときに発生するエラーを無くすworkaround
  // https://github.com/openai/openai-node/issues/6#issuecomment-1492814621
  delete configuration.baseOptions.headers["User-Agent"];

  const openai = new OpenAIApi(configuration);

  const { data } = await openai.createChatCompletion({
    model: model,
    messages: messages,
  });

  const [aiRes] = data.choices;
  const message = aiRes.message?.content || "エラーが発生しました";

  return { message: message };
}

export async function getChatResponseStream(
  messages: Message[],
  apiKey: string,
  apiBaseUrl: string,
  defaultModel: string
) {
  if (!apiKey) {
    throw new Error("Invalid API Key");
  }

  let apiUrl = "https://api.openai.com/v1/chat/completions";
  if (apiBaseUrl) {
    apiUrl = `${apiBaseUrl}/chat/completions`;
  }

  let model = "gpt-3.5-turbo";
  if (defaultModel) {
    model = defaultModel;
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  const res = await fetch(apiUrl, {
    headers: headers,
    method: "POST",
    body: JSON.stringify({
      model: model,
      messages: messages,
      stream: true,
      max_tokens: 200,
    }),
  });

  const reader = res.body?.getReader();
  if (res.status !== 200 || !reader) {
    throw new Error("Something went wrong");
  }

  const stream = new ReadableStream({
    async start(controller: ReadableStreamDefaultController) {
      const decoder = new TextDecoder("utf-8");
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const data = decoder.decode(value);
          const chunks = data
            .split("data:")
            .filter((val) => !!val && val.trim() !== "[DONE]");
          for (const chunk of chunks) {
            const json = JSON.parse(chunk);
            const messagePiece = json.choices[0].delta.content;
            if (!!messagePiece) {
              controller.enqueue(messagePiece);
            }
          }
        }
      } catch (error) {
        controller.error(error);
      } finally {
        reader.releaseLock();
        controller.close();
      }
    },
  });

  return stream;
}
