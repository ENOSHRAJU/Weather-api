let countryName;
let welcomeText = document.querySelector('.header h4');
let display = document.querySelector('section');

// FUNCTION THAT LOOKS INTO THE DATA OF THE COUNTRY
function printingCountryDetails(data) {

   
    display.style.display = "block";

    // GRABBING ALL THE RESPECTIVE ELEMENTS
    const name = document.querySelector('h1.country-name');
    const city = document.querySelector( 'h3.city' );
    const time = document.querySelector('h4.time')
    const weather = document.querySelector('h5.weather');
    const temperature = document.querySelector("h5.temperature");
    

    // // GRABBIN SUB DETAILS PART
    const humidity = document.querySelector("h6.humidity ");
    const minTemp = document.querySelector("h6.min-temp");
    const latitude = document.querySelector("h6.lat ");
    const longitude = document.querySelector("h6.lon");
    const pressure = document.querySelector("h6.pressure");
    const speed = document.querySelector("h6.speed ");

    // // ASSIGINING MAIN STATS
    name.textContent = data.location.country;
    city.innerHTML = data.location.name;
    time.innerHTML = data.location.localtime;
    weather.innerHTML = data.current.condition.text;
    temperature.innerHTML = data.current.temp_c;

    // // ASSIGINING SUB STATS
    humidity.innerHTML = data.current.humidity;
    minTemp.innerHTML = data.current.feelslike_c;
    latitude.innerHTML = data.location.lat;
    longitude.innerHTML = data.location.lon;
    pressure.innerHTML = data.current.pressure_in;
    speed.innerHTML = data.current.wind_kph+ "kmph";

}


// API INTEGRATION
function fetchApiData(countryName) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1694f66460msh4967d2f6b5fb9e9p1f42e3jsn5d27dcacfb5f',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${countryName}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            printingCountryDetails(response);
        })
        .catch(err => {
            welcomeText.innerHTML = "No Match found";
            return;
        });
        
}
// API INTEGRATION ENDS HERE


// LISTNENING THROUGH PRESSING ENTER BUTTON
const pressEnter = document.querySelector('input[type="text"]');
pressEnter.addEventListener('change', function collectInfo() {

    countryName = document.querySelector('input[type="text"]').value;
    if((countryName.replaceAll(" ","")).length === 0) {
        welcomeText.innerHTML = "Please Enter valid Name";
        return;
    } else {
        fetchApiData(countryName);
        welcomeText.innerHTML = `${countryName}'s Weather Stats`;
    }
})


// LISTINING THROUGH BUTTON PRESS
const buttonPress = document.querySelector('button');
buttonPress.addEventListener('click', function collectData() {

    countryName = document.querySelector('input[type="text"]').value;
    if((countryName.replaceAll(" ","")).length === 0) {
        welcomeText.innerHTML = "Please Enter valid Name";
        return;
    } else {
        fetchApiData(countryName);
        welcomeText.innerHTML = `${countryName}'s Weather Stats`;
    }
    
})