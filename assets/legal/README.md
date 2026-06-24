# Legal Document Versions

Legal documents are stored as immutable date-based HTML fragments.

- `privacy.html` and `terms.html` are viewer pages only.
- Add one fragment per effective date:
  - `assets/legal/privacy/YYYY-MM-DD.html`
  - `assets/legal/terms/YYYY-MM-DD.html`
- Each fragment may include one or more language bodies:

```html
<div class="policy" data-lang="ko">
  ...
</div>

<div class="policy" data-lang="en" hidden>
  ...
</div>
```

After adding a new dated fragment, add it to the matching version list in
`assets/js/privacy.js` or `assets/js/terms.js` and mark exactly one entry as
`current: true`.
