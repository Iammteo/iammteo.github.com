


let button = document.querySelector('button');
let input = document.querySelector('input');
let divWeather = document.querySelector('#divWeather');
let Temp = document.querySelector('#Temp');

button.addEventListener('click', box2);




function box2() {

    const ajax =new XMLHttpRequest;
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${input.value}
    &appid=979370beb5e423bcb4bda57464953949&units=metric`;

    ajax.open('GET', url, true);
                  
    ajax.onreadystatechange = function () {
        if( this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            
           let data = JSON.parse(this.responseText);
           divWeather.innerHTML = `${data.weather[0].description} <br> ${data.main.temp}&#8451; `;


        }else{
            this.onerror = onerror();
        }
    }

    ajax.send();
    
}


function onerror() {
    divWeather.textContent = 'there was an error';
}

//Second command
