import { localFeatures, localKpis, operationRecords } from "../data/workbench";
import type { OverviewResponse } from "../types";
import { APP_CODE, APP_NAME } from "../constants/app";

export function createFallbackOverview(): OverviewResponse {
  return {
    appName: APP_NAME,
    appCode: APP_CODE,
    description: "面向摄影爱好者，提供胶片相机租赁、胶片销售和冲洗服务的摄影文化平台。",
    features: localFeatures,
    kpis: localKpis,
    records: operationRecords,
  };
}
