# ChatVRM

[English](./README_EN.md) | [简体中文](./README_CN.md) | [日本語](./README_JP.md)

ChatVRM 是一个主要用于技术共享和演示的项目。

本仓库已于 2024-07-18 归档。
如果您希望在未来对 ChatVRM 进行更改，请进行分叉并开发。

ChatVRM 是一个演示应用程序，允许您在浏览器中轻松与 3D 角色进行对话。

您可以导入 VRM 文件以调整与角色匹配的声音，并生成带有情感表达的响应文本。

ChatVRM 的主要功能使用以下技术：

- 用户语音识别
  - [Web Speech API (SpeechRecognition)](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechRecognition)
- 响应文本生成
  - [ChatGPT API](https://platform.openai.com/docs/api-reference/chat)
- 语音合成
  - [Koemotion/Koeiromap API](https://koemotion.rinna.co.jp/)
  - [SiliconCloud TTS API](https://siliconcloud.com/api)
- 3D 角色显示
  - [@pixiv/three-vrm](https://github.com/pixiv/three-vrm)

## 新功能

- 添加了中日英多语言翻译的支持
- 添加了中文语音的支持，使用 SiliconCloud 的 TTS 服务支持
- 添加了对兼容 OpenAI 协议的 AI 服务商的支持

## 演示

在 Glitch 上提供了一个演示。

[https://chatvrm.glitch.me](https://chatvrm.glitch.me)

## 本地运行

要在本地运行，请克隆或下载此仓库。

```bash
git clone git@github.com:pixiv/ChatVRM.git
```

安装必要的包。

```bash
npm install
```

包安装完成后，使用以下命令启动开发 Web 服务器。

```bash
npm run dev
```

运行后，访问以下 URL 以检查操作。

[http://localhost:3000](http://localhost:3000)

## ChatGPT API

ChatVRM 使用 ChatGPT API 生成响应文本。

有关 ChatGPT API 规范和使用条款的详细信息，请参阅以下链接或官方网站。

- [https://platform.openai.com/docs/api-reference/chat](https://platform.openai.com/docs/api-reference/chat)
- [https://openai.com/policies/api-data-usage-policies](https://openai.com/policies/api-data-usage-policies)

## Koeiromap API

ChatVRM 使用 Koemotion 的 Koeiromap API 进行响应文本的语音合成。

有关 Koeiromap API 规范和使用条款的详细信息，请参阅以下链接或官方网站。

- [https://koemotion.rinna.co.jp/](https://koemotion.rinna.co.jp/)

## SiliconCloud TTS API

ChatVRM 使用 SiliconCloud 的 TTS API 进行中文响应文本的语音合成。

有关 SiliconCloud TTS API 规范和使用条款的详细信息，请参阅以下链接或官方网站。

- [https://siliconcloud.com/api](https://siliconcloud.com/api)
