let initialDataStore = ''

const findDomainReduser = (state = initialDataStore, action) => {
  switch (action.type) {
  case 'ON_FIND':
    return action.payload
  }
  return state
}

export default findDomainReduser
