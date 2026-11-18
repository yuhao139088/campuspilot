import { loadConfig } from "../server/src/config.js";
import { PostgresStore } from "../server/src/postgres-store.js";
import { serviceCatalog, documents } from "../server/src/domain.js";
const config = loadConfig();
if (!config.envId)
  throw new Error("请先在 .env 中设置 CLOUDBASE_ENV_ID");
console.log("目标环境：" + config.envId + "，如不是预期环境请立即中止。");
const store = await new PostgresStore(config).init();
for (const item of serviceCatalog)
  if (!(await store.get("service_items", item.id)))
    await store.save("service_items", item);
for (const item of documents)
  if (!(await store.get("campus_documents", item.id)))
    await store.save("campus_documents", item);
console.log("PostgreSQL seeded with four synthetic services and four guides.");
