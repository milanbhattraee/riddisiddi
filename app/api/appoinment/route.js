const ApiKey = process.env.BREVO_API_KEY;
const ReceiverName = process.env.RECIEVER_NAME;
const ReceiverEmail = process.env.RECIEVER_EMAIL;
const SenderEmail = process.env.SENDER_EMAIL;
const SenderName = process.env.SENDER_NAME;

export async function POST(req) {
  const {
    name,
    age,
    gender,
    phone,
    email,
    doctor,
    nepaliDate,
    visitType,
    labs,
    message,
    consent,
  } = await req.json();

  try {
    // Validation
    if (
      !name ||
      !age ||
      !gender ||
      !phone ||
      !message ||
      !consent ||
      !nepaliDate ||
      !visitType
    ) {
      return Response.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    if (!ApiKey || !ReceiverEmail || !ReceiverName || !SenderEmail) {
      return Response.json(
        { message: "Server credentials missing!" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": ApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: SenderName,
          email: SenderEmail,
        },
        to: [{ email: ReceiverEmail, name: ReceiverName }],
        subject: `New Appointment from ${name}`,
        htmlContent: `
<div style="font-family:Arial, sans-serif; border:1px solid #ddd; border-radius:12px; max-width:500px; margin:auto; padding:20px; background:#fefefe; box-shadow:0 4px 12px rgba(0,0,0,0.1)">

  <!-- Heading -->
  <h2 style="margin:0 0 20px; font-size:22px; color:white; background:linear-gradient(90deg,#4f46e5,#6366f1); padding:12px 15px; border-radius:8px; text-align:center; letter-spacing:1px">
    Appointment Details
  </h2>

  <!-- Patient Info -->
  <div style="margin-bottom:15px;">
    <p style="margin:5px 0;"><strong style="color:#4f46e5;">Name:</strong> ${name}</p>
    <p style="margin:5px 0;"><strong style="color:#4f46e5;">Age:</strong> ${age} | <strong style="color:#4f46e5;">Gender:</strong> ${gender}</p>
    <p style="margin:5px 0;"><strong style="color:#4f46e5;">Phone:</strong> ${phone}</p>
    <p style="margin:5px 0;"><strong style="color:#4f46e5;">Email:</strong> ${
      email || "N/A"
    }</p>
    <p style="margin:5px 0;"><strong style="color:#4f46e5;">Doctor:</strong> ${
      doctor || "N/A"
    }</p>
    <p style="margin:5px 0;"><strong style="color:#4f46e5;">Date:</strong> ${nepaliDate}</p>
    <p style="margin:5px 0;"><strong style="color:#4f46e5;">Visit Type:</strong> ${visitType}</p>
  </div>

  <!-- Labs -->
  <div style="margin-bottom:15px;">
    <p style="margin:5px 0;"><strong style="color:#4f46e5;">Labs:</strong></p>
    <ul style="padding-left:20px; margin:5px 0; color:#333;">
      ${
        Array.isArray(labs)
          ? labs
              .map((item) => `<li style="margin-bottom:4px;">${item}</li>`)
              .join("")
          : "<li>None</li>"
      }
    </ul>
  </div>

  <!-- Message and Consent -->
  <div style="margin-bottom:15px;">
    <p style="margin:5px 0;"><strong style="color:#4f46e5;">Message:</strong> ${message}</p>
    <p style="margin:5px 0;"><strong style="color:#4f46e5;">Consent:</strong> ${consent}</p>
  </div>

  <!-- Footer -->
  <p style="font-size:12px; color:#888; text-align:center; margin-top:20px;">This is an automated email. Please do not reply.</p>

</div>
`,
      }),
    });

    if (!response.ok) {
      return Response.json(
        { message: "Error while sending email!" },
        { status: 400 }
      );
    }

    return Response.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
