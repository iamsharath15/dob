function ageInDays(){
    var bob =prompt("enter date of birth year");
    var day = (2021 - bob) * 365;
    var h1 =document.createElement('h1');
    var text=document.createTextNode('your are'+ day +'days older');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(text);
    document.getElementById('hi').appendChild(h1);
  
    console.log(day);
    
   
}

function age(){   
    document.getElementById('ageInDays').remove();
}