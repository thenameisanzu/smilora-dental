import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, date, slot } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter a valid full name." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || !/^[0-9+\s()-]{10,15}$/.test(phone.trim())) {
      return NextResponse.json({ error: "Please provide a valid 10-digit mobile or contact number." }, { status: 400 });
    }

    if (!date || isNaN(Date.parse(date))) {
      return NextResponse.json({ error: "Please pick a valid booking date." }, { status: 400 });
    }

    // Check day of week for Sunday time slot constraints
    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getUTCDay(); // 0 is Sunday
    if (dayOfWeek === 0 && slot && slot.toLowerCase() !== "morning") {
      return NextResponse.json(
        { error: "Sunday clinic timings are 10:00 AM to 2:00 PM. Only Morning slots are available on Sundays." },
        { status: 400 }
      );
    }

    // In production, this can send an SMS via Twilio, write to Supabase/Postgres, or trigger a webhook to clinic CRM.
    const appointmentId = `SML-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      appointmentId,
      message: "Appointment request logged successfully.",
      data: { name, phone, service, date, slot, createdAt: new Date().toISOString() }
    });
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json({ error: "An unexpected error occurred. Please try again or reach out via WhatsApp." }, { status: 500 });
  }
}
