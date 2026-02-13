# 📧 Varuna Aerotech - Email Template Collection

Here are 6 different HTML templates for your contact form emails. Each one is designed for different branding styles.

---

### Template 1: The "Modern Tech" (Current Style)
*Status: Clean, High-Trust, Professional*

```html
<div style="font-family: 'Inter', sans-serif; background-color: #f8fafc; padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
        <div style="background: #1e3a8a; padding: 30px; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 22px; letter-spacing: 1px;">NEW INQUIRY</h2>
        </div>
        <div style="padding: 40px;">
            <p style="color: #64748b; font-size: 14px; margin-bottom: 30px;">You've received a new lead from the contact form.</p>
            <div style="margin-bottom: 20px;">
                <label style="display: block; font-size: 11px; font-weight: 700; color: #3b82f6; text-transform: uppercase; margin-bottom: 5px;">Client Name</label>
                <div style="font-size: 16px; color: #1e293b; font-weight: 500;">${data.name}</div>
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; font-size: 11px; font-weight: 700; color: #3b82f6; text-transform: uppercase; margin-bottom: 5px;">Email Address</label>
                <div style="font-size: 16px; color: #1e293b;">${data.email}</div>
            </div>
            <div style="margin-bottom: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px;">
                <label style="display: block; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 10px;">Message</label>
                <div style="font-size: 15px; color: #334155; line-height: 1.6;">${data.message}</div>
            </div>
            <a href="mailto:${data.email}" style="display: block; text-align: center; background: #3b82f6; color: white; padding: 15px; border-radius: 6px; text-decoration: none; font-weight: 600;">Reply to Client</a>
        </div>
        <div style="padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9;">
            Varuna Aerotech Intelligence Center
        </div>
    </div>
</div>
```

---

### Template 2: The "Dark Logic" (Tech-Focused)
*Status: Sleek, High-Contrast, Innovative*

```html
<div style="background-color: #0f172a; padding: 50px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div style="max-width: 550px; margin: 0 auto; border: 1px solid #334155; background: #1e293b; border-radius: 4px; padding: 30px;">
        <div style="border-left: 4px solid #10b981; padding-left: 15px; margin-bottom: 30px;">
            <h1 style="color: #f8fafc; font-size: 20px; margin: 0;">Transmission Received</h1>
            <p style="color: #94a3b8; font-size: 13px; margin: 5px 0 0 0;">Source: Web Contact Terminal</p>
        </div>
        <table style="width: 100%; color: #e2e8f0; font-size: 14px; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #334155; color: #10b981; width: 100px;">SENDER:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #334155;">${data.name}</td>
            </tr>
            <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #334155; color: #10b981;">EMAIL:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #334155;">${data.email}</td>
            </tr>
            <tr>
                <td style="padding: 20px 0 10px 0; color: #10b981;" colspan="2">MESSAGE BODY:</td>
            </tr>
            <tr>
                <td style="padding: 15px; background: rgba(0,0,0,0.2); border-radius: 4px; line-height: 1.5;" colspan="2">
                    ${data.message}
                </td>
            </tr>
        </table>
        <div style="margin-top: 30px; text-align: right;">
             <span style="color: #475569; font-size: 10px; text-transform: uppercase;">Security Protocol Active • Encrypted Delivery</span>
        </div>
    </div>
</div>
```

---

### Template 3: The "Business Essential" (Clean Corporate)
*Status: Trustworthy, Simple, Actionable*

```html
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-top: 5px solid #2563eb;">
    <div style="padding: 20px;">
        <h2 style="margin-top: 0; color: #2563eb;">New Lead: ${data.name}</h2>
        <p>A potential client has reached out through your website.</p>
        <hr style="border: 0; border-top: 1px solid #eee;">
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Contact:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Request:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #ccc; margin: 0;">
            ${data.message}
        </blockquote>
        <p style="margin-top: 25px;">
            <a href="mailto:${data.email}" style="background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Respond to inquiry</a>
        </p>
    </div>
</div>
```

---

### Template 4: The "Elite Brand" (Logo Centric)
*Status: Branded, Bold, Marketing-Ready*

```html
<div style="background-color: #f3f4f6; padding: 40px 0;">
    <table align="center" style="width: 100%; max-width: 600px; background-color: #ffffff; border-radius: 16px; border-collapse: separate; shadow: 0 10px 15px rgba(0,0,0,0.1);">
        <tr>
            <td style="padding: 40px; text-align: center; background-image: linear-gradient(to right, #1e40af, #3b82f6); border-radius: 16px 16px 0 0;">
                <h1 style="color: white; margin: 0; font-family: 'Helvetica', sans-serif; font-size: 28px;">Varuna Aerotech</h1>
                <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0 0;">Lead Generation System</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 40px; font-family: 'Helvetica', sans-serif;">
                <p style="font-size: 18px; color: #1f2937;">Hello <strong>Admin</strong>,</p>
                <p style="color: #4b5563; font-size: 16px;">You have an incoming request from <strong>${data.name}</strong>.</p>
                <div style="background: #eff6ff; border-radius: 12px; padding: 25px; margin-top: 30px;">
                    <p style="margin: 0 0 10px 0; font-size: 14px; color: #2563eb; font-weight: bold;">MESSAGE CONTENT:</p>
                    <p style="margin: 0; color: #1e3a8a; font-style: italic; line-height: 1.6;">"${data.message}"</p>
                </div>
            </td>
        </tr>
    </table>
</div>
```

---

### Template 5: The "Compact Dashboard" (Mobile Optimized)
*Status: Fast, Direct, One-Tap Response*

```html
<div style="max-width: 400px; margin: 20px auto; border: 1px solid #e5e7eb; border-radius: 20px; font-family: system-ui; padding: 24px; color: #111827;">
    <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <div style="width: 12px; height: 12px; background: #10b981; border-radius: 50%; margin-right: 10px;"></div>
        <span style="font-weight: 800; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Live Inquiry</span>
    </div>
    <div style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">${data.name}</div>
    <div style="color: #6b7280; font-size: 14px; margin-bottom: 24px;">${data.email}</div>
    <div style="background: #fdf2f8; color: #be185d; padding: 16px; border-radius: 12px; font-size: 15px; margin-bottom: 24px;">
        ${data.message}
    </div>
    <a href="mailto:${data.email}" style="display: block; width: 100%; background: #000; color: #fff; text-align: center; padding: 14px 0; border-radius: 30px; text-decoration: none; font-weight: 700;">Start Conversation</a>
</div>
```

---

### Template 6: "Glassmorphic Border" (Stylized Modern)
*Status: Aesthetic, High-End Feel*

```html
<div style="background: linear-gradient(45deg, #f1f5f9 0%, #cbd5e1 100%); padding: 60px 20px;">
    <div style="max-width: 500px; margin: 0 auto; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); border-radius: 24px; padding: 40px; border: 1px solid rgba(255,255,255,0.5);">
         <div style="text-align: center; margin-bottom: 30px;">
            <span style="background: #3b82f6; color: white; padding: 6px 12px; border-radius: 100px; font-size: 12px; font-weight: bold;">INCOMING LEAD</span>
         </div>
         <p style="text-align: center; font-size: 20px; color: #020617; font-weight: 600;">Message from ${data.name}</p>
         <p style="text-align: center; color: #475569; margin-bottom: 40px;">via varunaat.in</p>
         <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; color: #334155; line-height: 1.8;">
            ${data.message}
         </div>
    </div>
</div>
```
