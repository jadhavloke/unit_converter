var feet= document.getElementById('feet');
var Inches=document.getElementById('inches');

feet.addEventListener('input',function(){
    let f=this.value;
    let i=f*12;
    Inches.value=i;

});
Inches.addEventListener('input',function(){
    let i=this.value;
    let f=i/12;

    if(!Number.isInteger(f)){
        f=f.toFixed(3);
    };
    feet.value=f;

});