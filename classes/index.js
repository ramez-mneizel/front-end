const themeBtn=document.getElementById('theme');
const body=document.body;

if(localStorage.getItem('theme')==='dark') {
body.classList.toggle('dark-mode');}



themeBtn.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')){

        localStorage.setItem('theme','dark');

    }
else{
    localStorage.setItem('theme','light');


}
});


