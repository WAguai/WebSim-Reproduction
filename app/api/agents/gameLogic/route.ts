// app/api/chat/route.ts
import OpenAI from "openai";
import { NextResponse } from 'next/server';
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";


const getGameLogicVO = z.object({
    title: z.string(),
    gameType: z.string(),
    description: z.string(),
    gameLogic: z.string()
});

export async function POST(req: Request) {
  try {
    // 从请求体中获取用户消息
    const { systemMessages,userMessages,previousChatId } = await req.json();
    console.log({...systemMessages,...userMessages})

    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY, 
        baseURL: process.env.OPENAI_BASE_URL, 
    });

    const response = client.responses.create({
        model: "anthropic.claude-3-5-haiku-20241022-v1:0",
        input: {...systemMessages,...userMessages},
        previous_response_id: previousChatId,
        text:{
            format:zodTextFormat(getGameLogicVO, "event")
        } 
    });
    console.log(response)
    return response;

    // 1. 将系统提示词和用户提示词添加到消息列表的开头
    // 使用展开运算符 (spread operator) 创建一个新的数组
    const completion = await client.chat.completions.create({
    //   model: "anthropic.claude-3-5-haiku-20241022-v1:0",
      model:"us.anthropic.claude-sonnet-4-20250514-v1:0",
      // 2. 将包含系统提示词的完整消息列表传递给 API
      messages: [...systemMessages,...userMessages],
    });
    console.log(completion.choices);
    
    return NextResponse.json(completion.choices[0].message);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch from OpenAI' }, { status: 500 });
  }
}