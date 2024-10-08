/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prsima = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const videos = await prsima.video.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching videos" },
      { status: 500 }
    );
  } finally {
    await prsima.$disconnect();
  }
}
