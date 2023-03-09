


const temperature=document.getElementsByClassName('temperature-value')[0];
const feelValueData=document.getElementById('feel-like-data');
const image=document.getElementById('weather-condition-img');
let countryName;

document.getElementById("country-name")
    .addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.code === 'Enter') {
      countryName=document.getElementById("country-name").value;
      dataGetter();
    }
});

async function dataGetter(){
const response= await fetch(`http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${countryName}&aqi=no`)
.then((res)=>{
   return (res.json()) ;

}).then((data)=>{
   
    temperature.innerHTML=`${data.current.temp_c}  <sup style="font-size: 32px;">&#8451</sup> `;
    feelValueData.innerHTML=`Feels ${data.current.feelslike_c} <sup style="font-size: 20px;">&#8451</sup> `;    
    if(data.current.temp_c<10)
      image.src="./img/rainy.png";
    else if(data.current.temp_c>=10&&data.current.temp_c<20)
      image.src="./img/cloudy.png";
    else
      image.src="./img/sunny.png";
})

}

