export interface AudioResourceResult {
  audioResources: string[]
  reasoning: string
}

export class AudioResourceAgent {
  async generateAudioResources(gameType: string): Promise<AudioResourceResult> {
    // 模拟AI处理延迟
    await new Promise(resolve => setTimeout(resolve, 600))
    
    let audioResources: string[]
    let reasoning: string
    
    // 基础音效占位数据（简化的WAV格式）
    const baseAudioData = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT'
    
    switch (gameType) {
      case 'platform':
        audioResources = [
          `${baseAudioData}_jump`, // 跳跃音效
          `${baseAudioData}_collect`, // 收集音效
          `${baseAudioData}_hit`, // 碰撞音效
          `${baseAudioData}_bgm` // 背景音乐
        ]
        reasoning = '为跳跃平台游戏生成了跳跃、收集、碰撞音效和背景音乐'
        break
        
      case 'snake':
        audioResources = [
          `${baseAudioData}_eat`, // 吃食物音效
          `${baseAudioData}_move`, // 移动音效
          `${baseAudioData}_gameover`, // 游戏结束音效
        ]
        reasoning = '为贪吃蛇游戏生成了吃食物、移动和游戏结束音效'
        break
        
      case 'collect':
      default:
        audioResources = [
          `${baseAudioData}_collect`, // 收集音效
          `${baseAudioData}_move`, // 移动音效
          `${baseAudioData}_bonus`, // 奖励音效
        ]
        reasoning = '为收集游戏生成了收集、移动和奖励音效'
        break
    }
    
    return {
      audioResources,
      reasoning
    }
  }
}