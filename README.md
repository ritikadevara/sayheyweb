# Say Hey! website

A plain HTML/CSS/JS site. No build step, no framework, no dependencies.

```
index.html      ← all the page content
css/style.css   ← all the styling (colors are at the top under :root)
js/main.js      ← mobile menu, conversation-starter button, back-to-top
images/         ← photos + logo
```

## Preview locally
Double-click `index.html`, or for a proper local server:
```
cd sayhey
python3 -m http.server 8000     # then open http://localhost:8000
```

## Before you publish: fill in the TODOs
Search `index.html` for `TODO`:
- **Connector sign-up link**: make a free Google Form / Tally / Airtable form and paste its URL
- **Email**: replace `hello@example.com` (a free Gmail like sayheydc@gmail.com is fine for now)
- **Instagram**: replace `https://instagram.com/` with your handle

## Publish for free with GitHub Pages
1. Make a GitHub account and create a public repo, e.g. `sayhey`.
2. Upload the contents of this folder (Add file → Upload files, drag everything in, commit).
   Or: `git init && git add . && git commit -m "first site" && git remote add origin <url> && git push -u origin main`
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `(root)` → Save.
4. In about a minute it's live at `https://<username>.github.io/sayhey/`.

To update it later: edit, commit, push. It redeploys on its own.

**Alternatives:** Netlify (drag the folder onto app.netlify.com/drop) and Cloudflare Pages are also free and just as easy.

## Custom domain (optional, ~$10–15/yr)
Buy something like `sayheydc.org` from Cloudflare Registrar, Porkbun or Namecheap. Then in GitHub
Settings → Pages → Custom domain, enter it and follow the DNS instructions (four A records + a CNAME for `www`).
Tick **Enforce HTTPS**.

> `.org` is available to anyone. You don't need to be a registered nonprofit.

## Editing tips
- Brand colors are the `--yellow`, `--mustard`, `--cream` variables at the top of `style.css`.
- Add a "Spotted" photo: drop a square-ish JPG in `images/` and copy one `<figure class="polaroid ...">` block.
  Tape colors: `tape-pink`, `tape-mint`, `tape-yellow`.
- Add conversation starters in the `starters` list in `js/main.js`.
- Keep photos under ~300 KB each (squoosh.app is great for compressing) so the site stays fast.
