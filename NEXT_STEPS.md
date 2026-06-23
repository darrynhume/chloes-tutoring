# Next Steps for Chloe's Tutoring Website

This document outlines clear, actionable steps for launching and maintaining the site.

---

## 1. Adding Real Photos

**Current state:** One beautiful hero image (professionally generated) is included at `public/images/hero.jpg`.

### Recommendations:
- **Hero image**: Replace or keep the current one. For best results:
  - Take or commission a real photo of Chloe in a similar warm, professional, caring pose with children (or a tasteful stock that matches the brief).
  - Optimise to ~1200–1600px wide, under 400KB (use ImageOptim, Squoosh, or Next.js Image optimisation).
  - Keep the warm, soft green/neutral/blue palette and genuine expressions.

- **Additional photos you should add**:
  - A friendly headshot/portrait of Chloe for the About section (replace the current text card or add beside the bio).
  - 1–2 photos of the tutoring space (studio, desk setup, outdoor learning area).
  - Optional: A photo of learning materials or a child working happily (with permission + model releases).

**How to add:**
1. Add new images to `public/images/` (e.g. `chloe-portrait.jpg`, `studio-1.jpg`).
2. Update the relevant component or `app/page.tsx` to use `<Image src="/images/chloe-portrait.jpg" ... />`.
3. For the hero, update the `<Image>` in the hero section.

**Pro tip:** Use Next.js `<Image>` component everywhere (already done for hero) for automatic optimisation, lazy loading, and responsive images.

---

## 2. Connecting the Contact Form (Production Ready)

The form currently shows a success message after a simulated delay. It is fully functional for demos.

### Recommended easy options (no backend server needed):

**A. Web3Forms (fastest, free tier)**
1. Go to https://web3forms.com and create a free access key.
2. Update the form in `components/ContactForm.tsx` to POST to their API with your access key.
3. Add hidden fields for subject ("New Tutoring Enquiry") and redirect.

**B. Formspree (very popular for this use case)**
1. Sign up at formspree.io.
2. Create a form endpoint.
3. Change the `<form>` action to the endpoint URL or use their React library.

**C. Resend + Next.js API Route (professional)**
- Create `app/api/contact/route.ts`
- Use Resend (or Nodemailer/Postmark) to email Chloe directly.
- Add rate limiting if desired.
- Full example can be provided on request.

**D. Other zero-config:** Getform, Basin, etc.

**Important:**
- Replace placeholder phone and email everywhere (Navbar is not there but Footer + ContactForm side panel + comments).
- After connecting, remove the "This form is currently a working demo" note.
- Consider adding a honeypot field for spam protection.

The form already collects the most useful data: parent name, email, year level, and specific request.

---

## 3. Deploying to Vercel (Recommended)

This is a standard Next.js project — deployment is extremely easy.

### Steps:
1. Push the `chloe-tutoring` folder to a new GitHub repo (or GitLab/Bitbucket).
2. Go to https://vercel.com and sign in with GitHub.
3. Click "New Project" → Import the repo.
4. Vercel auto-detects Next.js. Click Deploy.
5. Done. You will get a `*.vercel.app` URL instantly (plus custom domain support).

### After deploy:
- Update the canonical URL and OpenGraph in `app/layout.tsx` (currently example.com).
- Add a real custom domain (chloestutoring.com.au or similar) in Vercel → Settings → Domains.
- Enable Vercel Analytics (free) if desired.

**Alternative hosts:** Netlify also works well, but Vercel has the best Next.js support.

---

## 4. SEO Basics (Already Strong — Here Are Polish Steps)

The site has excellent foundations:
- Proper semantic HTML (`<h1>` through sections, landmarks)
- Comprehensive `metadata` (title, description, keywords, OG image)
- Fast image loading with priority hero
- Clean URLs (single-page with good anchors)
- Mobile-first responsive

### Next-level SEO / Local SEO (very important for tutoring):
1. **Create a real domain** and point it.
2. **Add a Google Business Profile** for "Chloe's Tutoring Mudgeeraba" with address, phone, hours, and link to the site.
3. Create location-specific content later (e.g. `/mudgeeraba-primary-tutor`, `/worongary-tutor`) if you want to expand to a multi-page site.
4. Submit sitemap (Vercel does this automatically) to Google Search Console.
5. Add structured data (JSON-LD) for LocalBusiness + Person + Service. A starter script can be added to layout if wanted.
6. Ensure fast Core Web Vitals (the site is already very lean).

**Current keywords** target: "primary tutoring Mudgeeraba", "Gold Coast tutor Prep Year 6", "NAPLAN Mudgeeraba", "personalised tutor Queensland hinterland", etc. Good start.

---

## 5. Other Easy Improvements & Polish

- **Real testimonials**: Replace the 3 placeholder cards. Ask happy parents for 2–3 sentences + suburb + child year (with permission). Keep warm and specific.
- **ABN & legal**: Add real ABN and full business name in footer.
- **Availability**: When you have consistent times, replace the "coming soon" placeholder with actual available slots or a link to Calendly/YouCanBookMe.
- **Calendly embed**: When ready, replace the dashed card with an actual embedded Calendly widget (or a button that opens it in a nice modal).
- **Analytics**: Add Vercel Analytics, Plausible, or Google Analytics 4.
- **Accessibility**: Already strong, but run Lighthouse and axe DevTools after adding real images.
- **Surname**: Search for "Chloe's Tutoring" and decide whether to use full name "Chloe [Surname] Tutoring".

---

## 6. Content Updates (Easy to Maintain)

All main content lives in:
- `app/page.tsx` (page structure + copy)
- Individual components in `/components` (very reusable)

To update copy: Just edit the strings. To add/remove a service: Edit the grid of `<ServiceCard>`.

The design system (colors, spacing, buttons) is centralised in `tailwind.config.ts` + `globals.css`.

---

## 7. Running Locally & Developing

```bash
cd chloe-tutoring
npm install
npm run dev          # http://localhost:3000
npm run build        # production build + typecheck
npm run typecheck
```

---

## Questions or Enhancements?

The site is deliberately simple, fast, and maintainable. Everything is in one repo and easy for a non-developer to hand over to a freelancer later for bigger changes.

You now have a beautiful, professional, trustworthy foundation that reflects exactly the brief: warm + nurturing + credible.

Good luck, Chloe — this is going to help a lot of local families!
