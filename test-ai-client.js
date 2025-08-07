// 测试AI客户端的简单脚本
// 运行方式: node test-ai-client.js

const { AIClient } = require('./app/lib/aiClient.ts');

async function testAIClient() {
  console.log('🚀 开始测试AI客户端...\n');
  
  const client = new AIClient();
  
  try {
    // 测试简单对话
    console.log('📝 测试简单对话...');
    const response = await client.simpleChat('Hello!');
    console.log('AI回复:', response);
    console.log('✅ 简单对话测试成功\n');
    
    // 测试游戏生成
    console.log('🎮 测试游戏生成...');
    const gameResponse = await client.generateGameWithAI('生成一个简单的跳跃游戏');
    console.log('游戏生成回复:', gameResponse);
    console.log('✅ 游戏生成测试成功\n');
    
    // 显示可用模型
    console.log('🤖 可用模型列表:');
    const models = client.getAvailableModels();
    models.forEach((model, index) => {
      console.log(`${index + 1}. ${model}`);
    });
    
  } catch (error) {
    console.error('❌ 测试失败:', error.message);
  }
}

// 如果直接运行此文件，则执行测试
if (require.main === module) {
  testAIClient();
}

module.exports = { testAIClient };