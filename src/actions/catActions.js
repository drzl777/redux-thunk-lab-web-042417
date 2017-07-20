export function fetchCats () {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' })
    return fetch('http://localhost:3000/db')
      .then(response => response.json())
      .then(cats => cats.images)
      .then(catPics => dispatch({ type: 'FETCH_CATS', payload: catPics }))
  }
}
