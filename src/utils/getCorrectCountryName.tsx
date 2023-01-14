export const getCorrectCountryName = (language: string) => {
  if (language === 'cz') return 'Chech'
  if (language === 'pl') return 'Poland'
  if (language === 'de') return 'Germany'
  return null
}
