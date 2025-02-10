import { languageCodes } from '@/languages';
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';



export const routing = defineRouting({
  localeDetection: false,
  locales: languageCodes,
  defaultLocale: languageCodes[0],
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);