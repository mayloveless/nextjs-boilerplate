import { NextRequest, NextResponse } from 'next/server'

// 定义 GET 请求处理函数
export async function GET() {
  return NextResponse.json({ message: 'Hello World!' })
}

// 定义 POST 请求处理函数
export async function POST(req: NextRequest) {
  const data = await req.json()
  return NextResponse.json({ message: 'Hello World!', data })
}