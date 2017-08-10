let initialDataStore = [
  {name: 'accountreceivable', price: 1, address: '0x123lqowemqwo4e012i'},
  {name: 'mannheim', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'etherwarrior', price: 1, address: '0x123lqowemqwo4e012i'},
  {name: 'sexymama', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'cryptomania', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'mickymouse', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'accountpayable', price: 1, address: '0x123lqowemqwo4e012i'},
  {name: 'paymeout', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'fabiana', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'natascha', price: 1, address: '0x123lqowemqwo4e012i'},
  {name: 'paythefee', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'zhytomir', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'yogastore', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'yoga-shop', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'yoga-store', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'bastelladen', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'bastel-shop', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'crafting-shop', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'fishing-shop', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'pipe-store', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'drug-store', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'drogenladen', price: 1, address: '0x123lqowemqwo4e012i'},
  {name: 'iphonestore', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'iphoneshop', price: 2, address: '0x123lqowemqwo4e012i'},
  {name: 'iwatchstore', price: 2, address: '0x123lqowemqwo4e012i'},
  {name: 'gamblingwallet', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'Henriette', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'Madleen', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'Leonora', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'Chayenne', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'Liesbeth', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'Seraphina', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'Henrieke', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'Philine', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'Margarethe', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'Klemens', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'Thorben', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'WINTHROP', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'COCKBURN', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'CEMETERY', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'WHALLEY', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'klimahife', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'médecinssansfrontières', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'fightclimatechange', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'fightglobalwarming', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'House-arryn', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'house-Baratheon', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'House-bolton', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'house-frey', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'house-greyjoy', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'house-lannister', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'house-martell', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'house-stark', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'house-targaryen', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'house-tully', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'house-tyrell', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'jorahmormont', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'branstark', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'seaworth', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'Catelyn', price: 1, address: '0x123lqowemqwo4e012i'},
  {name: 'Stannis', price: 0, address: '0x123lqowemqwo4e012i', isMakeOffer: true},
  {name: 'RamsayBolton', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'nedstark', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'high-sparrow', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'Rickonstark', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'Walderfrey', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'PeterDinklage', price: 0.01, address: '0x123lqowemqwo4e012i'},
  {name: 'Sergeras', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'Nefarius', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'Kaelthas', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'Aegwynn', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'JainaProudmoore', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'VarianWrynn', price: 0.05, address: '0x123lqowemqwo4e012i'},
  {name: 'Hellscream', price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'Whisperwind', price: 0.1, address: '0x123lqowemqwo4e012i'}
]

initialDataStore = initialDataStore.map((item, key) => (
  {key, name: item.name.toLowerCase(), price: item.price, isMakeOffer: item.isMakeOffer}
)).sort((a, b) => b.price - a.price)

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
