import type { FeatureItem, KpiItem, OperationRecord } from "../types";

export const localFeatures: FeatureItem[] = [
  {
    "id": 1,
    "title": "相机 catalog（品牌/型号/成色）",
    "description": "录入胶片相机信息（品牌如佳能/尼康/徕卡/禄来、型号、生产年份、成色等级、日租金），上传实物照片和样张。",
    "status": "已上线",
    "metric": "88%"
  },
  {
    "id": 2,
    "title": "胶片库存管理（型号/ISO/张数）",
    "description": "管理各型号胶卷库存（如柯达Portra 400/富士C200/伊尔福HP5），记录ISO感光度、剩余张数和有效期，与相机租赁联动推荐。",
    "status": "排期中",
    "metric": "31 单"
  },
  {
    "id": 3,
    "title": "租赁时长与押金",
    "description": "用户选择相机和租赁天数（支持1天起租），系统自动计算租金和押金，归还时验收相机状态，无损退还押金，损坏按赔偿标准扣款。",
    "status": "巡检中",
    "metric": "10 项"
  },
  {
    "id": 4,
    "title": "冲洗服务预约",
    "description": "用户拍摄完成后可预约胶片冲洗服务（C-41彩色负片/E-6反转片/BW黑白），选择冲扫精度，系统记录冲扫进度并推送取片通知。",
    "status": "优化中",
    "metric": "4 级"
  },
  {
    "id": 5,
    "title": "作品展示墙与点赞",
    "description": "用户冲扫完成后上传作品到展示墙，其他用户可浏览、点赞和收藏，优秀作品置顶推荐，营造胶片摄影社区氛围。",
    "status": "可导出",
    "metric": "28 条"
  }
];

export const localKpis: KpiItem[] = [
  {
    "label": "今日处理",
    "value": "134",
    "trend": "+12%",
    "tone": "primary"
  },
  {
    "label": "预约/订单",
    "value": "85",
    "trend": "+8%",
    "tone": "warm"
  },
  {
    "label": "履约率",
    "value": "89%",
    "trend": "+3%",
    "tone": "cool"
  },
  {
    "label": "待处理",
    "value": "6",
    "trend": "需跟进",
    "tone": "neutral"
  }
];

export const operationRecords: OperationRecord[] = [
  {
    "key": "lpfilmcamera-1",
    "name": "相机 catalog（品牌/型号/成色）",
    "owner": "运营组",
    "status": "已上线",
    "metric": "88%",
    "priority": "高"
  },
  {
    "key": "lpfilmcamera-2",
    "name": "胶片库存管理（型号/ISO/张数）",
    "owner": "管理员",
    "status": "排期中",
    "metric": "31 单",
    "priority": "中"
  },
  {
    "key": "lpfilmcamera-3",
    "name": "租赁时长与押金",
    "owner": "服务台",
    "status": "巡检中",
    "metric": "10 项",
    "priority": "低"
  },
  {
    "key": "lpfilmcamera-4",
    "name": "冲洗服务预约",
    "owner": "财务组",
    "status": "优化中",
    "metric": "4 级",
    "priority": "高"
  },
  {
    "key": "lpfilmcamera-5",
    "name": "作品展示墙与点赞",
    "owner": "审核组",
    "status": "可导出",
    "metric": "28 条",
    "priority": "中"
  }
];
