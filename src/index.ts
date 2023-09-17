import { HandleRequest, HttpRequest, HttpResponse } from "@fermyon/spin-sdk"

const encoder = new TextEncoder()

import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()

export const handleRequest: HandleRequest = async function (request: HttpRequest): Promise<HttpResponse> {
  const user = await prisma.user.findFirst()
  console.log({ user })
  return {
    status: 200,
    headers: { "foo": "bar" },
    body: encoder.encode(`Hello from TS-SDK, ${user}`).buffer
  }
}
