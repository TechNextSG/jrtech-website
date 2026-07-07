# JR-Tech Solution — Website

Official website for **JR-Tech Solution Sdn Bhd**, Malaysia's commercial kitchen solution provider.

**Live site:** https://technextsg.github.io/jrtech-website/

---

## Tech Stack

- Vanilla HTML / CSS / JS — no build step required
- Hosted on **GitHub Pages** (main branch)
- Forms powered by **Formspree**

## Pages

| File | URL |
|------|-----|
| `index.html` | Homepage |
| `about.html` | About Us |
| `services.html` | Services |
| `products.html` | Product Catalogue |
| `product.html` | Product Detail (dynamic) |
| `contact.html` | Contact |
| `quote.html` | Request a Quote |
| `404.html` | Error page |

## File Structure

```
jrtech-website/
├── index.html
├── about.html
├── services.html
├── products.html
├── product.html
├── contact.html
├── quote.html
├── 404.html
├── style.css
├── chatbot.js
├── interactions.js
├── products-data.js
├── robots.txt
├── sitemap.xml
└── img/
    └── (49 images — logos, products, project photos)
```

## Local Development

Run any static file server from the project root. Example using Deno:

```bash
deno run --allow-net --allow-read jsr:@std/http/file-server --port 3906
```

Or use the provided `serve-jrtech.bat` (Windows).

## Deployment

Push to `main` branch — GitHub Pages deploys automatically within ~60 seconds.

```bash
git add .
git commit -m "update: description"
git push origin main
```

## Forms Setup

Both `contact.html` and `quote.html` use Formspree. Replace `YOUR_FORM_ID` in each file with the actual Formspree endpoint ID.

## Managed By

TechNext Asia · hello@technext.asia
