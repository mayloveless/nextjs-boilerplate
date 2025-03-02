import { NextApiRequest, NextApiResponse } from 'next'

// 定义 GET 请求处理函数
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ message: 'Hello World!' })
}

// 定义 POST 请求处理函数
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = await req.body
  return res.status(200).json({ message: 'Hello World!', data })
}