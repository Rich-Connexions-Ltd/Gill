# Gill M Edwards - Website

## About This Website

This is the website for **Gill M Edwards**, a Stress Disruptor and Reiki Practitioner based in Stoke-on-Trent, Staffordshire, UK. Gill is also the author of "Stress Less? Hell Yes!" and runs a community Singalong group.

## How to Make Changes

**Gill**: You can ask me to make any changes to your website by describing what you want in plain English. Here are some examples of things you can ask:

### Content Changes
- "Change the text on the homepage to say..."
- "Update my phone number / email / social media links"
- "Add a new testimonial from a client"
- "Update the Singalong group meeting times"
- "Add a new service to my services page"
- "Change the description of my Reiki healing service"

### Design Changes
- "Make the buttons bigger"
- "Change the main red colour to a darker shade"
- "Add more space between sections"
- "Make the text larger on mobile"

### Adding New Content
- "Add a testimonials section to the homepage"
- "Create a new page for my blog"
- "Add a photo gallery"
- "Add a newsletter signup form"

### Images
- "Replace the placeholder image on the homepage with my photo" (provide the image file)
- "Add my book cover image to the book section"

## Website Structure

```
index.html          - Homepage (hero with koi logo, intro, services preview, quote, singalong, book, CTA)
about.html          - About Gill page (story, timeline, approach, personal)
services.html       - Services (1:1 stress coaching, Reiki healing, life coaching)
book.html           - Book page (Stress Less? Hell Yes! - intro, chapters, about author, Amazon CTA)
singalong.html      - Singalong group page
contact.html        - Contact page with Netlify form
success.html        - Form submission success page
includes/nav.html   - Shared navigation (single source of truth for all pages)
includes/footer.html - Shared footer (single source of truth for all pages)
css/style.css       - All styling and colours
js/includes.js      - Dynamic loader for shared nav/footer, mobile menu, scroll effects
js/main.js          - Scroll-triggered animations, form validation, smooth scroll
images/             - Photos and images (logo-koi.png, portrait-gill.jpeg, etc.)
```

### Deployment
- **Hosted on**: Netlify at gillmedwards.netlify.app
- **Repository**: Rich-Connexions-Ltd/Gill on GitHub
- **Auto-deploy**: Pushes to `main` branch trigger automatic Netlify deployment
- **GitHub Action**: `auto-merge-to-main.yml` auto-merges `claude/**` branches to main
- **Forms**: Contact form uses Netlify Forms (data-netlify="true")

## Brand Colours (from "Stress Less? Hell Yes!" book cover)

- **Primary Red**: `#CF2E2E` - Bold red from the book cover, used for headings, buttons, and accents
- **Blush Pink**: `#F2DFE0` - Soft pink background from the book cover
- **White**: `#FFFFFF` - Clean white for cards and text on dark backgrounds
- **Dark Text**: `#2D2D2D` - Near-black for body text
- **Off-White Background**: `#FBF5F5` - Warm white page background

## Fonts

- **Headings**: Playfair Display (elegant serif)
- **Body Text**: Raleway (clean sans-serif)

## Social Media Links

- Website: www.gillmedwards.com
- Facebook: facebook.com/gillmedwards
- Instagram: instagram.com/iamgilledwards
- LinkedIn: linkedin.com/in/gill-m-edwardssuccess

## Gill's Voice & Tone Guide

**CRITICAL: All website copy MUST be written in Gill's authentic voice.** This guide is derived from her book *Stress Less? Hell Yes!* and must be followed whenever writing or editing any text on the site.

### Voice Characteristics

1. **First person, always.** This is Gill's website. She speaks directly to the reader as "I" and addresses them as "you". Never write about Gill in the third person on her own site (e.g. don't write "Gill helps people..." — write "I help people...").

2. **Conversational and warm, like talking to a friend.** Gill writes the way she speaks. Short sentences mixed with longer ones. Questions to the reader. Direct address. No corporate jargon or overly formal language.

3. **Honest and raw about her own experiences.** Gill does not sugar-coat her story. She openly references:
   - Three breakdowns
   - Heart palpitations, dry skin, brain fog
   - Her body "screaming at her to stop"
   - Not associating her symptoms with stress for years
   - Being "derailed" by chronic stress

4. **Empowering, never preachy.** Gill lifts people up. She uses phrases like:
   - "You are not broken"
   - "You are not here just to exist — you are here to flourish"
   - "You are here to thrive, Warrior"
   - "You already have everything within you"
   - "Trust yourself. Trust the process."

5. **Blends science with spirituality naturally.** She references hormones, the nervous system, the "stress family" (hypothalamus, pituitary, adrenal glands) alongside Reiki, energy, and "coming home to yourself". Neither side dominates.

6. **British English.** Always use British spelling and colloquialisms: "realise" not "realize", "mum" not "mom", "nanna" not "grandma", "sussed", "catawalling", "brilliant".

### Key Phrases & Themes (use these naturally throughout the site)

| Theme | Gill's Language |
|-------|----------------|
| Her core mission | "Helping you stress less and come home to yourself" |
| Her method | "I see between the lines" / "stopping you from drowning" |
| On resilience | "It's not about having a thick skin or just 'carrying on regardless'" |
| On breakdowns | "A breakdown is the body's way of saying 'I can't do this anymore'" |
| On stress | "Stress is a messenger, not the enemy" / "Listen to the whispers instead of waiting for the yelling" |
| On recovery | "Coming home to yourself" / "the path back to yourself is always there" |
| Her CTA style | "If you want to stress less, say YES!" |
| Warmth | Signs off with "Lots of love xxx" in personal contexts |
| On singing | "I believe everyone can sing, and the joy we get from singing is priceless" |
| Her background | "Thirty-four years in nursing, sixteen as a clinical nurse specialist" / "over fourteen years as a qualified coach" |
| Personal | "Wife, mum, stepmum, nanna and great nanna to some awesome humans" |

### What NOT to Do

- Do NOT use corporate/clinical language ("leverage", "optimise", "facilitate", "utilise")
- Do NOT write about Gill in third person on her own pages
- Do NOT soften her story — she is proud of her breakdowns as breakthroughs
- Do NOT use American English spelling
- Do NOT be overly salesy or pushy — Gill's approach is warm and inviting, never pressured
- Do NOT use generic wellness platitudes — Gill's voice is specific and grounded in lived experience

### Book Reference

The book *Stress Less? Hell Yes! How to Deal with Stress When You Think You Have It All Sussed* (Amazon ASIN: B0FN6JCGKX) is the primary source for Gill's voice. Key chapters that best represent her tone:
- **Introduction**: Her personal story and why she wrote the book
- **The Stress Family** (Ch 1): How she explains science accessibly using metaphors (the ship analogy)
- **Behind the Calm Face** (Ch 2): Raw honesty about physical symptoms
- **Rising Beyond** (Ch 16): Empowering language, Kintsugi metaphor, "you are here to thrive, Warrior"
- **Afterword**: "Coming home to ourselves", "the who we are underneath all that chaos"

## Notes for Development

- The site is built with plain HTML, CSS, and JavaScript — no build tools or frameworks needed.
- The contact form uses **Netlify Forms** (data-netlify="true") for submission handling.
- **Shared includes**: Navigation and footer are loaded dynamically via `js/includes.js`. Edit `includes/nav.html` and `includes/footer.html` to change nav/footer across all pages.
- **Animations**: Scroll-triggered animations use IntersectionObserver in `js/main.js`. Available classes: `fade-in`, `fade-in-left`, `fade-in-right`, `scale-in`. Add `style="transition-delay: 0.15s;"` for staggered effects.
- **Remaining placeholders**: The Reiki section on services.html and the Singalong sections still use placeholder divs — replace with real images when provided.
- **Book**: Amazon ASIN is B0FN6JCGKX. Kindle price: £8.99, Paperback: £10.99, 140 pages, 5.0 stars.
