# ADR-0004 — State Management Strategy (Local + Remote)

## Status
Accepted — 2025-11-13


## Context
VetCare requires a clear, maintainable, and scalable approach to state management.  
The app will manage two distinct categories of state:

- **Local/UI state:** filters, modal visibility, stepper progress, temporary form values.
- **Remote/server state:** appointments, pets, owners, clinical records, etc.

Requirements:
- Simple to implement and reason about.
- Compatible with Next.js App Router and React Server Components.
- Performant for data-heavy views.
- Easy to extend over time.


## Decision
**Use Zustand for all local/UI state**  
**Use TanStack Query (former React QUery) for all remote/server state**

### Why Zustand for local state?
- Extremely lightweight, minimal boilerplate.
- No providers needed for simple stores.
- Predictable updates without extra rerenders.
- Clean separation of concerns: each store can model a slice of UI behaviour.
- Great developer experience and TS support.
- Allows you to keep local state entirely client-side while using Next.js server components where appropriate.

### Why TanStack Query for remote state?
- Best-in-class caching for async data.
- Handles loading/error states, retries, background refresh, stale-while-revalidate.
- Perfect integration with Next.js (fetch on server or client, dehydrated states, etc.)
- Reduces boilerplate vs Redux RTK Query or SWR.
- Scales well as the API grows.

## Alternatives Considered

- **React Context**: Simple and light API, but can become bloated and cause unnecessary rerenders.
- **Redux Toolkit**: Robust, long-run library, but overkill for this app.
- **MobX**: powerful but less idiomatic in the modern React ecosystem.


## Consequences

### Benefits
- ✅ Clear separation: **Zustand = view/UI behaviour**, **TanStack Query = data fetching**.
- ✅ Minimize code complexity and cognitive load.
- ✅ Prevents misuse of global stores for async data.
- ✅ Highly testable and modular.

**Trade-offs:**
- ❌ Requires being aware of avoiding putting remote data in Zustand.
- ❌ Zustand has fewer conventions than Redux → developers must establish internal patterns.
- ❌ TanStack Query introduces a learning curve if unfamiliar with caching policies.

Zustand offers the ideal balance of simplicity and power for local/UI state, while TanStack Query handles remote data with industry-standard mechanisms.  
This combination provides a clean, scalable, and pragmatic state management architecture for VetCare.


## Alternatives Considered

- **React Context** — simple, but becomes verbose and inefficient when managing more than basic state.
- **Redux Toolkit** — too heavy for this project; excellent for enterprise scale.
- **MobX** — less idiomatic for modern React projects.
- **Using only TanStack Query** — awkward for UI state; leads to mixing concerns.
- **Using only Zustand** — possible, but loses powerful remote cache features and would reinvent async logic.


## References
- 🔗 Links to documentation, pull requests, or related articles.
- Example: [Radix UI Primitives](https://www.radix-ui.com/primitives)
