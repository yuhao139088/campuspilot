# 第三方组件说明

本项目在实现中使用了下列开源组件。它们提供通用基础能力，**本项目不将其声称为自主底层技术**。
版本以 `server/package-lock.json` 与 `miniapp/package.json` 中锁定的版本为准；许可证名称以各包发布信息为准。

## 服务端运行时依赖

| 组件 | 版本 | 许可证 | 用途 |
|---|---|---|---|
| [express](https://expressjs.com/) | ^5.3.0 | MIT | HTTP 服务与路由 |
| [zod](https://zod.dev/) | ^4.6.7 | MIT | 请求入参与模型输出结构校验 |
| [jose](https://github.com/panva/jose) | ^6.2.12 | MIT | JWT 签发与校验（HS256） |
| [multer](https://github.com/expressjs/multer) | ^2.4.0 | MIT | 图片与文档上传 |
| [helmet](https://helmetjs.github.io/) | ^8.3.0 | MIT | 安全响应头 |
| [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit) | ^8.7.1 | MIT | 接口限流 |
| [cors](https://github.com/expressjs/cors) | ^2.8.5 | MIT | 精确来源的跨域配置 |
| [dotenv](https://github.com/motdotla/dotenv) | ^16.4.7 | BSD-2-Clause | 环境变量加载 |
| [cheerio](https://cheerio.js.org/) | 1.2.0 | MIT | 网页正文提取 |
| [pdfjs-dist](https://mozilla.github.io/pdf.js/) | 6.4.299 | Apache-2.0 | PDF 文本提取 |
| [yauzl](https://github.com/thejoshwolfe/yauzl) | 3.4.0 | MIT | DOCX 解包 |
| [ipaddr.js](https://github.com/whitequark/ipaddr.js) | 2.5.0 | MIT | 公网地址判定（SSRF 防护） |

## 服务端开发依赖

| 组件 | 版本 | 许可证 | 用途 |
|---|---|---|---|
| [tsx](https://github.com/privatenumber/tsx) | ^4.19.2 | MIT | 开发期进程内执行 |
| [typescript](https://www.typescriptlang.org/) | ^7.0.2 | Apache-2.0 | 类型检查与编译 |
| @types/node / @types/express / @types/cors / @types/multer | 见锁文件 | MIT | 类型声明 |

## 小程序端

| 组件 | 版本 | 许可证 | 用途 |
|---|---|---|---|
| [typescript](https://www.typescriptlang.org/) | ^6.0.0 | Apache-2.0 | 编译 TS 为运行期 JS |
| [miniprogram-api-typings](https://github.com/wechat-miniprogram/api-typings) | ^5.1.0 | MIT | 微信小程序 API 类型声明 |

## 平台与规范

- 微信小程序自定义 tabBar 与页面结构，遵循微信官方开发文档与组件规范。
- 模型调用遵循 OpenAI-compatible Chat Completions 接口约定。
- 云数据库访问通过 CloudBase 提供的 PostgREST 端点（`/v1/rdb/rest/`）完成。

## 图形素材

项目内全部图形素材为原创程序化绘制（详见 `assets/manifest.json`，逐项标注 `aiGenerated:false`），
不包含第三方图库、字体文件或授权不明的插图。提示词文本留档于 `assets/prompts/`，供后续替换与复核。

## 许可

本仓库整体采用 [Apache-2.0](LICENSE)。上述第三方组件仍适用其各自许可证，
本仓库不对其重新授权。
