# Scandoc — public information website

Static GitHub Pages website for the Scandoc Android/iOS document scanner.
Operator: Ondřej Novotný, info@vyvojari-uo.cz.

Public URLs:
- https://ondrejnovotny.github.io/scandoc/
- Czech: https://ondrejnovotny.github.io/scandoc/cs/
- English: https://ondrejnovotny.github.io/scandoc/en/

Each language includes privacy and GDPR information, data deletion, terms and support.
Only this website is published here; the application source is not required.

GitHub Pages source: `main`, `/docs`. Website files belong in `/docs` in this
repository. `.nojekyll` enables direct static serving. No compilation, npm,
JavaScript, external fonts, trackers or consent banner is needed for the site.
GitHub's own hosting logs are described in the privacy policy.

The app operator must keep the policy and store disclosures aligned with the
distributed app, third-party SDKs and actual handling of support messages.
This policy specifies support-message retention of up to 12 months after resolution,
with necessary legal exceptions. Update it if actual support processes change.

UI test definitions: `tests/pages.spec.js` (Playwright). UI tests must not be run
without explicit permission. When authorised, install `@playwright/test` in a
test workspace and use `SCANDOC_SITE_URL` to override the target URL.
