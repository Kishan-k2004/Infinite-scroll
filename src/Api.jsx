import { useEffect, useState, useCallback } from 'react'
import Masonry from 'react-masonry-css'
import { createClient } from 'pexels'
import Loader from './Loader'
import Card from './Card'
import './Api.css'
import './App.css'

function Api() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const fetchApi = useCallback(async () => {
    setLoading(true)
    try {
      const client = createClient(import.meta.env.VITE_Api_Key)
      const response = await client.photos.curated({ per_page: 40, page: pageNo })
      setData((prev) => [...prev, ...response.photos])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [pageNo])

  useEffect(() => {
    fetchApi()
  }, [fetchApi])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading
      ) {
        setPageNo((prev) => prev + 1)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading])

  const breakpointColumnsObj = {
  default: 6,
  1100: 4,
  700: 3,
  500: 2
  }


  return (
    <div>
      <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid p-4"
      columnClassName="my-masonry-grid_column"
      >
        {data.map((photo) => (
        <Card key={photo.id} photo={photo} />
        ))}
      </Masonry>


      {loading && (
        <div className='flex justify-center items-center py-6'>
          <Loader />
        </div>
      )}
    </div>
  )
}

export default Api
