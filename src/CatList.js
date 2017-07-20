import React from 'react'

const CatList = ({catPics}) => {
  const cats = catPics.map((c, index) => <li key={`cat-${index}`}><img alt='catpic' src={c.url} /></li>)
  return (
    <ul>
      {cats}
    </ul>
  )
}

export default CatList
