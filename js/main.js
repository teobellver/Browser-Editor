function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);

;
}

function displayQuery(){
let now=new Date();

function json(url) {
    return fetch(url).then(res => res.json());
  }
  
  let apiKey = 'a6546ea2ff85444ccdd28f447a36e031a9078db3a46401aa29938e56';
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    console.log(data.ip);
    console.log(data.city);
    console.log(data.country_code);
    time="sDate: "+now.getMonth()+ "/" +now.getDate() +" "+ now.getHours() + ":" + now.getMinutes()
    y=data.ip + ": "+getQueryVariable('comando');
    document.getElementById("comando_descartable").innerHTML = y;
    // so many more properties
  });


/*document.getElementById("body").innerHTML = "";*/

}

