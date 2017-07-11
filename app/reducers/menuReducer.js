
let initialCartStore = {
  faqStatus: false,
  graphStatus: true,
  buyStatus: false,
  sellStatus: false
}

const menuReducer = (state = initialCartStore, action) => {
  if (action.type === 'HANDLE_MENU_FAQ') {
    state = Object.assign({}, state, {
      faqStatus: true,
      graphStatus: false,
      buyStatus: false,
      sellStatus: false
    })
    return state
  }
  if (action.type === 'HANDLE_MENU_GRAPH') {
    state = Object.assign({}, state, {
      faqStatus: false,
      graphStatus: true,
      buyStatus: false,
      sellStatus: false
    })
    return state
  }
  if (action.type === 'HANDLE_MENU_BUY') {
    state = Object.assign({}, state, {
      faqStatus: false,
      graphStatus: false,
      buyStatus: true,
      sellStatus: false
    })
    return state
  }
  if (action.type === 'HANDLE_MENU_SELL') {
    state = Object.assign({}, state, {
      faqStatus: false,
      graphStatus: false,
      buyStatus: false,
      sellStatus: true
    })
    return state
  }
  return state
}

export default menuReducer
