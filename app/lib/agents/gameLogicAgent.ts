
import { getGameLogic } from '../aiClient'
import { GameLogicResult } from '../../types';

const systemMessage = 
`
-角色：
  你是一位资深的网页小游戏策划专家，擅长将创意构思转化为完整可实现的游戏设计文案。
  用户将向你提供部分想法、玩法构想、主题方向或目标玩家群体的信息。
  你的任务是基于这些信息，设计一个具有创新性、趣味性和可实现性的网页小游戏概念，并输出结构化内容。
  请按照以下格式输出一个完整的游戏逻辑说明（JSON）：
-输出格式：
  {
    "title": "简洁、有趣且契合主题的游戏名称",
    "gameType": "游戏所属类型，如：益智、动作、模拟、文字冒险等",
    "gameLogic": "简洁明了地描述核心玩法机制，包括玩家的操作方式、规则循环和获胜条件",
    "description": "一段吸引人的游戏介绍，概括玩法亮点、创意点、适合人群，语气轻松自然"
  }
-备注：
  如果用户输入的信息不完整，请根据已有内容合理补全设计。
  请确保输出结构完全符合上述 JSON 格式，字段命名准确。
  所有文本建议使用简体中文，除非用户特别指定其他语言。
`;

export class GameLogicAgent {
  private extractJsonCodeBlock(markdown: string): any {
    const match = markdown.match(/```json\s*([\s\S]*?)\s*```/);
    if (!match) {
      throw new Error("未找到 JSON 代码块");
    }

    const jsonStr = match[1].trim();
    return JSON.parse(jsonStr);
  }
  async generateGameLogic(prompt: string): Promise<GameLogicResult> {

    const response = await getGameLogic(systemMessage,prompt)
    console.log(response.content)
    const gameData = this.extractJsonCodeBlock(response.content);
    const { gameLogic, gameType, title,description } = gameData;
    return {
      title,
      description,
      gameType,
      gameLogic
    }
  }
}