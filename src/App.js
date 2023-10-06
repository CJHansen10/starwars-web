import { useEffect, useState } from 'react'
import './styles.css'
import Title from './Title.js'
import Entry from './Entry.js'
import Info from './Info.js'
import { getStarWars } from './api'
import dancing_3po2 from './images/dancing_3po2.gif'
import dancing_3po3 from './images/dancing_3po3.gif'

export default function App() {
  const [name, setName] = useState('')
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // console.log(name)

    if (name) {
      const fetchData = async () => {
        setLoading(true)
        try {
          const data = await getStarWars(name)

          // console.log('APP > data: ', data)

          setData(data)
          setLoading(false)
        } catch (error) {
          console.error('ERRRORRRRR')
          setError('NO NETWORK CONNECTION')
        }
      }

      fetchData()
    }
  }, [name])

  // console.log('APP > name: ', name)
  // console.log('APP > data: ', data)

  return (
    <div className="App">
      {/* {loading && <loader />} */}

      <img src={dancing_3po2} class="image1" />
      <div className="MiddlePart">
        <Title text="Star Wars Film Characters 1-6!!" className="title" />
        <Entry action={setName} />
        {loading ? 'LOADING' : <Info name={name} data={data} />}
      </div>
      <img src={dancing_3po3} class="image2" />
      {error && <div>{error}</div>}
    </div>
  )
}
