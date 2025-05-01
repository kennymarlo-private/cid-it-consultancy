// /pages/api/contact.ts
export default async function handler(req: { method: string; body: { name: any; email: any; message: any; token: any } }, res: { status: (arg0: number) => { (): any; new(): any; end: { (arg0: string): any; new(): any }; json: { (arg0: { result: string; score?: any }): any; new(): any } } }) {
    if (req.method !== "POST") {
        return res.status(405).end("Method Not Allowed")
    }

    const { name, email, message, token } = req.body

    // 1. Verify reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    const verifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${token}`,
    })

    const verifyData = await verifyRes.json()
    if (!verifyData.success || verifyData.score < 0.5) {
        return res.status(403).json({ result: "spam-detected", score: verifyData.score })
    }

    // 2. Forward to Apps Script
    try {
        const appsScriptUrl = "https://script.google.com/macros/s/AKfycbywPkeYykEMMKw_cPuIqfzYWw1gbfytkE4gntTFLfsYbxbZ74eLZM8pVUjfI488HxtbtQ/exec"
        const forward = await fetch(appsScriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        })

        const result = await forward.json()
        return res.status(200).json(result)
    } catch (err) {
        console.error(err)
        return res.status(500).json({ result: "error" })
    }
}
