

export const Lenguage = async () => {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages'
    const options = {
        method: 'GET',
        headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'b38c05a8bdmsh16fcd6f2ce08ad3p1083f4jsn242458962e88',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options)
        const result = await response.json()
        const resultLenguages = result
        return resultLenguages
    } catch (error) {
        console.error(error)
    }
}