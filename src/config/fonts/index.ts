// Font configuration for Signs and Graphics Company
export const fonts = {
  // Display fonts for headings and hero sections
  display: {
    name: 'Poppins',
    fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    weights: [300, 400, 500, 600, 700, 800],
    sizes: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
      '8xl': '6rem',     // 96px
      '9xl': '8rem',     // 128px
    }
  },

  // Body font for regular text content
  body: {
    name: 'Inter',
    fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    weights: [300, 400, 500, 600, 700],
    sizes: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
    }
  },

  // Monospace font for code
  mono: {
    name: 'JetBrains Mono',
    fallback: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
    weights: [400, 500, 600, 700],
    sizes: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
    }
  },

  // Serif font for elegant text
  serif: {
    name: 'Playfair Display',
    fallback: ['ui-serif', 'Georgia', 'serif'],
    weights: [400, 500, 600, 700, 800, 900],
    sizes: {
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
    }
  }
}

// Typography scale
export const typography = {
  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Font weight mappings
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  }
}

// Google Fonts import URL
export const googleFontsUrl = 'https://fonts.googleapis.com/css2?' +
  'family=Poppins:wght@300;400;500;600;700;800&' +
  'family=Inter:wght@300;400;500;600;700&' +
  'family=JetBrains+Mono:wght@400;500;600;700&' +
  'family=Playfair+Display:wght@400;500;600;700;800;900&' +
  'display=swap'

export default fonts 