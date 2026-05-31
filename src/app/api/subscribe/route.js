import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email: rawEmail } = await request.json();
    const email = (rawEmail || "").trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Invalid email address." }, { status: 400 });
    }

    const safeEmail = email.replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

    const { error } = await resend.emails.send({
      from: "R Commerce <noreply@rickshowcase.com>",
      to: "info@rickshowcase.com",
      subject: "New Signal Address Submitted",
      html: `
        <p>A new subscriber has submitted their signal address:</p>
        <p><strong>${safeEmail}</strong></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch {
    return Response.json({ error: "Failed to send. Try again." }, { status: 500 });
  }
}
