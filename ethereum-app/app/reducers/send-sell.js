let initialDataStore = {
  domain: '',
  price: 0,
  error: false
}

const sendSellReduser = (state = initialDataStore, action) => {
  switch (action.type) {
  case 'SEND_SELL_DOMAIN':
    return Object.assign(
      {},
      state,
      {
        domain: action.payload
      }
    )
  case 'SEND_SELL_PRICE':
    return Object.assign(
      {},
      state,
      {
        price: action.payload
      }
    )
  case 'SEND_SELL_ERROR':
    return Object.assign(
      {},
      state,
      {
        error: action.payload
      }
    )
  }
  return state
}

export default sendSellReduser
