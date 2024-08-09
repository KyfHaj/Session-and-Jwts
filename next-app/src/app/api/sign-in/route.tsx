import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    console.log("1: ")
    const body = await req.json()
    console.log("body: ", body)
    return NextResponse.json({ data: "ok" })
  } catch (error: any) {
    console.log("error in handle !")
    return new NextResponse("Internal Error", { status: 500 })
  }
}
