import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.re_5yvnyjc8_B7bJhsAWwDUZMkLJ58sM8pAe);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'Mourtada <smm7@njit.edu>',
      to: ['smm7@njit.edu'],
      subject: "Hello",
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
