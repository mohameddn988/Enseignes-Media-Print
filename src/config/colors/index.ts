// Brand colors for Signs and Graphics Company
export const colors = {
  // Primary brand colors - Modern blue scheme
  primary: {
    50: '#eff9fe',
    100: '#dff2fd',
    200: '#b7e7fb',
    300: '#7fd7f8',
    400: '#40c4f2',
    500: '#32B8F1',
    600: '#1595d1',
    700: '#1578a9',
    800: '#18658b',
    900: '#1a5474',
  },
  
  // Secondary colors - Modern grays
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  
  // Accent colors - Vibrant pink for CTAs and highlights
  accent: {
    50: '#fef7f5',
    100: '#feebe8',
    200: '#fdd4d1',
    300: '#fbb5b3',
    400: '#f7878a',
    500: '#FC32A2',
    600: '#e91e63',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
  },
  
  // Secondary accent - Bright yellow
  yellow: {
    50: '#fffef0',
    100: '#fffacd',
    200: '#fff59d',
    300: '#ffed6b',
    400: '#ffe042',
    500: '#FDE127',
    600: '#eab308',
    700: '#ca8a04',
    800: '#a16207',
    900: '#854d0e',
  },
  
  // Status colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  warning: {
    50: '#fefce8',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
}

// Semantic color mappings
export const semanticColors = {
  background: {
    primary: colors.secondary[50],
    secondary: colors.secondary[100],
    tertiary: colors.secondary[200],
  },
  text: {
    primary: colors.secondary[900],
    secondary: colors.secondary[700],
    muted: colors.secondary[500],
    inverse: colors.secondary[50],
  },
  border: {
    light: colors.secondary[200],
    medium: colors.secondary[300],
    strong: colors.secondary[400],
  },
}

export default colors 