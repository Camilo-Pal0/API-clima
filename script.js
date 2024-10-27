
let urlApi = 'https://api.openweathermap.org/data/2.5/weather?q='
let apiKey = '1989f4d2a15024eb78c85b701f80c376';
let conversionKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', ()=>{
    const ciudad = document.getElementById('ciudadEntrada').value;
    if(ciudad){
        datosCiudad(ciudad)
    }
})

function datosCiudad(ciudad){
    fetch(`${urlApi}${ciudad}&appid=${apiKey}`)
    .then(data => data.json())
    .then(data => infoClima(data))
}

function infoClima(data){
    const datosClima = document.getElementById('datosClima')
    datosClima.innerHTML = ''

    const titulo = data.name
    const pais = data.sys.country
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description

    const infoTitulo = document.createElement('h2')
    infoTitulo.textContent = `${titulo}, ${pais}`

    const infoTemp = document.createElement('p')
    infoTemp.textContent = `La tempreratura es de ${Math.floor(temperatura-conversionKelvin)}°C`

    const infoDescripcion = document.createElement('p')
    infoDescripcion.textContent = descripcion

    
    datosClima.appendChild(infoTitulo)
    datosClima.appendChild(infoTemp)
    datosClima.appendChild(infoDescripcion)
}

    