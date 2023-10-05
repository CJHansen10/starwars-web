export const getStarWars = async chapter => {
  if (typeof chapter === 'number') throw new Error('chapter must be a number')
  const url = `https://swapi.dev/api/films/${chapter}/`
//   console.log(url)

  const response = await fetch(url)
  const json = await response.json()
  return json
}

export const fetchMultipleUrls = async urls => {
  try {
    const responses = await Promise.all(urls.map(url => fetch(url)))
    const data = await Promise.all(responses.map(response => response.json()))
    return data
  } catch (error) {
    throw new Error('Error fetching data: ' + error.message)
  }
}
