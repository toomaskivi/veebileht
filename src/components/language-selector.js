const languageSelectorButton = document.getElementById('language-selector');
const availableLanguages = ['en', 'et']; // English and Estonian

languageSelectorButton.addEventListener('click', () => {
  const currentLanguage = localStorage.getItem('language') || 'en'; 
  let nextLanguageIndex = availableLanguages.indexOf(currentLanguage) + 1;

  if (nextLanguageIndex >= availableLanguages.length) {
    nextLanguageIndex = 0; 
  }

  const newLanguage = availableLanguages[nextLanguageIndex];
  localStorage.setItem('language', newLanguage);

  // Update the UI based on the selected language (example)
  if (newLanguage === 'et') {
    document.body.innerHTML = '<p>Tere!</p>'; 
  } else {
    document.body.innerHTML = '<p>Hello!</p>'; 
  }
});