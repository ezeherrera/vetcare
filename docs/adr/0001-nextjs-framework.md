# ADR 0001 - Choose NextJS as framework base


## Status
Status: ✅ Accepted  
Date: 2025-10-30


## Context
The project requires a frontend framework that would provide a solud fundation for building a modern, maintenable, scalable web app with good performance. 
Besides, as a technical demo, one of the goals includes demonstrating good practices in frontend architecture, clean coding and modern JavaScript/TypeScript standards, while remaining not too complex.

Requirements:
- **React-based**: The primary goal of this technical demo is showcase strong React and TypeScript skills.
- **Production ready**: Production-grade framework, widely adopted and with a long-term maintenance and strong community avoiding frameworkd thart are too immature or experimental.
- **SSR and SSG**: Server Side Rendering and Static Site Generation out of the box, to showcase knowledge on performance optimization and rendering strategies.
- **CI/CD**: Easy to configure a CI/CD workflow.


## Decision
For this technical demo, the framework chosen is **NEXT.JS**.


## Alternatives Considered

- **React + Vite:** The simplest and right thru option, but lacks some critical features (routing, SSR...).  
- **Remix:** Modern and fun to work with, but not so widspread on hiring context as Next.js.
- **Angular, Nuxt:** Outside React ecosystem (althought Angular is still considered for future demos o even a port of vetcare).


## Consequences

**Benefits:**
- ✅ Solid fontend framework based on React.
- ✅ Production grade, widely used by top-tier frontend teams.
- ✅ Excellent documentation.
- ✅ Powerful CLI
- ✅ CI/CD out of the box thanks to Vercel integration.

**Trade-offs:**
- ❌ Certaing grade of complexity, as several layers of abstraction (routing, server components, fetching patterns...), can lead to an increase of **cognitive load**. Slight **over-engineering** for small projects compared to smaller o lighter options.
- ❌ Risk of **large bundles** or **high build times**.
- ❌ **Coupled** to Vercel ecosystem for some advanced features.


## References
- [Next.js](https://nextjs.org/)
- [Next.js vs Nuxt,js](https://daily.dev/es/blog/nextjs-vs-nuxtjs-whats-best)
- [Remix](https://remix.run/)
