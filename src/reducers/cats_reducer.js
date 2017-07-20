export const catsReducer = (state = {loading: false, pictures: []}, action) => {
  switch (action.type) {
    case 'LOADING_CATS':
      console.log('fetching', state)
      return {...state, loading: true}
    case 'FETCH_CATS':
      console.log('fetched', state)
      return {loading: false, pictures: action.payload}
    default:
      return state
  }
}
