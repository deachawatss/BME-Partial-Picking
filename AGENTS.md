# Repository Guidelines

## Project Structure & Module Organization
The PK monorepo groups every runtime under `apps/`. `apps/frontend/src` contains the Angular 20 client; keep features under `app/feature-name` with assets in `assets/` and shared styles in `styles/`. The Rust API sits in `apps/backend` with handlers split by responsibility (`auth_handlers.rs`, etc.) and reads configuration from the root `.env`. `apps/bridge-service` hosts the .NET bridge for scale integration. Reference architecture notes in `docs/`, and reuse helper scripts from `scripts/`. Build outputs should stay inside the generated `dist/`, `target/`, or `bin/` folders already ignored by Git.

## Build, Test, and Development Commands
- `npm run install:all` hydrates Node packages, Rust crates, and .NET dependencies.
- `npm run dev:all` cleans stale processes, then starts Angular (6060), Rust (7070), and the bridge (5000); use the service-specific `npm run dev:*` scripts when iterating locally.
- `npm run build:all` creates production artifacts; `npm run build:frontend|backend|bridge` rebuild a single runtime.
- `npm run test:frontend` runs Jasmine/Karma specs; `npm run test:backend` runs `cargo test`. Run both before every PR. Lint and format with `npm run lint:frontend`, `npm run lint:backend`, `npm run format:frontend`, and `npm run format:backend`.

## Coding Style & Naming Conventions
Angular code should use 2-space indentation, camelCase services, kebab-case selectors, and SCSS tokens defined in `docs/css-*.md`. Rust follows edition 2021 defaults: snake_case modules/functions, PascalCase types, error handling via `anyhow` and `?`; always run `cargo fmt` and `cargo clippy`. In the bridge, follow .NET 8 standards (PascalCase classes, explicit async suffixes). Store secrets only in untracked `.env` files.

## Configuration & Environment
- Do not hardcode IP addresses or service URLs in source code—load everything from the `.env` files via the existing config bootstrap scripts before you start development.
- If you encounter a module that bypasses `.env` or duplicates configuration values, fix the inconsistency immediately and align it with the shared environment loading helpers.

## Testing Guidelines
Create Angular `*.spec.ts` files alongside components and keep them deterministic; `ng test`’s watch mode should stay green before merging. Back-end tests belong either in inline `#[cfg(test)]` modules or `apps/backend/tests/`; prefer `tokio::test` for async routes. Document manual scale-device checks in PRs until the dedicated Playwright e2e suite is reinstated.

## Commit & Pull Request Guidelines
History follows Conventional Commits (`feat:`, `fix:`, etc.); add a scope (`feat(frontend): …`) when work touches one runtime. Bundle schema/config migrations with the code that relies on them. Every PR should summarize intent, note any environment changes, list the commands you ran, and include screenshots or gifs for UI updates. Request review from the owning runtime and confirm `npm run dev:all` boots clean before requesting merge.


## Conversation Context Hygiene
- Maintain `README.md` and `HANDOFF.md` as living documents to prevent context drift during long sessions.
- Refresh both files proactively with purpose, architecture, stack versions, run commands, recent decisions, current status, open issues, artifacts, test results, and environment details using the provided combined prompt.
- Trigger updates whenever omissions, contradictions, hallucinated info, or latency oddities appear; do not wait for token limits.
- Preserve existing tool versions and configurations when refreshing; never invent upgrades without explicit direction.


using playwright mcp to test  e2e

use credentials  
deacahwat / Wind@password9937
