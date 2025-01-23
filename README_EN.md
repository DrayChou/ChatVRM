# ChatVRM

[English](./README_EN.md) | 简体中文(./README_CN.md) | [日本語](./README_JP.md)

ChatVRM is a project primarily aimed at technical sharing and demonstration.

This repository was archived with the code as of 2024-07-18.
If you wish to make changes to ChatVRM in the future, please fork and develop it.

ChatVRM is a demo application that allows you to easily have conversations with 3D characters in your browser.

You can import VRM files to adjust the voice to match the character and generate response texts with emotional expressions.

The main technologies used in ChatVRM are as follows:

- User voice recognition
  - [Web Speech API (SpeechRecognition)](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
- Response text generation
  - [ChatGPT API](https://platform.openai.com/docs/api-reference/chat)
- Speech synthesis
  - [Koemotion/Koeiromap API](https://koemotion.rinna.co.jp/)
  - [SiliconCloud TTS API](https://siliconcloud.com/api)
- 3D character display
  - [@pixiv/three-vrm](https://github.com/pixiv/three-vrm)

## New Features

- Added support for multilingual translation (Chinese, Japanese, English)
- Added support for Chinese speech using SiliconCloud's TTS service
- Added support for AI service providers compatible with the OpenAI protocol

## Demo

A demo is available on Glitch.

[https://chatvrm.glitch.me](https://chatvrm.glitch.me)

## Running Locally

To run locally, clone or download this repository.

```bash
git clone git@github.com:pixiv/ChatVRM.git
```

Install the necessary packages.

```bash
npm install
```

After the packages are installed, start the development web server with the following command.

```bash
npm run dev
```

After running, access the following URL to check the operation.

[http://localhost:3000](http://localhost:3000)

## ChatGPT API

ChatVRM uses the ChatGPT API to generate response texts.

For details on the ChatGPT API specifications and terms of use, please refer to the following links or the official website.

- [https://platform.openai.com/docs/api-reference/chat](https://platform.openai.com/docs/api-reference/chat)
- [https://openai.com/policies/api-data-usage-policies](https://openai.com/policies/api-data-usage-policies)

## Koeiromap API

ChatVRM uses Koemotion's Koeiromap API for speech synthesis of response texts.

For details on the Koeiromap API specifications and terms of use, please refer to the following links or the official website.

- [https://koemotion.rinna.co.jp/](https://koemotion.rinna.co.jp/)

## SiliconCloud TTS API

ChatVRM uses SiliconCloud's TTS API for speech synthesis of Chinese response texts.

For details on the SiliconCloud TTS API specifications and terms of use, please refer to the following links or the official website.

- [https://docs.siliconflow.cn/quickstart](https://docs.siliconflow.cn/quickstart)
