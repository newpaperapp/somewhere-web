# Somewhere Website

Static public website for Somewhere at <https://npsomewhere.com>.

- Canonical engineering documentation: [somewhere-docs](https://github.com/newpaperapp/somewhere-docs)
- Web architecture and route reference: [Web Properties Reference](https://github.com/newpaperapp/somewhere-docs/blob/main/platforms/web-properties-reference.md)
- Mobile/backend invitation flow: [Trip Features Reference](https://github.com/newpaperapp/somewhere-docs/blob/main/features/trip-features-reference.md)

This README is the source of truth for local preview, web-only maintenance, and deployment. Cross-repository app-link and invitation behavior belongs in `somewhere-docs`.

## Repository scope

- Product landing page
- App Store and Google Play download page
- Public invitation entry at `/join/`
- Privacy policy and terms viewers with versioned legal fragments
- Apple App Site Association and Android Digital Asset Links
- Search verification and `app-ads.txt`

The site is dependency-free static HTML, CSS, JavaScript, fonts, and images. There is no bundler or package installation step.

## Structure

```text
.
├── index.html
├── download.html
├── join/index.html
├── privacy.html
├── terms.html
├── 404.html
├── assets/
│   ├── css/style.css
│   ├── js/
│   ├── img/
│   ├── fonts/
│   └── legal/
├── .well-known/
│   ├── apple-app-site-association
│   └── assetlinks.json
├── CNAME
└── .github/workflows/static.yml
```

## Local preview

Serve the repository root over HTTP:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. Do not rely on `file:` URLs; nested routes, MIME types, and fallback behavior differ from an HTTP server.

Verify at least:

- `/`
- `/download.html`
- `/join/?token=<43-character-test-token>`
- `/privacy.html`
- `/terms.html`
- an unknown route through `404.html`
- Korean and English content
- light and dark themes
- phone and desktop widths

## Public configuration

`assets/js/config.js` contains public store, support, and developer values. It must not contain Firebase credentials, invite-signing material, service-account data, or mobile API secrets.

When a public URL changes, check the corresponding mobile constant and central documentation.

## Legal documents

Legal fragments are immutable, date-based files under:

- `assets/legal/privacy/YYYY-MM-DD.html`
- `assets/legal/terms/YYYY-MM-DD.html`

Follow [`assets/legal/README.md`](assets/legal/README.md). Add a new dated fragment, then update `assets/js/privacy.js` or `assets/js/terms.js` and mark exactly one version as current. Do not rewrite an effective historical version in place.

## App and Universal Links

The files below are production security configuration:

- `.well-known/apple-app-site-association`
- `.well-known/assetlinks.json`

Keep them synchronized with:

- iOS associated-domain entitlements and application identifier
- Android manifest hosts, application ID, and production signing certificate
- `somewhere-web-open`

The `/join/` page must preserve the opaque invite token through app-open and store fallback paths. It must never read private invite collections directly.

## Deployment

Pushes to `main` run `.github/workflows/static.yml` and deploy the complete repository through GitHub Pages.

Before merging to `main`:

1. Run the local route and responsive checks.
2. Confirm legal version selection when legal files changed.
3. Validate both `.well-known` files as JSON.
4. Check invite-token preservation and store fallbacks.
5. Confirm that no private configuration was added.

`CNAME` is authoritative for `npsomewhere.com`; `.nojekyll` must remain present.
