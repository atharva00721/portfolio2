import { getGitHubActivity } from "@/lib/github";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getGitHubActivity("atharva00721");
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
