//create Div element 
let div=document.createElement("div"); 
div.setAttribute("class","main1"); 


// Create Form Group Element
let formgroup=document.createElement("div"); 
formgroup.setAttribute("class","form-group"); 

//Create input with placeholder(margin,width)
let input=document.createElement("input"); 
input.setAttribute("type","text"); 
input.setAttribute("class","form-control"); 
input.setAttribute("id","main"); 
input.setAttribute("placeholder","Search By City"); 
input.style.width="520px"; 
input.style.marginTop="30px";


//
let button=document.createElement("button"); 
button.setAttribute("type","button"); 
button.classList.add("btn","btn-secondary"); 
button.innerHTML="Search"; 
button.style.marginLeft="200px"; 
button.style.marginTop="20px"; 
button.addEventListener("click",foo); 




let Brname = document.createElement("div"); 
Brname.setAttribute("id","name"); 

let Brtype = document.createElement("div"); 
Brtype.setAttribute("id","brewery_type"); 

let Braddress = document.createElement("div"); 
Braddress.setAttribute("id","street"); 

let Brwebsite = document.createElement("div"); 
Brwebsite.setAttribute("id","website_url"); 

let Brphn = document.createElement("div"); 
Brphn.setAttribute("id","phone"); 
formgroup.append(input,button,);

div.append(formgroup); 
document.body.append(div); 


async function foo(){ 

let city= document.getElementById("main").value; 

console.log(city); 

let result=await fetch (`https://api.openbrewerydb.org/breweries?by_city=${city}`); 

let result1= await result.json(); 



for(let i=0;i<result1.length;i++){
console.log(result1[i])
    try{ 
console.log(result1[i].name); 
Brname.innerHTML=`Brewery Name :${result1[i].name}`; 


console.log(result1[i].brewery_type); 
Brtype.innerHTML=`Brewery Type : ${result1[i].brewery_type}`; 

console.log(result1[i].street); 
Braddress.innerHTML=`Brewery Address : ${result1[i].street}`; 

console.log(result1[i].website_url); 
Brwebsite.innerHTML=`Brewery Website URL : ${result1[i].website_url}`; 

console.log(result1[i].phone); 
Brphn.innerHTML=`Brewery Phone Number: ${result1[i].phone}`; 
formgroup.append(Brname,Brtype,Braddress,Brwebsite,Brphn); 
document.body.append(div); 

    } 
    catch (error) { 
        return error; 
    } 
}
}




