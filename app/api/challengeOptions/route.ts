import { NextRequest, NextResponse } from "next/server";
import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { NextApiRequest } from "next";

export const GET = async (req: NextRequest) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const filter = req.nextUrl.searchParams.get("filter");
  const sort: string[] = JSON.parse(req.nextUrl.searchParams.get("sort")!);
  const range = req.nextUrl.searchParams.get("range");

  let sortOrder = "asc";
  if (sort) {
    sortOrder = sort[1] === "DESC" ? "desc" : "asc";
  }

  const data = await db.query.challengeOptions.findMany();

  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const body = await req.json();
  const data = await db
    .insert(challengeOptions)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0]);
};
