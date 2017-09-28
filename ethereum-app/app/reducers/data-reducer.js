import Domain from '../components/Domain.jsx'

let initialDataStore = []

const dataReducer = (state = initialDataStore, action) => {
  switch (action.type) {
  case 'SET_LIST_DOMAINS':
    return action.payload.map(item => new Domain(item))
  case 'DEL_DOMAIN':
    break
  }
  return state
}

export default dataReducer
