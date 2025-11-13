# ADR 0003 - Adopt Material UI (MUI) as the design system


## Status

Status: ✅ Accepted  
Date: 2025-11-3


## Context

VetCare Dashboard needs a solid UI that looks professional, useful and attractive. At the same time, as a technical demo, a balance between development effort, skills showcase and results should be well thought.

Requirements:
- The UI should be modern, consistent, and production-grade.
- A well nourished suite of UI solutions for different needs should be provided (form inputs, calendar, "datepicker", "dropdown"...).
- Aesthetics should be relatively easy to customize or, at least, easily themeable.
- UI components should be easy to include on the project, ideally something 'plug and play' like, to optimize development effort.
- Production-grade, well documented, maintained and widely recognized.

## Decision
We decided to adopt **Material UI (MUI)** as the base for the component system across the VetCare Dashboard project.

## Alternatives Considered

- **Shadcn/UI + Radix:** It's an emerging component library with a strong base of users. Very aligned with current trends of getting your 'own visual identity' than MUI's corporative look and feel. Highly customizable via Tailwind CSS. Requires a significantly effort to get a consistent UI.
- **React Bootstrap:** Good component library. Functional but visually a bit outdated. Not so widespread nowadays.
- **Ant Design:** Design system widely used on B2B environments but less spread on modern projects. Coupled to LESS.


## Consequences

**Benefits:**
- ✅ One of the **most common** component libraries on the industry, mature and widely used and proved.
- ✅ Base on React with TypeScript support.
- ✅ Complete **design system** with a huge base of components, visually solid and coherent.
- ✅ MUI components are functional and visually consistent practically **'out of the box'**.
- ✅ As a result, MUI allows developers to focus on coding the app’s logic, resulting in a faster development pace.

**Trade-offs:**
- ❌ Strong visual identity: the app can be seen as another generic Google-styled app. 
- ❌ Customization beyond Material design guidelines is complex and time-consuming.
- ❌ Not the most light dependency (but it works well with tree-shaking). 
- ❌ Theming overrides can be verbose and require dealing with nested styles or the sx prop.

Overall, MUI provides a strong balance between visual quality, developer productivity, and industry recognition — ideal for a technical showcase project like VetCare.

## References
- [Shadcn UI](https://ui.shadcn.com/)
- [Shadcn UI vs MUI](https://djangostars.com/blog/shadcn-ui-and-material-design-comparison/)
- [Radix UI](https://www.radix-ui.com/)
- [Ant Design](https://ant.design/)
