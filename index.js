/*function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}*/



  const xhr = new XMLHttpRequest();
  xhr.open("GET", 'https://restcountries.com/v3.1/all', true);
  xhr.responseType = "json";
  
  xhr.onload = () =>{
    if(xhr.status === 200)
    {
      
        
       /*;
        img.src = xhr.response[0].flags.png;
        
        var block = document.getElementsByClassName("sec");
        block[0].appendChild(img);
        console.log(xhr.response[0].name.common);*/
        for(var i=0; i<250; i++)
        {
            var div = document.createElement('div');
            var name = xhr.response[i].name.common;
            div.id = name;
            div.className = "box";
            document.body.appendChild(div);
           
            
            var sec = document.createElement('div');
            sec.className ="sec";
            document.getElementsByClassName('box')[i].appendChild(sec);
            var img = document.createElement("img")
            img.src = xhr.response[i].flags.png;
            img.className = "imag";
            var block = document.getElementsByClassName("sec");
            block[i].appendChild(img);
            


            var thir = document.createElement('div');
            thir.className = "thir";
            document.getElementsByClassName('box')[i].appendChild(thir);

            var he1 = document.createElement('h1');
            he1.className = "cn";
            var  hea1 = document.createTextNode(name);
            he1.appendChild(hea1);
            document.getElementsByClassName('thir')[i].appendChild(he1);
            
            var he2 = document.createElement('h2');
            he2.className = "cne";
            if(xhr.response[i].currencies == null)
            {
              const currencyArray = "not defined";
              var  hea2 = document.createTextNode("currency"+":"+currencyArray[0].name);
              he2.appendChild(hea2);
              document.getElementsByClassName('thir')[i].appendChild(he2);
            }
            else{
            const currencyArray = Object.values(xhr.response[i].currencies);
            var  hea2 = document.createTextNode("currency"+":"+currencyArray[0].name);
            he2.appendChild(hea2);
            document.getElementsByClassName('thir')[i].appendChild(he2);
            }
          
            var he3 = document.createElement('h3');
            he3.className = "cned";
            var date = new Date();
            var s;
            s = date.getDate()+" " + date.getMonth()+" "+date.getFullYear()+","+" "+date.getHours()+":"+date.getMinutes();
            var  hea3 = document.createTextNode("current Date and time"+":"+ s);
            he3.appendChild(hea3);
            document.getElementsByClassName('thir')[i].appendChild(he3);

            var six = document.createElement('div');
            six.className ="six";
            document.getElementsByClassName('thir')[i].appendChild(six);
            var four = document.createElement('div');
            four.className ="four";
            document.getElementsByClassName('six')[i].appendChild(four);
            var hef1 = document.createElement("a");
            hef1.className = "sh";
            hef1.setAttribute('href', xhr.response[i].maps.googleMaps);

            var heaf1 = document.createTextNode("Show Map");
            hef1.appendChild(heaf1);
            document.getElementsByClassName('four')[i].appendChild(hef1);
            /*const f = document.createElement("form");
            f.setAttribute("action", "https://www.google.com/maps/search/?api=1&query=name");
            f.className = "four";
            const se = document.createElement("input");
            se.className="sh";
            se.setAttribute('type', "submit");
            se.setAttribute('value', "Show Map" );
            f.appendChild(se);
            document.getElementsByClassName('four')[i].appendChild(f);*/
            
            
            var five = document.createElement('div');
            five.className ="five";
            document.getElementsByClassName('six')[i].appendChild(five);
            var hef2 = document.createElement("a");
            hef2.className = "dd";
            var heaf2 = document.createTextNode("Detail");
            hef2.setAttribute('href', 'detail.html?country='+xhr.response[i].cca3 );
            hef2.appendChild(heaf2);
            document.getElementsByClassName('five')[i].appendChild(hef2);
          }
    }
    
  }
  function myfunction(){
    
    var input = document.getElementById('myInput').value;
    
    
    var nodes = document.getElementsByClassName('box');
  
  
  
      for(var i=0; i<document.getElementsByClassName('box').length; i++)
      {
    
      if(nodes[i].id == input)
      {
        nodes[i].style.display = '';

      }
      else{
        nodes[i].style.display = 'none';
          } 
    }

  };


  xhr.send();
 