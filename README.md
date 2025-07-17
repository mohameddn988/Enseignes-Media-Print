# Signs & Graphics Company Website

A modern, professional website for a signs and graphics company built with Next.js, Tailwind CSS 3, and GSAP animations.

## 🚀 Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS 3** - Utility-first CSS framework
- **GSAP** - Professional-grade animations
- **React** - UI library

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx    # Button component
│   │   └── Card.tsx      # Card component
│   ├── layout/           # Layout components
│   │   └── Header.tsx    # Header component
│   └── common/           # Common components
├── config/               # Configuration files
│   ├── theme/           # Theme configuration
│   │   └── index.ts     # Main theme config
│   ├── colors/          # Color system
│   │   └── index.ts     # Color definitions
│   └── fonts/           # Font configuration
│       └── index.ts     # Font definitions
├── assets/              # Static assets
│   ├── images/          # Image files
│   └── icons/           # Icon files
├── lib/                 # External library configurations
│   └── gsap.ts         # GSAP configuration and animations
├── utils/               # Utility functions
│   └── cn.ts           # Class name utility
├── types/               # TypeScript type definitions
│   └── index.ts        # Common types
└── hooks/               # Custom React hooks
    └── useGSAP.ts      # GSAP animation hooks
```

## 🎨 Design System

### Colors
- **Primary**: Professional blue palette (#3b82f6)
- **Secondary**: Modern gray palette (#64748b)
- **Accent**: Warm orange for CTAs (#d97706)
- **Status**: Success, warning, and error colors

### Typography
- **Display Font**: Poppins (headings and hero sections)
- **Body Font**: Inter (regular text content)
- **Monospace**: JetBrains Mono (code)
- **Serif**: Playfair Display (elegant text)

### Components
- Consistent button variants (primary, secondary, outline, ghost)
- Card component with hover effects
- Responsive header with mobile menu

## 🎬 Animation Features

### GSAP Integration
- Custom animation presets for common effects
- Scroll-triggered animations
- Stagger animations for multiple elements
- Hover effects and transitions
- React hooks for easy animation integration

### Available Animations
- `fadeIn` - Simple fade in with slide up
- `fadeInUp/Down/Left/Right` - Directional fade animations
- `scaleIn` - Scale animation with bounce
- `staggerFadeIn` - Stagger animation for multiple elements
- `scrollFadeIn` - Scroll-triggered fade in
- `parallax` - Parallax scroll effects
- `counterUp` - Number counting animation

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📦 Key Dependencies

- `next` - React framework
- `react` & `react-dom` - React library
- `typescript` - Type safety
- `tailwindcss` - CSS framework
- `gsap` - Animation library
- `clsx` & `tailwind-merge` - Class name utilities

## 🎯 Features

### Business Features
- Professional homepage with hero section
- Services showcase with animated cards
- Statistics section with counters
- Call-to-action sections
- Responsive design for all devices

### Technical Features
- TypeScript for type safety
- Custom design system with consistent colors and typography
- Reusable UI components
- Custom GSAP animation hooks
- Optimized performance with Next.js
- SEO-friendly structure

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1280px+)
- Tablet (768px - 1279px)
- Mobile (320px - 767px)

## 🎨 Customization

### Adding New Colors
Edit `src/config/colors/index.ts` to add new color definitions.

### Adding New Fonts
Update `src/config/fonts/index.ts` and import them in `src/app/layout.tsx`.

### Creating New Components
Add components to the appropriate folder:
- `src/components/ui/` for reusable UI elements
- `src/components/layout/` for layout components
- `src/components/common/` for common functionality

### Adding New Animations
Create new animation functions in `src/lib/gsap.ts` or add new hooks in `src/hooks/useGSAP.ts`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please contact the development team.
