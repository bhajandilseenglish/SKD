import { NextRequest, NextResponse } from "next/server";
import { addEnquiry } from "@/lib/db";

// Indian 10-digit mobile phone regex
const INDIAN_PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, mobile, email, city, course, mode, message, source, utmSource, utmMedium, utmCampaign } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const cleanPhone = (mobile || "").toString().replace(/[^0-9]/g, "");
    // Check if phone has 10 digits or 12 with 91 prefix
    let finalPhone = cleanPhone;
    if (cleanPhone.length === 12 && cleanPhone.startsWith("91")) {
      finalPhone = cleanPhone.slice(2);
    }

    if (!INDIAN_PHONE_REGEX.test(finalPhone)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit Indian mobile number (e.g., 9876543210)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!course || typeof course !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select the course you are interested in." },
        { status: 400 }
      );
    }

    // Save to database
    const saved = addEnquiry({
      name: name.trim(),
      mobile: finalPhone,
      email: email.trim().toLowerCase(),
      city: (city || "Chandigarh").trim(),
      course: course.trim(),
      mode: mode || "Classroom (Chandigarh)",
      message: (message || "").trim(),
      source: source || "Website Lead Form",
      utmSource: utmSource || undefined,
      utmMedium: utmMedium || undefined,
      utmCampaign: utmCampaign || undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Our academic counsellor will connect with you within 2 business hours.",
        enquiryId: saved.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry API Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again or call +91 8054811313 directly." },
      { status: 500 }
    );
  }
}
