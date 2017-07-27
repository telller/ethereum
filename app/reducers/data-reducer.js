let initialDataStore = [
  {name: 'marlena', block: 4013908, price: 0.5, address: '0xf1d184c1a3032f7586261bea6ee5c2b18ac247fc'},
  {name: 'dlalala', block: 12332, price: 0.7, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 6000, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 1000, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 111, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 12, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 100, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12732, price: 0.9, address: '0x123lqowemqwo4e012i'}
]

const dataReducer = (state = initialDataStore, action) => {
  switch (action.type) {
  case 'ADD_DOMAIN':
    return [
      ...state,
      action.payload
    ]
  case 'DEL_DOMAIN':
    break
  }
  return state
}

export default dataReducer
