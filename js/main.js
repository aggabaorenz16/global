fetch('https://api.covid19api.com/summary')
.then((response) => {
    return response.json();
})
.then((data)=>{
document.getElementById("confirmed").innerHTML = data.Global.TotalConfirmed;
document.getElementById("recovered").innerHTML = data.Global.TotalRecovered;
document.getElementById("death").innerHTML = data.Global.TotalDeaths;
document.getElementById("newrecovered").innerHTML = data.Global.NewRecovered;
document.getElementById("newconfirmed").innerHTML = data.Global.NewConfirmed;
document.getElementById("newdeaths").innerHTML = data.Global.NewDeaths;
}) 
