import React from "react";
import { IconButton } from "./iconButton";
import { TextButton } from "./textButton";
import { Message } from "@/features/messages/messages";
import {
  KoeiroParam,
  PRESET_A,
  PRESET_B,
  PRESET_C,
  PRESET_D,
} from "@/features/constants/koeiroParam";
import { Link } from "./link";
import { useTranslation } from "react-i18next";

type Props = {
  openAiKey: string;
  openAiBaseUrl: string;
  defaultModel: string;
  systemPrompt: string;
  chatLog: Message[];
  koeiroParam: KoeiroParam;
  koeiromapKey: string;
  onClickClose: () => void;
  onChangeAiKey: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeAiBaseUrl: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDefaultModel: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSystemPrompt: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeChatLog: (index: number, text: string) => void;
  onChangeKoeiroParam: (x: number, y: number) => void;
  onClickOpenVrmFile: () => void;
  onClickResetChatLog: () => void;
  onClickResetSystemPrompt: () => void;
  onChangeKoeiromapKey: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Settings = ({
  openAiKey,
  openAiBaseUrl,
  defaultModel,
  chatLog,
  systemPrompt,
  koeiroParam,
  koeiromapKey,
  onClickClose,
  onChangeSystemPrompt,
  onChangeAiKey,
  onChangeAiBaseUrl,
  onChangeDefaultModel,
  onChangeChatLog,
  onChangeKoeiroParam,
  onClickOpenVrmFile,
  onClickResetChatLog,
  onClickResetSystemPrompt,
  onChangeKoeiromapKey,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className="absolute z-40 w-full h-full bg-white/80 backdrop-blur">
      <div className="absolute m-24">
        <IconButton
          iconName="24/Close"
          isProcessing={false}
          onClick={onClickClose}
        ></IconButton>
      </div>
      <div className="max-h-full overflow-auto">
        <div className="text-text1 max-w-3xl mx-auto px-24 py-64">
          <div className="my-24 typography-32 font-bold">{t("settings")}</div>
          <div className="my-24">
            <div className="my-16 typography-20 font-bold">{t("openai_api_key")}</div>
            <input
              className="text-ellipsis px-16 py-8 w-col-span-2 bg-surface1 hover:bg-surface1-hover rounded-8"
              type="text"
              placeholder="sk-..."
              value={openAiKey}
              onChange={onChangeAiKey}
            />
            <input
              className="text-ellipsis px-16 py-8 w-col-span-2 bg-surface1 hover:bg-surface1-hover rounded-8"
              type="text"
              placeholder="https://api.openai.com/v1"
              value={openAiBaseUrl}
              onChange={onChangeAiBaseUrl}
            />
            <input
              className="text-ellipsis px-16 py-8 w-col-span-2 bg-surface1 hover:bg-surface1-hover rounded-8"
              type="text"
              placeholder="gpt-3.5-turbo"
              value={defaultModel}
              onChange={onChangeDefaultModel}
            />
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
          <div className="my-40">
            <div className="my-16 typography-20 font-bold">{t("character_model")}</div>
            <div className="my-8">
              <TextButton onClick={onClickOpenVrmFile}>{t("open_vrm")}</TextButton>
            </div>
          </div>
          <div className="my-40">
            <div className="my-8">
              <div className="my-16 typography-20 font-bold">{t("character_settings")}</div>
              <TextButton onClick={onClickResetSystemPrompt}>{t("reset_character_settings")}</TextButton>
            </div>
            <textarea
              value={systemPrompt}
              onChange={onChangeSystemPrompt}
              className="px-16 py-8 bg-surface1 hover:bg-surface1-hover h-168 rounded-8 w-full"
            ></textarea>
          </div>
          <div className="my-40">
            <div className="my-16 typography-20 font-bold">{t("voice_adjustment")}</div>
            <div>
              {t("koemotion_api_note")}
              <Link
                url="https://koemotion.rinna.co.jp"
                label="https://koemotion.rinna.co.jp"
              />
              {t("see_details")}
            </div>
            <div className="mt-16 font-bold">{t("api_key")}</div>
            <div className="mt-8">
              <input
                className="text-ellipsis px-16 py-8 w-col-span-2 bg-surface1 hover:bg-surface1-hover rounded-8"
                type="text"
                placeholder="..."
                value={koeiromapKey}
                onChange={onChangeKoeiromapKey}
              />
            </div>
            <div className="mt-16 font-bold">{t("preset")}</div>
            <div className="my-8 grid grid-cols-2 gap-[8px]">
              <TextButton
                onClick={() => onChangeKoeiroParam(PRESET_A.speakerX, PRESET_A.speakerY)}
              >
                {t("cute")}
              </TextButton>
              <TextButton
                onClick={() => onChangeKoeiroParam(PRESET_B.speakerX, PRESET_B.speakerY)}
              >
                {t("energetic")}
              </TextButton>
              <TextButton
                onClick={() => onChangeKoeiroParam(PRESET_C.speakerX, PRESET_C.speakerY)}
              >
                {t("cool")}
              </TextButton>
              <TextButton
                onClick={() => onChangeKoeiroParam(PRESET_D.speakerX, PRESET_D.speakerY)}
              >
                {t("mature")}
              </TextButton>
            </div>
            <div className="my-24">
              <div className="select-none">x : {koeiroParam.speakerX}</div>
              <input
                type="range"
                min={-10}
                max={10}
                step={0.001}
                value={koeiroParam.speakerX}
                className="mt-8 mb-16 input-range"
                onChange={(e) => {
                  onChangeKoeiroParam(Number(e.target.value), koeiroParam.speakerY);
                }}
              ></input>
              <div className="select-none">y : {koeiroParam.speakerY}</div>
              <input
                type="range"
                min={-10}
                max={10}
                step={0.001}
                value={koeiroParam.speakerY}
                className="mt-8 mb-16 input-range"
                onChange={(e) => {
                  onChangeKoeiroParam(koeiroParam.speakerX, Number(e.target.value));
                }}
              ></input>
            </div>
          </div>
          {chatLog.length > 0 && (
            <div className="my-40">
              <div className="my-8 grid-cols-2">
                <div className="my-16 typography-20 font-bold">{t("chat_history")}</div>
                <TextButton onClick={onClickResetChatLog}>{t("reset_chat_history")}</TextButton>
              </div>
              <div className="my-8">
                {chatLog.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="my-8 grid grid-flow-col grid-cols-[min-content_1fr] gap-x-fixed"
                    >
                      <div className="w-[64px] py-8">
                        {value.role === "assistant" ? "Character" : "You"}
                      </div>
                      <input
                        key={index}
                        className="bg-surface1 hover:bg-surface1-hover rounded-8 w-full px-16 py-8"
                        type="text"
                        value={value.content}
                        onChange={(event) => {
                          onChangeChatLog(index, event.target.value);
                        }}
                      ></input>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
