// app/page.tsx (客户端组件)
"use client";

export async function getGameLogic(systemMessage,userMessage,previousChatId=null) {
  const response = await fetch('/api/agents/gameLogic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
        systemMessages: [{ role: 'system', content: systemMessage }],
        userMessages: [{ role: 'user', content: userMessage }],
        previousChatId: previousChatId,
    }),
  });

  const data = await response.json();
  // 处理返回的数据
  console.log(data);
  return data;
}


