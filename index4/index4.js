// let pcSetup = ['Системный блок', 'Монитор']
// console.log(pcSetup, pcSetup.length)

// pcSetup[2] = 'Мышь'
// pcSetup[pcSetup.length] = 'Клавиатура'

// console.log(pcSetup, pcSetup.length)


let topSpotify = [
    'Timeless',
    'DtMF',
    'BAILE INoLVIDABLE',
    'NUEVAYoL',
]

console.log(topSpotify, topSpotify.length)

let newTrack = 'Highwayman'
topSpotify.push('EoO', `${newTrack}` )
console.log(topSpotify, topSpotify.length)

let top1 = 'FEIN'
topSpotify.unshift(`${top1}`)
console.log(topSpotify, topSpotify.length)

topSpotify.pop()
topSpotify.shift()

topSpotify.reverse()

console.log(topSpotify, topSpotify.length)
console.log(topSpotify.includes('DtMF'))
console.log(topSpotify.includes('DtMF', 4))

let top3 = topSpotify.slice(1, 4)
console.log(top3)