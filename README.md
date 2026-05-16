# sociel

A premium, responsive Next.js website for a modern social media management studio.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact Email

Contact submissions are sent through Resend. Create `.env.local` with:

```bash
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL="Sociel <onboarding@resend.dev>"
```

Use a verified sender domain in Resend before production launch.

## Production

```bash
npm run build
npm run start
```

The project is ready for GitHub and Vercel deployment.
