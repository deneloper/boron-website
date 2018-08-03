import React from 'react'

const NewsItem = ({item}) => (
  <div className="news__item">
    <h2>{item.frontmatter.title}</h2>
    <div className="news__content" dangerouslySetInnerHTML={{__html: item.html}}>

    </div>
  </div>
)

export default NewsItem
