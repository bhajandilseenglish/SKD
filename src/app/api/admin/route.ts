import { NextRequest, NextResponse } from "next/server";
import { readDatabase, updateEnquiryStatus, deleteEnquiry, writeDatabase } from "@/lib/db";

const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "skdAdmin2026";

function verifyAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();
  return token === ADMIN_PASSCODE;
}

export async function GET(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const db = readDatabase();
  return NextResponse.json({
    success: true,
    data: db,
  });
}

export async function PATCH(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { action, enquiryId, status, notes, siteSettings } = body;

    if (action === "updateEnquiryStatus") {
      const updated = updateEnquiryStatus(enquiryId, status, notes);
      if (!updated) {
        return NextResponse.json({ error: "Enquiry not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, updated });
    }

    if (action === "updateSiteSettings" && siteSettings) {
      const db = readDatabase();
      db.siteSettings = { ...db.siteSettings, ...siteSettings };
      writeDatabase(db);
      return NextResponse.json({ success: true, message: "Settings updated successfully" });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const enquiryId = searchParams.get("id");

  if (!enquiryId) {
    return NextResponse.json({ error: "Enquiry ID required" }, { status: 400 });
  }

  const success = deleteEnquiry(enquiryId);
  return NextResponse.json({ success });
}
