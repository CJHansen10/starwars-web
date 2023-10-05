import { useEffect, useState } from 'react'
import { fetchMultipleUrls } from './api'
import Loader from './Loader'

export default function Info({ name, data }) {
  const [loading, setLoading] = useState(false)
  const [characterData, setCharacterData] = useState([])
  const [characterUrls, setCharacterUrls] = useState([])
  const [movieTitle, setMovieTitle] = useState('')

  // console.log('INFO > NAME: ', name)
  // console.log('INFO > DATA: ', data)

  // Set the character URLs for further fetching later
  useEffect(() => {
    if (data?.characters != null) {
      setCharacterUrls(data.characters)
    }
  }, [data])

  // Get the movie name
  useEffect(() => {
    // console.log('INFO > movie useEffect > data: ', data)

    setMovieTitle(data.title)
  }, [data])

  useEffect(() => {
    if (characterUrls.length > 0) {
      setLoading(true)
      fetchMultipleUrls(characterUrls)
        .then(dataArray => {
          setCharacterData(dataArray)
          setLoading(false)
        })
        .catch(error => {
          console.error(error.message)
        })
    }
  }, [characterUrls])

  // console.log('INFO > CHARACTER DATA: ', characterData)
  // console.log('INFO > CHAR URLS: ', characterUrls)
  // console.log('INFO > MOVIE NAME: ', movieTitle)

  return loading ? (
    <Loader />
  ) : (
    <div>
      <h2>{movieTitle}</h2>

      <ul>
        {characterData?.map((person, index) => {
          console.log('PERSON: ', person)
          return <li key={index}>{person.name}</li>
        })}
      </ul>
    </div>
  )
}
