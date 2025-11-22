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

  console.log(
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
    "all item"
  );

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

    console.log(ApiKey, ReceiverEmail, ReceiverName, SenderEmail)

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
        <div style="font-family:sans-serif;border:1px solid #ddd;padding:16px;border-radius:8px;max-width:400px">
          <h3 style="margin:0 0 10px;font-size:18px">Appointment Details</h3>

          </div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Age:</strong> ${age} | <strong>Gender:</strong> ${gender}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "N/A"}</p>
          <p><strong>Doctor:</strong> ${doctor || "N/A"}</p>
          <p><strong>Date:</strong> ${nepaliDate}</p>
          <p><strong>Visit Type:</strong> ${visitType}</p>
          <p><strong>Labs:</strong> ${labs || "None"}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Consent:</strong> ${consent}</p>
          `,
      }),
    });
    console.log(response)
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
    return Response.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
