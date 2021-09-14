let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
let container = document.querySelector('.container')
fetch(url)
    .then(res => res.json())
    .then(data => {
        let c  = data.filter(item=>{
            return item.name == "Bitcoin" || item.name == "Telcoin" || item.name == "Internet Computer" || item.name == "TRON" || item.name == "Dai"   
        })
        c.forEach(mass=>{
            let block = `<div class = "card">
            <img class ="card__img" src = "${mass.image}">
                <p class = "card__name">${mass.name}</p>
                <p class = "card__cost">${mass.current_price}</p>
                <p class = "card__change">${(mass.price_change_percentage_24h).toFixed(2)}</p>
            </div>`
            container.innerHTML += block;
        })
    })



   
    
setTimeout(function askNumber(){
    let change = document.querySelectorAll('.card__change');
    for (let i=0; i < change.length; i++){
        if (change[i].value < 0){
            change[i].classList.add('red')
            console.log('red')
        }else{
            change[i].classList.add('green')
            console.log('input')

        }
    }
}, 1000)