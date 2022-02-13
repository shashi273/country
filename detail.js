const query = window.location.search;
const params = new URLSearchParams(query);
const url = "https://restcountries.com/v3.1/alpha/"+params.get('country');

const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = () =>{
    if(xhr.status === 200)
    {
                   
                  var name = document.getElementById("name").firstChild;
                  name.nodeValue = xhr.response[0].name.common;
                  console.log((xhr.response[0].name.common));
                  var img = document.getElementById("image");
                  img.src = xhr.response[0].flags.png;
                  var native = document.getElementById("native").firstChild;
                  
                  var na = Object.values(xhr.response[0].name.nativeName)[0];
                  var na1 = Object.values(na)[0];
                  native.nodeValue = "NativeName"+":"+na1;
                

                 
                 
                  var capital = document.getElementById("capital").firstChild;
                  capital.nodeValue = "Capital" +":" +xhr.response[0].capital;

                  var population = document.getElementById("popu").firstChild;
                  population.nodeValue = "Population" +":" +xhr.response[0].population;

                  var Region = document.getElementById("Region").firstChild;
                  Region.nodeValue = "Region" +":" +xhr.response[0].region;

                  
                  var sub = document.getElementById("Sub").firstChild;
                  sub.nodeValue = "Sub-Region" +":" +xhr.response[0].subregion;

                  var Area = document.getElementById("Area").firstChild;
                  Area.nodeValue = "Area" +":" +xhr.response[0].area;

                  var con = document.getElementById("Country").firstChild;
                  con.nodeValue = "Country-Code" +":" ;

                  var la = document.getElementById("lang").firstChild;
                  
                   var lan = Object.values(xhr.response[0].languages)[0];
                   var lane = Object.values(lan);
                   la.nodeValue = "Languages"+":"+lan;
                    
                   const currencyArray = Object.values(xhr.response[0].currencies);
                   var curr = document.getElementById("Curr").firstChild;
                   curr.nodeValue = "Currency" +":" +currencyArray[0].name;
                   
                   var time = document.getElementById("time").firstChild;
                   sub.nodeValue = "TimeZones" +":" +xhr.response[0].timezones;









                  
                  

       
    }
}
xhr.send();