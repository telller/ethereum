class Domain {
  constructor (obj) {
    this.id = obj.id
    this.name = obj.name.toLowerCase()
    this.price = obj.price
    this.wallet = obj.attributes[0] && obj.attributes[0].options[0].toLowerCase()
    this.categories = obj.categories.map(item => item.name.toLowerCase())
    this.description = obj.description
    this.link = obj.permalink
    this.status = obj.status
  }
}

let initialDataStore = []

const dataReducer = (state = initialDataStore, action) => {
  switch (action.type) {
  case 'SET_LIST_DOMAINS':
    return action.payload.map(item => new Domain(item)).reverse()
  case 'DEL_DOMAIN':
    break
  }
  return state
}

export default dataReducer
