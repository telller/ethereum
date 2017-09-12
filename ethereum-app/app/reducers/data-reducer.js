let initialDataStore = [
  {name: 'marilena', price: 1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'accountreceivable', price: 1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [2, 3, 6, 7, 10]},
  {name: 'mannheim', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [4, 8], isMakeOffer: true},
  {name: 'etherwarrior', price: 1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [2, 6, 10]},
  {name: 'sexymama', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [1]},
  {name: 'cryptomania', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [2, 6, 10]},
  {name: 'mickymouse', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 15], isMakeOffer: true},
  {name: 'accountpayable', price: 1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [2, 3, 6, 7, 10]},
  {name: 'paymeout', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [2, 3, 6, 7, 10], isMakeOffer: true},
  {name: 'fabiana', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11], isMakeOffer: true},
  {name: 'natascha', price: 1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'paythefee', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [6], isMakeOffer: true},
  {name: 'zhytomir', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657'},
  {name: 'yogastore', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [13, 15], isMakeOffer: true},
  {name: 'yoga-shop', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [13, 15], isMakeOffer: true},
  {name: 'yoga-store', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [13, 15]},
  {name: 'bastelladen', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [13]},
  {name: 'bastel-shop', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [13]},
  {name: 'crafting-shop', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [13]},
  {name: 'fishing-shop', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [13, 15]},
  {name: 'pipe-store', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [1, 13]},
  {name: 'drug-store', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [1, 13], isMakeOffer: true},
  {name: 'drogenladen', price: 1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [1, 13]},
  {name: 'iphonestore', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [13, 16], isMakeOffer: true},
  {name: 'iphoneshop', price: 2, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [13, 16]},
  {name: 'iwatchstore', price: 2, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [13, 16]},
  {name: 'gamblingwallet', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [5, 6], isMakeOffer: true},
  {name: 'Henriette', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'Madleen', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11], isMakeOffer: true},
  {name: 'Leonora', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'Chayenne', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11], isMakeOffer: true},
  {name: 'Liesbeth', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'Seraphina', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'Henrieke', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'Philine', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'Margarethe', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11], isMakeOffer: true},
  {name: 'Klemens', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [4, 11]},
  {name: 'Thorben', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [4, 11]},
  {name: 'WINTHROP', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [11]},
  {name: 'COCKBURN', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [11]},
  {name: 'CEMETERY', price: 0, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [1, 8], isMakeOffer: true},
  {name: 'WHALLEY', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [11]},
  {name: 'klimahife', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [7, 9, 14]},
  {name: 'médecinssansfrontières', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [7, 9, 14]},
  {name: 'fightclimatechange', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [7, 9, 14]},
  {name: 'fightglobalwarming', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [7, 9, 14], isMakeOffer: true},
  {name: 'House-arryn', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'house-Baratheon', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'House-bolton', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'house-frey', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'house-greyjoy', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'house-lannister', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'house-martell', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'house-stark', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'house-targaryen', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'house-tully', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'house-tyrell', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'jorahmormont', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'branstark', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11], isMakeOffer: true},
  {name: 'seaworth', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'Catelyn', price: 1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'Stannis', price: 0, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11], isMakeOffer: true},
  {name: 'RamsayBolton', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'nedstark', price: 0.1, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'high-sparrow', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'Rickonstark', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'Walderfrey', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [4, 11]},
  {name: 'PeterDinklage', price: 0.01, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [11, 15]},
  {name: 'Sargeras', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [11, 15]},
  {name: 'Nefarius', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [11, 15]},
  {name: 'Kaelthas', price: 0.05, address: '0x95e126955433Cc7fd8f5b900F1c6D10042B07657', categories: [11, 15]},
  {name: 'Aegwynn', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [11, 15]},
  {name: 'JainaProudmoore', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [11, 15]},
  {name: 'VarianWrynn', price: 0.05, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [11, 15]},
  {name: 'Hellscream', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [11, 15]},
  {name: 'Whisperwind', price: 0.1, address: '0x2D3aa485af3D35a6D04d186189C30dDd3F5261F5', categories: [11, 15]}
]

initialDataStore = initialDataStore.map((item, key) => (
  { key, name: item.name.toLowerCase(), price: item.price, isMakeOffer: item.isMakeOffer, categories: item.categories || [] }
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
