const initialSelectDomainStore = null

const selectDomainReduser = (state = initialSelectDomainStore, action) => {
  switch (action.type) {
  case 'ON_SELECT_DOMAIN':
    return action.payload
  }
  return state
}

export default selectDomainReduser
