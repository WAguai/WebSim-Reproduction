'use client'

import { Message, GameVersion } from '../types'
import { User, Bot, Edit3 } from 'lucide-react'

interface ChatHistoryProps {
  messages: Message[]
  gameVersions: GameVersion[]
  onSelectGameVersion: (index: number) => void
  currentGameIndex: number
}

export default function ChatHistory({ 
  messages, 
  gameVersions, 
  onSelectGameVersion, 
  currentGameIndex 
}: ChatHistoryProps) {
  const getGameVersionForMessage = (messageId: string) => {
    return gameVersions.find(version => version.messageId === messageId)
  }

  // 生成游戏缩略图
  const generateThumbnail = (gameVersion: GameVersion) => {
    // 根据游戏类型生成不同的缩略图
    if (gameVersion.description.includes('跳跃') || gameVersion.description.includes('平台')) {
      return (
        <div className="w-full h-full bg-gradient-to-b from-blue-200 to-green-200 relative overflow-hidden">
          <div className="absolute bottom-2 left-2 w-4 h-4 bg-green-500 rounded"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-green-600"></div>
          <div className="absolute bottom-2 right-4 w-6 h-1 bg-brown-400"></div>
        </div>
      )
    } else if (gameVersion.description.includes('贪吃蛇')) {
      return (
        <div className="w-full h-full bg-black relative">
          <div className="absolute top-4 left-4 w-2 h-2 bg-green-400"></div>
          <div className="absolute top-4 left-6 w-2 h-2 bg-green-500"></div>
          <div className="absolute top-4 left-8 w-2 h-2 bg-green-600"></div>
          <div className="absolute top-8 right-6 w-2 h-2 bg-red-500"></div>
        </div>
      )
    } else {
      return (
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 relative">
          <div className="absolute top-3 left-3 w-3 h-3 bg-green-500 rounded"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-red-500"></div>
          <div className="absolute top-6 right-3 w-2 h-2 bg-red-500"></div>
        </div>
      )
    }
  }

  return (
    <div className="flex-1 overflow-y-auto bg-gray-900 text-white">
      {/* 头部信息 */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <Bot size={16} className="text-white" />
          </div>
          <div>
            <div className="font-medium">AI游戏生成器</div>
            <div className="text-xs text-gray-400">12m</div>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-400">
          Add a description...
        </div>
      </div>

      {/* 游戏版本列表 */}
      <div className="p-4 space-y-3">
        {gameVersions.map((gameVersion, index) => {
          const isSelected = currentGameIndex === index
          
          return (
            <button
              key={gameVersion.id}
              onClick={() => onSelectGameVersion(index)}
              className={`w-full p-3 rounded-lg border transition-all duration-200 ${
                isSelected 
                  ? 'border-blue-500 bg-blue-500/10' 
                  : 'border-gray-600 bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <div className="flex items-start space-x-3">
                {/* 版本标识和缩略图 */}
                <div className="flex-shrink-0">
                  <div className={`w-12 h-8 rounded text-xs font-bold flex items-center justify-center mb-1 ${
                    isSelected ? 'bg-blue-500 text-white' : 'bg-gray-600 text-gray-300'
                  }`}>
                    v{index + 1}
                  </div>
                  <div className="w-12 h-12 rounded border border-gray-600 overflow-hidden">
                    {generateThumbnail(gameVersion)}
                  </div>
                </div>

                {/* 游戏描述 */}
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium text-white mb-1">
                    {gameVersion.description.split('！')[0]}
                  </div>
                  <div className="text-xs text-gray-400">
                    {gameVersion.timestamp.toLocaleString()}
                  </div>
                </div>

                {/* 编辑图标 */}
                <div className="flex-shrink-0">
                  <Edit3 size={14} className="text-gray-500" />
                </div>
              </div>

              {/* 选中状态指示器 */}
              {isSelected && (
                <div className="mt-2 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>当前预览</span>
                  </div>
                  <div className="text-gray-500">
                    2.6k +93 -15 gemini-2.5-pro
                  </div>
                </div>
              )}
            </button>
          )
        })}
        
        {/* 空状态：没有游戏版本时的提示 */}
        {gameVersions.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            <Bot size={48} className="mx-auto mb-4 text-gray-600" />
            <p className="text-sm font-medium mb-2">还没有游戏版本</p>
            <p className="text-xs text-gray-500 mb-1">
              在下方输入框中描述你想要的游戏
            </p>
            <p className="text-xs text-gray-500">
              AI 将为你生成可玩的网页游戏
            </p>
            
            {/* 示例提示 */}
            <div className="mt-6 text-xs text-gray-600">
              <p className="mb-2">💡 例如：</p>
              <div className="space-y-1">
                <div className="text-gray-500">"生成一个跳跃游戏"</div>
                <div className="text-gray-500">"创建贪吃蛇游戏"</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}