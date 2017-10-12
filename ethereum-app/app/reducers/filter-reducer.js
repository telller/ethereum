let initialDataStore = {
  categories: [],
  domain: ''
}

const filterReduser = (state = initialDataStore, action) => {
  switch (action.type) {
  case 'SET_SELECT_CATEGORIES':
    return {
      ...state,
      categories: action.payload
    }
  case 'ADD_SELECT_CATEGORIES':
    return {
      ...state,
      categories: [...state.categories, action.payload]
    }
  case 'DEL_SELECT_CATEGORIES':
    return {
      ...state,
      categories: state.categories.filter(item => item !== action.payload)
    }
  }
  return state
}

export default filterReduser
