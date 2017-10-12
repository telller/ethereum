
let initialCategoriesStore = []

const categoriesReducer = (state = initialCategoriesStore, action) => {
  switch (action.type) {
  case 'SET_LIST_CATEGORIES':
    return action.payload
  }
  return state
}

export default categoriesReducer
