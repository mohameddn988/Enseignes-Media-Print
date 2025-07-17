import { colors, semanticColors } from '../colors'
import { fonts, typography } from '../fonts'

// Main theme configuration
export const theme = {
  // Color system
  colors: {
    ...colors,
    ...semanticColors,
  },

  // Typography system
  typography: {
    fonts,
    ...typography,
  },

  // Spacing scale (based on 4px base unit)
  spacing: {
    0: '0px',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    7: '1.75rem',   // 28px
    8: '2rem',      // 32px
    9: '2.25rem',   // 36px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem',    // 256px
  },

  // Border radius
  borderRadius: {
    none: '0px',
    sm: '0.125rem',    // 2px
    default: '0.25rem', // 4px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    '2xl': '1rem',     // 16px
    '3xl': '1.5rem',   // 24px
    full: '9999px',
  },

  // Box shadows
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: '0 0 #0000',
  },

  // Breakpoints for responsive design
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index scale
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    modal: '1000',
    dropdown: '1000',
    sticky: '1020',
    fixed: '1030',
    modalBackdrop: '1040',
    offcanvas: '1050',
    tooltip: '1070',
  },

  // Animation durations
  animation: {
    duration: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    timing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // Component-specific configurations
  components: {
    button: {
      sizes: {
        sm: {
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          borderRadius: '0.25rem',
        },
        md: {
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '0.375rem',
        },
        lg: {
          padding: '1rem 2rem',
          fontSize: '1.125rem',
          borderRadius: '0.5rem',
        },
      },
    },
    card: {
      padding: '1.5rem',
      borderRadius: '0.5rem',
      shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    },
    input: {
      padding: '0.75rem 1rem',
      borderRadius: '0.375rem',
      fontSize: '1rem',
    },
  },
}

// Dark theme variant
export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: {
      primary: colors.secondary[900],
      secondary: colors.secondary[800],
      tertiary: colors.secondary[700],
    },
    text: {
      primary: colors.secondary[50],
      secondary: colors.secondary[200],
      muted: colors.secondary[400],
      inverse: colors.secondary[900],
    },
    border: {
      light: colors.secondary[700],
      medium: colors.secondary[600],
      strong: colors.secondary[500],
    },
  },
}

export default theme 