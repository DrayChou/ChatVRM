import { useState, useCallback } from "react";
import { Link } from "./link";
import { useTranslation } from "react-i18next";

type Props = {
  openAiKey: string;
  openAiBaseUrl: string;
  defaultModel: string;
  koeiroMapKey: string;
  onChangeAiKey: (openAiKey: string) => void;
  onChangeAiBaseUrl: (openAiBaseUrl: string) => void;
  onChangeDefaultModel: (defaultModel: string) => void;
  onChangeKoeiromapKey: (koeiromapKey: string) => void;
};
export const Introduction = ({
  openAiKey,
  openAiBaseUrl,
  defaultModel,
  koeiroMapKey,
  onChangeAiKey,
  onChangeAiBaseUrl,
  onChangeDefaultModel,
  onChangeKoeiromapKey,
}: Props) => {
  const { t } = useTranslation();
  const [opened, setOpened] = useState(true);

  const handleAiKeyChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeAiKey(event.target.value);
    },
    [onChangeAiKey]
  );

  const handleAiBaseUrlChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeAiBaseUrl(event.target.value);
    },
    [onChangeAiBaseUrl]
  );

  const handleDefaultModelChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeDefaultModel(event.target.value);
    },
    [onChangeDefaultModel]
  );

  const handleKoeiromapKeyChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeKoeiromapKey(event.target.value);
    },
    [onChangeKoeiromapKey]
  );

  return opened ? (
    <div className="absolute z-40 w-full h-full px-24 py-40 bg-black/30 font-M_PLUS_2">
      <div className="mx-auto my-auto max-w-3xl max-h-full p-24 overflow-auto bg-white rounded-16">
        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary">
            {t("app_description")}
          </div>
          <div>
            {t("app_detail")}
          </div>
        </div>
        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary">
            {t("3d_model_display")}
          </div>
          <div>
            {t("3d_model_display")}
            <Link
              url={"https://github.com/pixiv/three-vrm"}
              label={"@pixiv/three-vrm"}
            />
            、 {t("conversation_generation")}
            <Link
              url={
                "https://openai.com/blog/introducing-chatgpt-and-whisper-apis"
              }
              label={"ChatGPT API"}
            />
            、 {t("speech_synthesis")}
            <Link url={"https://koemotion.rinna.co.jp/"} label={"Koemotion"} />
            {t("using")}
            <Link
              url={
                "https://developers.rinna.co.jp/product/#product=koeiromap-free"
              }
              label={"Koeiromap API"}
            />
            {t("used")}
            <Link
              url={"https://inside.pixiv.blog/2023/04/28/160000"}
              label={t("technical_article")}
            />
            {t("see_details")}
          </div>
          <div className="my-16">
            {t("demo_github")}
            <br />
            {t("repository")}
            <Link
              url={"https://github.com/pixiv/ChatVRM"}
              label={"https://github.com/pixiv/ChatVRM"}
            />
          </div>
        </div>

        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary">
            {t("usage_notes")}
          </div>
          <div>
            {t("usage_warning")}
          </div>
        </div>

        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary">
            {t("koeiromap_api_key")}
          </div>
          <input
            type="text"
            placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
            value={koeiroMapKey}
            onChange={handleKoeiromapKeyChange}
            className="my-4 px-16 py-8 w-full h-40 bg-surface3 hover:bg-surface3-hover rounded-4 text-ellipsis"
          ></input>
          <div>
            {t("api_key_issued")}
            <Link
              url="https://developers.rinna.co.jp/product/#product=koeiromap-free"
              label={t("details_here")}
            />
          </div>
        </div>
        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary">
            {t("openai_api_key")}
          </div>
          <input
            type="text"
            placeholder="sk-..."
            value={openAiKey}
            onChange={handleAiKeyChange}
            className="my-4 px-16 py-8 w-full h-40 bg-surface3 hover:bg-surface3-hover rounded-4 text-ellipsis"
          ></input>
          <input  
            type="text"
            placeholder="https://api.openai.com/v1"
            value={openAiBaseUrl}
            onChange={handleAiBaseUrlChange}
            className="my-4 px-16 py-8 w-full h-40 bg-surface3 hover:bg-surface3-hover rounded-4 text-ellipsis"
          ></input>
          <input
            type="text"
            placeholder="gpt-3.5-turbo"
            value={defaultModel}
            onChange={handleDefaultModelChange}
            className="my-4 px-16 py-8 w-full h-40 bg-surface3 hover:bg-surface3-hover rounded-4 text-ellipsis"
          ></input>
          <div>
            {t("api_key_obtain")}
            <Link
              url="https://platform.openai.com/account/api-keys"
              label="OpenAIのサイト"
            />
            {t("api_key_input")}
          </div>
          <div className="my-16">
            {t("chatgpt_api_note")}
            <br />
            {t("model_used")}
          </div>
        </div>
        <div className="my-24">
          <button
            onClick={() => {
              setOpened(false);
            }}
            className="font-bold bg-secondary hover:bg-secondary-hover active:bg-secondary-press disabled:bg-secondary-disabled text-white px-24 py-8 rounded-oval"
          >
            {t("start_with_api_key")}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};