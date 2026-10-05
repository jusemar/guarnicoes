<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep the product-management prototype frontend-only with transient React state; the requested delivery excludes backend and persistent storage.
- Keep generic product/group/option models separate from editing and customer-preview UI so weekly rules do not depend on group names.
- Define all interface styling and semantic color tokens in src/styles.css for a consistent design system.
- Pre-bundle the editor's React and UI dependencies in Vite optimizeDeps to avoid initial-preview dependency discovery replacing the React graph mid-render.

- Use bottom navigation and full-screen editor dialogs on phones, a navigation rail on tablets, and touch-size controls with safe-area-aware action bars to preserve mobile usability.
