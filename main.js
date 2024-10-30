let form = document.getElementById('form')
let inp = document.getElementById('inp')
let info = document.getElementById('info')
let temp = document.getElementById('temp')
let pogoda = document.getElementById('pogoda')
let card = document.getElementById('card')

let KEY = '552122f5ebc1a95b16c282c63383c262'
//https://api.openweathermap.org/data/2.5/weather?q=
// city
//&units=metric&appid=

const getData = async (city)=>{
    const base = 'https://api.openweathermap.org/data/2.5/weather?q='
    const cityName = city
    const qury = '&units=metric&appid='

    const data = await fetch(base + cityName + qury + KEY)

    const jsonData = await data.json()

    pogoda.innerHTML = `<img src="https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png">`
    info.innerHTML = `${jsonData.name}`
    temp.innerHTML = `${Math.floor(jsonData.main.temp)}°C`

    console.log(jsonData);
}
