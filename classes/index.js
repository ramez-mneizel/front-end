const themetogglebutton=document.getElementById('theme');
const body=document.body;

themetogglebutton.addeventlistener ('click',function() {

body.classList.toggle('dark-mode');
    
});


