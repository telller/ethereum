let initialDataStore = [
  {name: 'marilena', price: 1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'accountreceivable', price: 1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'mannheim', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', isMakeOffer: true},
  {name: 'etherwarrior', price: 1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'sexymama', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'cryptomania', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'mickymouse', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', isMakeOffer: true},
  {name: 'accountpayable', price: 1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'paymeout', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', isMakeOffer: true},
  {name: 'fabiana', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', isMakeOffer: true},
  {name: 'natascha', price: 1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'paythefee', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', isMakeOffer: true},
  {name: 'zhytomir', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'yogastore', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', isMakeOffer: true},
  {name: 'yoga-shop', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', isMakeOffer: true},
  {name: 'yoga-store', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'bastelladen', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'bastel-shop', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'crafting-shop', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'fishing-shop', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'pipe-store', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'drug-store', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', isMakeOffer: true},
  {name: 'drogenladen', price: 1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'iphonestore', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', isMakeOffer: true},
  {name: 'iphoneshop', price: 2, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'iwatchstore', price: 2, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'gamblingwallet', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', isMakeOffer: true},
  {name: 'Henriette', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Madleen', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', isMakeOffer: true},
  {name: 'Leonora', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Chayenne', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', isMakeOffer: true},
  {name: 'Liesbeth', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Seraphina', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Henrieke', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Philine', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Margarethe', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', isMakeOffer: true},
  {name: 'Klemens', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'Thorben', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'WINTHROP', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'COCKBURN', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'CEMETERY', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', isMakeOffer: true},
  {name: 'WHALLEY', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'klimahife', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'médecinssansfrontières', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'fightclimatechange', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'fightglobalwarming', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', isMakeOffer: true},
  {name: 'House-arryn', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'house-Baratheon', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'House-bolton', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'house-frey', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'house-greyjoy', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'house-lannister', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'house-martell', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'house-stark', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'house-targaryen', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'house-tully', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'house-tyrell', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'jorahmormont', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'branstark', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', isMakeOffer: true},
  {name: 'seaworth', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Catelyn', price: 1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Stannis', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', isMakeOffer: true},
  {name: 'RamsayBolton', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'nedstark', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'high-sparrow', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Rickonstark', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Walderfrey', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'PeterDinklage', price: 0.01, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'Sargeras', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Nefarius', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Kaelthas', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'Aegwynn', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'JainaProudmoore', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'VarianWrynn', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'Hellscream', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'},
  {name: 'Whisperwind', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5'}
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
