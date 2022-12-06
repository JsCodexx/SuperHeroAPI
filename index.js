
const SUPERHERO_TOKEN = "1999764566887249"
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const newSuperHero = document.getElementById('newHero')
const heroImageDiv = document.getElementById('heroImage')
const searchDiv = document.getElementById('searchDiv')
const searchButton = document.getElementById('search')
const powerStats = document.getElementById('powers')
const getSuperHero = (id) => {
    fetch(`${BASE_URL} /${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            heroImage.innerHTML += `<img src="${json.image.url}" />`
        })
}
const randomHero = () => {
    const totalHero = 731
    return Math.floor(Math.random() * totalHero) + 1 //to return a number between 1 and 731
}


const searchHero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const name = `<h2>${json.name}</h2> </br>`

            //printing the values from returned json object of array
            powerStats.innerHTML += `" combat level is ${json.results[0].powerstats.combat}" </br> `
            powerStats.innerHTML += `" druability  level is ${json.results[0].powerstats.durabilit}"</br> `
            powerStats.innerHTML += `" power level is ${json.results[0].powerstats.power}"</br> `
            heroImage.innerHTML += `<img src="${json.results[0].image.url}"/>`

        })
}

searchButton.onclick = () => searchHero(searchDiv.value)
// it will trigger the random hero function 
newSuperHero.onclick = () => getSuperHero(randomHero())//passing function as argument