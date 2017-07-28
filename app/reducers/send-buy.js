let initialDataStore = {
  name: '',
  mail: '',
  comment: '',
  domain: '',
  price: 0,
  error: false
}

const sendBuyReduser = (state = initialDataStore, action) => {
  switch (action.type) {
  case 'SEND_BUY_NAME':
    return Object.assign(
      {},
      state,
      {
        name: action.payload.split(' ').join('%20')
      }
    )
  case 'SEND_BUY_MAIL':
    return Object.assign(
      {},
      state,
      {
        mail: action.payload
      }
    )
  case 'SEND_BUY_COMMENT':
    return Object.assign(
      {},
      state,
      {
        comment: action.payload.split(' ').join('%20')
      }
    )
  case 'SEND_BUY_DOMAIN':
    return Object.assign(
      {},
      state,
      {
        domain: action.payload
      }
    )
  case 'SEND_BUY_PRICE':
    return Object.assign(
      {},
      state,
      {
        price: action.payload
      }
    )
  case 'SEND_BUY_ERROR':
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

export default sendBuyReduser
