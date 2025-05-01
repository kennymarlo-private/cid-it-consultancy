"use client"

import { useState, useCallback } from 'react';
import { useReCaptcha } from "next-recaptcha-v3";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [name, setName] = useState("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const { executeRecaptcha } = useReCaptcha();

    const handleSubmit = useCallback(
        async (e: any) => {
            e.preventDefault();

            // Generate ReCaptcha token
            const token = await executeRecaptcha("form_submit");

            console.log("token", token);

            // Attach generated token to your API requests and validate it on the server
            await fetch("/api/form-submit", {
                method: "POST",
                body: JSON.stringify({
                    data: {name},
                    token,
                }),
                headers: {
                    "Content-Type": "application/json",
                },

            });
        },
        [executeRecaptcha, name],
    );


    // const handleSubmit = async (formData: FormData) => {
    //     setStatus("loading")
    //
    //     const form = formData;
    //     const data = {
    //         name: form.get("name"),
    //         email: form.get("email"),
    //         message: form.get("message"),
    //     }
    //
    //     console.log("data", data);
    //     try {
    //         // 1. Get reCAPTCHA v3 token
    //         const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, {
    //             action: "submit",
    //         })
    //
    //         console.log("token", token);
    //
    //         // 2. Send to API
    //         const res = await fetch("/api/contact", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ ...data, token }),
    //         })
    //
    //         const result = await res.json()
    //         if (result.result === "success") {
    //             setStatus("success")
    //         } else {
    //             setStatus("error")
    //         }
    //     } catch {
    //         setStatus("error")
    //     }
    // }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            <div>
                <label>Name</label>
                <input name="name" required className="w-full border rounded px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input name="email" type="email" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" rows={5} required className="w-full border rounded px-3 py-2" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50" disabled={!executeRecaptcha}>
                {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p className="text-green-600">Message sent!</p>}
            {status === "error" && <p className="text-red-600">Something went wrong.</p>}
        </form>
    )
}
