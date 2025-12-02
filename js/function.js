//declare function 
//call function 
//function name(){

//code
//}
//name()

// function name() {
//     var input=document
// }



// Headers1.innerHTML='java'
var body=document.getElementById('tbody')
var button=document.getElementById('btn')

function changetheme(){


 if(body.style.backgroundcolor=='white')
 { 
   localStorage.setItem('mode','black')
 body.style.backgroundcolor ='black'
 button.innerHTML='change to white'   
//   headers1.style.color='white'
 }

else{
    localStorage.setItem('mode','white')
body.style.backgroundcolor='white'
button.innerHTML='change to black'
//  headers1.style.color='black'
}
}
var theme=localStorage.getItem('mood')
body.style.backgroundColor=theme


var useDate={

 fullname:'ali',
  age:20
}

// console.log(usedata['fullname'])

// console.log(usedata.age)

localStorage.setItem('name','galyah')
localStorage.setItem('major','computer egonner')

localStorage.setItem('grade',20)
localStorage.removeItem('major')

var tyyuy=document.createElement('h2')
tyyuy.innerHTML=localStorage.getItem('name')
body.appendChild(tyyuy)


