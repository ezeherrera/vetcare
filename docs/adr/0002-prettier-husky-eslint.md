# ADR 0002 - Use Husky, Prettier, ESLint, lint-staged

## Status
Status: ✅ **Accepted**  
Date: 2025-11-3


## Context
For this technical demo, to adopt a set of development helpers/tools is desirable to showcase maturity and commitment with development good practices.

Requirements:
- *Consistent code*: Code format should be consistent to be readable and solid. That also makes commits comparison easier.
- *Leading coding standards*: To follow best practices, developers should be enforce to apply consistent coding standards, avoiding anti-patterns, high cognitive complexity blocks and potential errors.
- *Pre-commit check*: Code quality check should be done before commiting changes, as a control checkpoint, preventing poor quality code to reach the repo and avoiding adding noise to the repo timeline.
- *Production-grade tools*: The tools chosen should be rock solid, production-grade and widely used in development industry.


## Decision
To assure code quality and best practices, I have decided to use the following tools:
- ESLint: Define and apply rules following coding standards and best practices
- Prettier: Format code to keep it consistent
- lint-staged: Apply ESLint and Prettier only to staged files, making checking process more efficient.
- Husky: Handle Git hooks, like running quality checks before commits.


## Alternatives Considered

- **Rome, Biome:** Biome has prove itself as an emerging, significantly faster alternative to ESLint + Prettier. Still immature at the time of writing, though. Community not representative enough.
- **precise-commits:** Apply linters (mainly Prettier) only to changed lines. Poorly maintained (last release 2018).
- **lefthook:** Promising alternative to Husky. Faster and more efficient (parallel jobs). Even though, Husky seems a better choice for technical demo purposes.


## Consequences

### Benefits:
- ✅ **Industry standard tools**: solid, widely spread tools that fit perfect on a hiring context.
- ✅ **Solid QA workflow**: Prettier and ESLint ensure quality code. Husky run checks before commiting protecting repo quality. While `lint staged` makes it more eficient.
- ✅ **Best practices**: One of the main goals of this technical demo is to showcase good practices and commitment with clean code principles and quality code. This setup clearly pushes in that direction.

### Trade-offs:
- ❌ A slightly overlap between ESLint and Prettier.
- ❌ A lot of its effectiveness depends on rules settings: a bad set of rules results on poor code.
- ❌ As it blocks commits until checks are passed, it can be considered a bit aggressive strategy and annoyingly blocking in some scenarios.
- ❌ Breaking changes on compatibility can result in a significant blocker until code is updated or fixed.

## References

- [Consistent Quality Code (Guide)](https://medium.com/@clintjeez/ship-consistent-high-quality-code-a-complete-guide-to-esLint-prettier-husky-lint-staged-8d1584c518a1)
- [precise-commits](https://www.npmjs.com/package/precise-commits)
- [Lefthook vs Husky](https://dev.to/quave/lefthook-benefits-vs-husky-and-how-to-use-30je)
