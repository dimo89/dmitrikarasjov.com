import { NextResponse } from "next/server"
import FormData from "form-data"
import Mailgun from "mailgun.js"
import { contactFormSchema } from "@/lib/validations/contact"

const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "",
    url: process.env.MAILGUN_URL || "https://api.mailgun.net", // Default to US, configurable to EU
})

export async function POST(req: Request) {
    try {
        const json = await req.json()
        const body = contactFormSchema.parse(json)

        // Verify ReCAPTCHA
        const recaptchaRes = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY || ""}&response=${body.recaptchaToken}`,
            {
                method: "POST",
            }
        )
        const recaptchaJson = await recaptchaRes.json()

        if (!recaptchaJson.success) {
            return NextResponse.json(
                { message: "Invalid reCAPTCHA. Please try again." },
                { status: 400 }
            )
        }

        // Check for required environment variables
        if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
            console.error("Missing Mailgun configuration")
            return NextResponse.json(
                { message: "Server configuration error" },
                { status: 500 }
            )
        }

        // Send email
        await mg.messages.create(process.env.MAILGUN_DOMAIN, {
            from: `Portfolio Contact Form <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: [process.env.CONTACT_EMAIL || "dmitrikarasjov@gmail.com"],
            subject: `Message from ${body.name}`,
            text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`,
            html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, "<br>")}</p>
      `,
        })

        return NextResponse.json({ message: "Email sent successfully" })
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error sending email:", error.message)
        } else {
            console.error("Unknown error sending email", error)
        }
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        )
    }
}
