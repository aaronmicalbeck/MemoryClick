function rearrangeCards(array){
    const _array = array.slice(0)
    for(let i = 0; i<array.length-1; i++){
        let randomIndex = Math.floor(Math.random() * (i+1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }

    return _array
}


export default function createDeck() {

    let id=0;
    const cards = [`card1`, `card2`, `card3`, `card4`, 
                `card5`, `card6`, `card7`, `card8`, `card9`].reduce((acc, type) =>{
                    acc.push({
                        id: id++,
                        type
                    })
                    acc.push({
                        id: id++,
                        type
                    })
                    return acc
                }, [])

                return rearrangeCards(cards)



}