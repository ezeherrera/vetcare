# ADR 0005 - ESLint Rules Configuration

## Status
Status: ✅ Accepted  
Date: 2025-11-13

## Context
For the VetCare Dashboard, ensuring consistent, clean, and maintainable code is critical to demonstrate good development practices. The project uses **Next.js, TypeScript, and React**, and the ESLint setup must cover:

- TypeScript code quality and recommended rules.
- React best practices including hooks.
- Accessibility (a11y) standards.
- Prettier code formatting enforcement.
- Import ordering and unused imports detection.
- A pragmatic, easy-to-maintain configuration that aligns with industry standards.

## Decision
We decided to adopt a **flat ESLint configuration** with the following key choices:

- **TypeScript rules** via `typescript-eslint/configs.recommended`.
- **React rules** via `eslint-plugin-react.flat.recommended`.
- **Prettier** enforced as an error: `"prettier/prettier": "error"`.
- **Unused imports** checked via `eslint-plugin-unused-imports`.
- **Import order** configured with `"import/order"` to enforce groups and alphabetical sorting.
- **Accessibility** checked using `eslint-plugin-jsx-a11y` (e.g., `"jsx-a11y/alt-text": "warn"`).
- **Plugin JS removed**: pure JS plugin was deemed unnecessary since the project is primarily TypeScript.
- **Global ignores** for build artifacts: `.next/**`, `out/**`, `build/**`, `next-env.d.ts`.
- **Files targeted**: all JS/TS/JSX/TSX files in the project.

This setup ensures code consistency, enforces best practices, and provides a production-grade, maintainable developer environment.

## Alternatives Considered
- **Keeping the JS plugin**: initially considered for legacy JS files, but ultimately unnecessary for this project.
- **Extending only `eslint:recommended`**: insufficient coverage for TS, React hooks, and a11y rules.
- **Separate `.eslintrc.ts`**: considered, but flat config is preferred for simplicity and modern tooling.

## Consequences

### Benefits:
- ✅ Strong code quality enforcement across TypeScript and React.
- ✅ Prettier integration ensures consistent formatting automatically.
- ✅ Unused imports and import order rules maintain clean and readable code.
- ✅ Accessibility rules improve overall code quality and user experience.
- ✅ Modern, flat ESLint setup is maintainable and aligns with industry standards.

### Trade-offs:
- ❌ Developers must adapt to stricter commit-time checks.
- ❌ Some rules (e.g., import order) may require occasional adjustments when adding new modules.

## References
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [typescript-eslint](https://typescript-eslint.io/)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports)
