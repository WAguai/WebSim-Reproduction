export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface GameFiles {
  html: string
  js: string
  css: string
}

export interface GameVersion {
  id: number
  files: GameFiles
  description: string
  timestamp: Date
  messageId: string
}

export interface GameGenerationResult {
  files: GameFiles
  description: string
  gameLogic: string
  imageResources: string[]
  audioResources: string[]
}

export interface GameLogicResult {
  title: string
  description: string
  gameLogic: string
  gameType: string
}

export interface GameFileResult {
  files: GameFiles
}

export interface ScriptIntegrationResult {
  files: GameFiles
  imageResources: string[],
  audioResources: string[]
}
