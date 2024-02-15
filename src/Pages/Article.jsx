import React from 'react'
import './article.css'
import Navigation from '../Components/Navigation'
import { useLocation } from 'react-router-dom'

const Article = (props) => {
  const location = useLocation()
  const element = location.state?.element

  return (
    <div className="article">
        <Navigation />    
        <div className="article-page">
            <h1>{element ? element.title: "title"}</h1>

            <p>{element ? element.data: "data"}</p>

        </div>
        {/* article-page */}
    </div>
    // article
  )
}

export default Article