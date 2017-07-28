let initialDataStore = {
  name: '',
  mail: '',
  comment: ''
}

const contactInfoReduser = (state = initialDataStore, action) => {
  switch (action.type) {
  case 'CONTACT_NAME':
    return Object.assign(
      {},
      state,
      {
        name: action.payload.split(' ').join('%20')
      }
    )
  case 'CONTACT_MAIL':
    return Object.assign(
      {},
      state,
      {
        mail: action.payload
      }
    )
  case 'CONTACT_COMMENT':
    return Object.assign(
      {},
      state,
      {
        comment: action.payload.split(' ').join('%20')
      }
    )
  }
  return state
}

export default contactInfoReduser
