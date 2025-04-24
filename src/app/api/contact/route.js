import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const otherEmail = process.env.OTHER_EMAIL;

export async function POST(req) {
  const { subject, message, email } = await req.json();

  try {
    const userResponse = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Thank You for Reaching Out!",
      html: (
      `
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <title>Thank You for Reaching Out!</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
          body {
            font-family: 'Poppins', sans-serif;
          }
        </style>
      </head>
      <body style="background-color: #f4f4f4; margin: 0; padding: 2em 0;">
        <table style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.1);" cellspacing="0" cellpadding="0">
          <tr>
            <td style="background-color: #121212; color: white; padding: 2.7em 0 1.3em 0; text-align: center; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <h1>
                <img src="https://www.apoorvsharma.space/images/logos/logo-invert.png" alt="logo" border="0" width="120">
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding: 2.7em 1.3em;">
              <p style="font-size: 1em; color: #555;">
                Thank you for contacting me!
              </p>
              <p style="font-size: 1em; color: #555;">
                I've received your message and will get back to you shortly. Here's the message you sent:
              </p>
              <table style="width: 100%; background-color: #f9f9f9; margin: 1.9em 0; padding: 1.9em 0.8em; border-left: 0.2em solid #9333ea; font-style: italic; color: #555;" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <h3>${subject}</h3>
                    <p>${message}</p>
                  </td>
                </tr>
              </table>
              <p style="font-size: 1em; color: #555;">
                If you have any further questions, feel free to reach out to me again.
              </p>
            </td>
          </tr>

          <tr>
            <td style="background-color: #eaeaea; color: #121212; text-align: center; padding: 1.3em 0; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; font-size: 0.9em;">
              <p>Thank you for choosing me! Here's my website and socials.</p>
              <table class="social-icons" style="margin: 0 auto;" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <a href="https://www.apoorvsharma.space/" target="_blank" style="text-decoration: none; margin: 0 0.5em;">
                      <img src="https://www.apoorvsharma.space/images/socials/globe.png" alt="globe-solid" border="0" style="width: 1.5em; height: 1.5em;">
                    </a>
                  </td>
                  <td>
                    <a href="https://x.com/ars2107_/" target="_blank" style="text-decoration: none; margin: 0 0.5em;">
                      <img src="https://www.apoorvsharma.space/images/socials/x.png" alt="x-twitter-brands" border="0" style="width: 1.5em; height: 1.5em;">
                    </a>
                  </td>
                  <td>
                    <a href="https://www.instagram.com/ars2107_/" target="_blank" style="text-decoration: none; margin: 0 0.5em;">
                      <img src="https://www.apoorvsharma.space/images/socials/instagram.png" alt="instagram-brands" border="0" style="width: 1.5em; height: 1.5em;">
                    </a>
                  </td>
                  <td>
                    <a href="https://www.linkedin.com/in/apoorvsharma2107/" target="_blank" style="text-decoration: none; margin: 0 0.5em;">
                      <img src="https://www.apoorvsharma.space/images/socials/linkedin.png" alt="linkedin-brands" border="0" style="width: 1.5em; height: 1.5em;">
                    </a>
                  </td>
                  <td>
                    <a href="https://github.com/ars-2107/" target="_blank" style="text-decoration: none; margin: 0 0.5em;">
                      <img src="https://www.apoorvsharma.space/images/socials/github.png" alt="github-brands" border="0" style="width: 1.5em; height: 1.5em;">
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
      `
      ),
    });

    const adminResponse = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, otherEmail],
      subject: `New Message from ${email}: ${subject}`,
      html: (
        `
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
          <title>New Message from ${email}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
            body {
              font-family: 'Poppins', sans-serif;
            }
          </style>
        </head>
        <body style="background-color: #f4f4f4; margin: 0; padding: 2em 0;">
          <table style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.1);" cellspacing="0" cellpadding="0">
            <tr>
              <td style="background-color: #121212; color: white; padding: 2.7em 0 1.3em 0; text-align: center; border-top-left-radius: 10px; border-top-right-radius: 10px;">
                <h1>
                  <img src="https://www.apoorvsharma.space/images/logos/logo-invert.png" alt="logo" border="0" width="120">
                </h1>
              </td>
            </tr>

            <tr>
              <td style="padding: 2.7em 1.3em;">
                <p style="font-size: 1em; color: #555;">
                  You got a new message!
                </p>
                <p style="font-size: 1em; color: #555;">
                  This person has reached out to you through your website. Here’s what they have to say:
                </p>
                <table style="width: 100%; background-color: #f9f9f9; margin: 1.9em 0; padding: 1.9em 0.8em; border-left: 0.2em solid #9333ea; font-style: italic; color: #555;" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <h3>${subject}</h3>
                      <p>${message}</p>
                    </td>
                  </tr>
                </table>
                <p style="font-size: 1em; color: #555;">
                  If you would like to contact them, you can reach them at: <a href="mailto:${email}" style="text-decoration: none; color: #9333ea">${email}</a>
                </p>
              </td>
            </tr>

            <tr>
              <td style="background-color: #eaeaea; color: #121212; text-align: center; padding: 1.3em 0; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; font-size: 0.9em;">
                <p>Here's your website and socials.</p>
                <table class="social-icons" style="margin: 0 auto;" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <a href="https://www.apoorvsharma.space/" target="_blank" style="text-decoration: none; margin: 0 0.5em;">
                        <img src="https://www.apoorvsharma.space/images/socials/globe.png" alt="globe-solid" border="0" style="width: 1.5em; height: 1.5em;">
                      </a>
                    </td>
                    <td>
                      <a href="https://x.com/ars2107_/" target="_blank" style="text-decoration: none; margin: 0 0.5em;">
                        <img src="https://www.apoorvsharma.space/images/socials/x.png" alt="x-twitter-brands" border="0" style="width: 1.5em; height: 1.5em;">
                      </a>
                    </td>
                    <td>
                      <a href="https://www.instagram.com/ars2107_/" target="_blank" style="text-decoration: none; margin: 0 0.5em;">
                        <img src="https://www.apoorvsharma.space/images/socials/instagram.png" alt="instagram-brands" border="0" style="width: 1.5em; height: 1.5em;">
                      </a>
                    </td>
                    <td>
                      <a href="https://www.linkedin.com/in/apoorvsharma2107/" target="_blank" style="text-decoration: none; margin: 0 0.5em;">
                        <img src="https://www.apoorvsharma.space/images/socials/linkedin.png" alt="linkedin-brands" border="0" style="width: 1.5em; height: 1.5em;">
                      </a>
                    </td>
                    <td>
                      <a href="https://github.com/ars-2107/" target="_blank" style="text-decoration: none; margin: 0 0.5em;">
                        <img src="https://www.apoorvsharma.space/images/socials/github.png" alt="github-brands" border="0" style="width: 1.5em; height: 1.5em;">
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
      ),
    });

    if (!!userResponse && !!adminResponse) return NextResponse.json({ message: "Email sent successfully" });
    else return NextResponse.json({ message: "Failed to send email" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
