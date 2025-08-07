export interface ImageResourceResult {
  imageResources: string[]
  reasoning: string
}

export class ImageResourceAgent {
  async generateImageResources(gameType: string): Promise<ImageResourceResult> {
    // 模拟AI处理延迟
    await new Promise(resolve => setTimeout(resolve, 800))
    
    let imageResources: string[]
    let reasoning: string
    
    switch (gameType) {
      case 'platform':
        imageResources = [
          'https://via.placeholder.com/32x32/4CAF50/FFFFFF?text=P', // 玩家
          'https://via.placeholder.com/32x32/F44336/FFFFFF?text=E', // 敌人
          'https://via.placeholder.com/64x32/8BC34A/FFFFFF?text=PLATFORM', // 平台
          'https://via.placeholder.com/16x16/FFC107/FFFFFF?text=*' // 道具
        ]
        reasoning = '为跳跃平台游戏生成了玩家、敌人、平台和道具的占位图像'
        break
        
      case 'snake':
        imageResources = [
          'https://via.placeholder.com/20x20/4CAF50/FFFFFF?text=S', // 蛇身
          'https://via.placeholder.com/20x20/2E7D32/FFFFFF?text=H', // 蛇头
          'https://via.placeholder.com/20x20/F44336/FFFFFF?text=F', // 食物
        ]
        reasoning = '为贪吃蛇游戏生成了蛇身、蛇头和食物的占位图像'
        break
        
      case 'collect':
      default:
        imageResources = [
          'https://via.placeholder.com/30x30/4CAF50/FFFFFF?text=P', // 玩家
          'https://via.placeholder.com/20x20/F44336/FFFFFF?text=T', // 目标
          'https://via.placeholder.com/16x16/FFC107/FFFFFF?text=*' // 特殊道具
        ]
        reasoning = '为收集游戏生成了玩家、目标和特殊道具的占位图像'
        break
    }
    
    return {
      imageResources,
      reasoning
    }
  }
}