import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  console.log('app')
  const [articles, setArticles] = useState([])

  useEffect(()=>{
    const fetchArticles = async() => {
      try{
        const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${import.meta.env.VITE_NYTIMES_DEVELOPER_API_KEY}`)
        const articles = await res.json()
        setArticles(articles.results)
        console.log(articles.results)
      }
    catch(error) {
      console.error(error)
    }
  }
  fetchArticles()
  },[])

  return(
    <>
      <div className='columns-3'>
        {articles.map((article)=> {
          const {
            title,
            abstract,
            media,
            url,
            _id
          } = article
          return(
            <div className="max-w-xs rounded overflow-hidden shadow-lg mb-2">
               <img src={media[0]?media[0]['media-metadata'][2].url:''} alt={title}/>
              <div className="px-6 py-4">
                <div className="font-bold text-x2 mb-2 text-300">{title}</div>
                <p className="text-gray-700 text-base">
                    {abstract}
                </p>
                <a href={url}>Read more...</a>
              </div>
            </div>
          )
          })
        }
      </div>
    </>
  )
}

export default App
