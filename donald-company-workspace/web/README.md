# AbiSim Technologies Demo Site

This is a Next.js demo site showcasing AbiSim Technologies' manufacturing AI solutions.

## Features

- **Hero Section**: Compelling value proposition with animated metrics
- **Technology Overview**: WDBX and AbiSim platform explanation
- **Market Opportunity**: TAM/SAM/SOM visualization
- **Careers Page**: Job postings and company culture
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build

# Start production server
bun start
```

### Development

The site runs on `http://localhost:3000` by default.

## Project Structure

```
web/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── careers/           # Careers page
├── public/                # Static assets
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## Key Components

- **Animated Metrics**: Real-time counter animations for key performance indicators
- **Responsive Grid**: Mobile-first layout that adapts to all screen sizes
- **Interactive Elements**: Hover effects and smooth transitions
- **Markdown Integration**: Dynamic content loading from generated artifacts

## Customization

The site uses Tailwind CSS for styling. Key customization points:

- Colors: Defined in `tailwind.config.js`
- Components: Reusable classes in `globals.css`
- Animations: Framer Motion for smooth transitions

## Deployment

This site can be deployed to any platform that supports Next.js:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Self-hosted with Node.js

## Content Management

The site pulls content from the generated artifacts in the `../outputs/` directory:

- `careers.md` - Careers page content
- `technical_blog.md` - Technical blog posts
- `investor_memo.txt` - Investor materials

## Performance

- Optimized images and assets
- Lazy loading for better performance
- Minimal JavaScript bundle size
- Fast loading times with Next.js optimizations