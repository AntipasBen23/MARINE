# B&R Marine Energy Logistics Ltd - Website

A modern Next.js website for B&R Marine Energy Logistics Ltd, showcasing mining operations, projects, and investment opportunities in Nigeria.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Image Optimization:** Next/Image

## 📁 Project Structure

```
src/
├── app/                    # Next.js pages
│   ├── about/             # About page
│   ├── operations/        # Operations page
│   ├── projects/          # Projects pages
│   ├── equipment/         # Equipment page
│   ├── minerals/          # Minerals catalog
│   ├── investment/        # Investment opportunities
│   ├── contact/           # Contact page
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading state
│   └── not-found.tsx      # 404 page
├── components/
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── HeroSection.tsx
│       └── StatsCard.tsx
├── lib/
│   ├── data/              # Static data
│   │   ├── company.ts
│   │   ├── minerals.ts
│   │   └── equipment.ts
│   └── utils.ts           # Utility functions
└── types/                 # TypeScript types

public/
└── images/                # Image assets
    ├── equipment/
    ├── projects/
    └── sites/
```

## 🎨 Color Scheme

- **Primary Brown:** `rgb(107, 42, 0)` - Headings, primary text
- **Gold:** `rgb(224, 151, 65)` - Secondary text, accents, buttons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🖼️ Required Images

Place the following images in `/public/images/`:

### Equipment (`/equipment/`)
- `cat-d349.jpg` - CAT D349 Excavator
- `shaker-table.jpg` - Gold Washing Shaker Table
- `amphibious-washer.jpg` - ALUVIA Amphibious Washer
- `mining-camp.jpg` - Mining Camp Housing

### Projects (`/projects/`)
- `kogi-gold.jpg` - Kogi Project thumbnail
- `kogi-gold-hero.jpg` - Kogi Project hero
- `cross-river.jpg` - Cross River thumbnail
- `cross-river-hero.jpg` - Cross River hero

### Sites (`/sites/`)
- `kogi-site.jpg` - Kogi operations
- `cross-river-site.jpg` - Cross River operations

### Other
- `hero-background.jpg` - Home page hero
- `about-hero.jpg` - About page hero
- `managing-director.jpg` - MD photo

## 🌐 Pages

- `/` - Home page
- `/about` - Company information
- `/operations` - Mining operations
- `/projects` - Projects listing
- `/projects/kogi-gold` - Kogi State project details
- `/projects/cross-river` - Cross River project details
- `/equipment` - Equipment showcase
- `/minerals` - 64+ minerals catalog
- `/investment` - Investment opportunities
- `/contact` - Contact information

## 📊 Key Features

- ✅ Responsive design
- ✅ SEO optimized
- ✅ Image optimization
- ✅ Type-safe with TypeScript
- ✅ Reusable components
- ✅ Loading states
- ✅ 404 handling
- ✅ Mobile navigation

## 🏢 Company Info

**B&R Marine Energy Logistics Ltd**
- **Sites:** Kogi State (410 CUs), Cross River State (380 CUs)
- **Focus:** Gold exploration, multi-mineral extraction
- **Managing Director:** Israel Edu (CPT RTD, MSTPHD.)

## 📝 License

© 2025 B&R Marine Energy Logistics Ltd. All rights reserved.