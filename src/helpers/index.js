export function createDeckFromPairs(pairsObj) {
  function createDeckCardFromPair (pair) {
    return {
      id: Date.now(),
      upside: pair[0],
      downside: pair[1],
    }
  }

  return Object.entries(pairsObj).map(pair => createDeckCardFromPair(pair) )
}

export function shuffleArr(arr) {
  const copy = arr.slice()
  copy.forEach((_, ind) => {
    const randomInd = Math.floor(Math.random() * copy.length)
    if (randomInd > copy.length) console.log(randomInd)
    ;[copy[ind], copy[randomInd] ] = [copy[randomInd], copy[ind] ] 
  })
  return copy
}