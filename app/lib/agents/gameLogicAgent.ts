
import { getGameLogic } from '../aiClient'
import { GameLogicResult } from '../../types';
const systemMessage = 
`你是一个擅长创意游戏设计的专家，帮助用户设计创新、有趣的网页小游戏。
请根据用户输入的创意点、玩法想法、目标人群等信息，生成完整的游戏逻辑，包括：
1.游戏名称
2.游戏类型
3.核心游戏机制
4.游戏描述`;

export class GameLogicAgent {
  async generateGameLogic(prompt: string): Promise<GameLogicResult> {

    const response = await getGameLogic(systemMessage,prompt)
    
    let gameLogic: string
    let gameType: string
    let title: string
    let description: string

    return {
      title,
      description,
      gameType,
      gameLogic
    }
  }
  
}