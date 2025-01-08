import { useRouter } from 'next/router';
import { useTranslation } from 'next-intl';

function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales } = useTranslation();

  const handleLanguageChange = (newLocale) => {
    const pathname = router.pathname;
    const query = router.query;

    router.push(pathname, pathname, { locale: newLocale, query });
  };

  return (
    <div>
      {locales.map((l) => (
        <button 
          key={l} 
          onClick={() => handleLanguageChange(l)} 
          disabled={l === locale}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;