import { Message, GameGenerationResult } from '../types'
import { GameLogicAgent } from './agents/gameLogicAgent'
import { ImageResourceAgent } from './agents/imageResourceAgent'
import { AudioResourceAgent } from './agents/audioResourceAgent'
import { ScriptIntegrationAgent } from './agents/scriptIntegrationAgent'
import { GameFileGenerateAgent } from './agents/fileGnerateAgent'
import { Files } from 'lucide-react'
export class GameAgents {
  private gameLogicAgent: GameLogicAgent
  private imageResourceAgent: ImageResourceAgent
  private audioResourceAgent: AudioResourceAgent
  private scriptIntegrationAgent: ScriptIntegrationAgent
  private fileGenerateAgent: GameFileGenerateAgent

  constructor() {
    this.gameLogicAgent = new GameLogicAgent()
    this.imageResourceAgent = new ImageResourceAgent()
    this.audioResourceAgent = new AudioResourceAgent()
    this.scriptIntegrationAgent = new ScriptIntegrationAgent()
    this.fileGenerateAgent = new GameFileGenerateAgent()
  }

  // 多代理协作生成游戏
  public async generateGame(prompt: string, context: Message[]): Promise<GameGenerationResult> {
    try {
      // 1. 🎮 游戏逻辑 Agent 处理
      const gameLogicResult = await this.gameLogicAgent.generateGameLogic(prompt)
      
      const fileGenerateResult = await this.fileGenerateAgent.generateGameFiles(gameLogicResult)
      
      // 2. 🎨 图像资源 Agent 处理
      const imageResult = await this.imageResourceAgent.generateImageResources(gameLogicResult.gameType)
      
      // 3. 🔊 音效资源 Agent 处理
      const audioResult = await this.audioResourceAgent.generateAudioResources(gameLogicResult.gameType)
      
      // 4. 🧠 脚本整合 Agent 处理
      const integrationResult = await this.scriptIntegrationAgent.integrateResources(
        fileGenerateResult.files,
        imageResult.imageResources,
        audioResult.audioResources
      )
      return {
        files: integrationResult.files,
        description: gameLogicResult.description,
        gameLogic: gameLogicResult.gameLogic,
        imageResources: imageResult.imageResources,
        audioResources: audioResult.audioResources
      }
    } catch (error) {
      console.error('多代理游戏生成失败:', error)
      throw new Error('游戏生成过程中出现错误')
    }
  }
}