
const apiKey='YOUR_API_KEY';

function saveHistory(city){
 let arr=JSON.parse(localStorage.getItem('cities'))||[];
 if(!arr.includes(city)) arr.unshift(city);
 localStorage.setItem('cities',JSON.stringify(arr.slice(0,5)));
 loadHistory();
}

function loadHistory(){
 const arr=JSON.parse(localStorage.getItem('cities'))||[];
 document.getElementById('history').innerHTML=arr.map(c=>`<li>${c}</li>`).join('');
}
loadHistory();

document.getElementById('themeBtn').onclick=()=>{
 document.body.classList.toggle('dark');
}

async function getWeather(cityParam){
 const city=cityParam || document.getElementById('city').value;
 const loader=document.getElementById('loader');
 loader.style.display='block';

 try{
 const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
 const data=await res.json();

 document.getElementById('result').innerHTML=`
 <h2>${data.name}</h2>
 <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
 <p>Temp: ${data.main.temp} °C</p>
 <p>Humidity: ${data.main.humidity}%</p>
 <p>Wind: ${data.wind.speed} m/s</p>
 <p>${data.weather[0].description}</p>`;

 saveHistory(city);
 }catch(e){
 document.getElementById('result').innerHTML='Error fetching data';
 }
 loader.style.display='none';
}

function getLocationWeather(){
 navigator.geolocation.getCurrentPosition(async(pos)=>{
 const {latitude,longitude}=pos.coords;
 const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
 const data=await res.json();
 document.getElementById('result').innerHTML=`
 <h2>${data.name}</h2>
 <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
 <p>Temp: ${data.main.temp} °C</p>`;
 });
}
