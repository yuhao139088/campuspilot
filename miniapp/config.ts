// 默认指向本机后端并使用演示身份，克隆后即可跑通全流程。
// 正式部署时改成自己的 HTTPS 接口地址与身份模式（wechat / cloudbase）。
export const config = {
  apiBase: "http://127.0.0.1:8787",
  envId: "",
  authMode: "demo" as "demo" | "wechat" | "cloudbase",
};
