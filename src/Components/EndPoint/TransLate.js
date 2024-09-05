export const translateRecibe = async (text, selectedLanguage) => {
  const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2'
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'b38c05a8bdmsh16fcd6f2ce08ad3p1083f4jsn242458962e88',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
    body: new URLSearchParams({
      q: text,
      target: selectedLanguage,
      source: 'es',
    }),
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    const textResult = result.data.translations[0].translatedText
    return textResult
  } catch (error) {
    console.error(error)
  }
}
