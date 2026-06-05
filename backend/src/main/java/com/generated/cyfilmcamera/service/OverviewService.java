package com.generated.lpfilmcamera.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.generated.lpfilmcamera.model.FeatureItem;
import com.generated.lpfilmcamera.model.KpiItem;
import com.generated.lpfilmcamera.model.OperationRecord;
import com.generated.lpfilmcamera.model.OverviewResponse;

@Service
public class OverviewService {
  public OverviewResponse getOverview() {
    return new OverviewResponse(
      "复古胶片相机租赁平台",
      "lpfilmcamera",
      "面向摄影爱好者，提供胶片相机租赁、胶片销售和冲洗服务的摄影文化平台。",
      List.of(new FeatureItem(1, "相机 catalog（品牌/型号/成色）", "录入胶片相机信息（品牌如佳能/尼康/徕卡/禄来、型号、生产年份、成色等级、日租金），上传实物照片和样张。", "已上线", "88%"),
        new FeatureItem(2, "胶片库存管理（型号/ISO/张数）", "管理各型号胶卷库存（如柯达Portra 400/富士C200/伊尔福HP5），记录ISO感光度、剩余张数和有效期，与相机租赁联动推荐。", "排期中", "31 单"),
        new FeatureItem(3, "租赁时长与押金", "用户选择相机和租赁天数（支持1天起租），系统自动计算租金和押金，归还时验收相机状态，无损退还押金，损坏按赔偿标准扣款。", "巡检中", "10 项"),
        new FeatureItem(4, "冲洗服务预约", "用户拍摄完成后可预约胶片冲洗服务（C-41彩色负片/E-6反转片/BW黑白），选择冲扫精度，系统记录冲扫进度并推送取片通知。", "优化中", "4 级"),
        new FeatureItem(5, "作品展示墙与点赞", "用户冲扫完成后上传作品到展示墙，其他用户可浏览、点赞和收藏，优秀作品置顶推荐，营造胶片摄影社区氛围。", "可导出", "28 条")),
      List.of(new KpiItem("今日处理", "134", "+12%", "primary"),
        new KpiItem("预约/订单", "85", "+8%", "warm"),
        new KpiItem("履约率", "89%", "+3%", "cool"),
        new KpiItem("待处理", "6", "需跟进", "neutral")),
      List.of(new OperationRecord("lpfilmcamera-1", "相机 catalog（品牌/型号/成色）", "运营组", "已上线", "88%", "高"),
        new OperationRecord("lpfilmcamera-2", "胶片库存管理（型号/ISO/张数）", "管理员", "排期中", "31 单", "中"),
        new OperationRecord("lpfilmcamera-3", "租赁时长与押金", "服务台", "巡检中", "10 项", "低"),
        new OperationRecord("lpfilmcamera-4", "冲洗服务预约", "财务组", "优化中", "4 级", "高"),
        new OperationRecord("lpfilmcamera-5", "作品展示墙与点赞", "审核组", "可导出", "28 条", "中"))
    );
  }
}
