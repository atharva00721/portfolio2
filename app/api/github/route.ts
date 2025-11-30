import { getContributionData } from "@/lib/github";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const calendar = await getContributionData("atharva00721");
    return NextResponse.json(calendar);
  } catch {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
