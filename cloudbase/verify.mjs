import { loadConfig } from "../server/src/config.js";
import { PostgresStore } from "../server/src/postgres-store.js";
import { randomUUID } from "node:crypto";
const config = loadConfig();
if (!config.envId)
  throw new Error("请先在 .env 中设置 CLOUDBASE_ENV_ID");
console.log("目标环境：" + config.envId + "，如不是预期环境请立即中止。");
const store = await new PostgresStore(config).init();
const id = "health_" + randomUUID();
try {
  await store.save("audit_logs", {
    id,
    kind: "connection-test",
    createdAt: new Date().toISOString(),
  });
  if ((await store.get("audit_logs", id))?.kind !== "connection-test")
    throw new Error("SQL readback mismatch");
  console.log("CloudBase PostgreSQL write/read passed");
} finally {
  await store.remove("audit_logs", id);
}
