# Next.js + shadcn/ui Template

A clean, production-ready starter template featuring **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **40+ pre-configured shadcn/ui components**.

## Features

- **Next.js 15** with App Router
- **React 19** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** component library (40+ components pre-installed)
- **Dark mode** support via next-themes
- **Form handling** with react-hook-form and zod
- **Charts** with Recharts
- **Responsive** mobile-first design

## Quick Start

### Use this Template

1. Click the **"Use this template"** button above
2. Clone your new repository
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Available shadcn/ui Components

| Category | Components |
|----------|------------|
| Layout | Accordion, Aspect Ratio, Card, Collapsible, Resizable, Scroll Area, Separator |
| Forms | Button, Checkbox, Form, Input, Input OTP, Label, Radio Group, Select, Slider, Switch, Textarea, Toggle |
| Feedback | Alert, Alert Dialog, Dialog, Drawer, Progress, Sheet, Skeleton, Sonner, Toast, Tooltip |
| Navigation | Breadcrumb, Command, Context Menu, Dropdown Menu, Menubar, Navigation Menu, Pagination, Tabs |
| Data Display | Avatar, Badge, Calendar, Carousel, Chart, Hover Card, Table |
| Composite | Sidebar |

## Adding More Components

Use the shadcn/ui CLI to add components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add date-picker
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles with CSS variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── theme-provider.tsx
│   └── ui/               # shadcn/ui components
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts          # cn() utility
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Theme

Edit the CSS variables in `app/globals.css` to customize colors:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... */
}
```

### Tailwind

Extend the theme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Add custom colors
    },
  },
}
```

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/cloudnerddev/nextjs-shadcn-template)

### Other Platforms

```bash
npm run build
npm start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

MIT
