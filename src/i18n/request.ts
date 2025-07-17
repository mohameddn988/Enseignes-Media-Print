import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';

export default getRequestConfig(async () => {
  // Get locale from cookie with better error handling
  const cookieStore = await cookies();
  let locale = cookieStore.get('locale')?.value || 'fr';
  
  // Ensure that a valid locale is used
  const supportedLocales = ['fr', 'en'];
  if (!supportedLocales.includes(locale)) {
    locale = 'fr'; // Default to French
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
