function start() {
    console.log ('test');
    var step1 = document.getElementById('step1');
    console.log(step1);
    step1.style.opacity=1;    

    var step1_h2 = document.getElementById('step1_h2');
    console.log(step1_h2);
    step1_h2.style.opacity=1;
    step1_h2.style.top=0;

    var step1_p = document.getElementById('step1_p');
    console.log(step1_p);
    step1_p.style.opacity=1;
    step1_p.style.bottom=0;

    //To make elements disappear//

    setTimeout(()=>{
        step1_h2.style.top= "-80px";
        step1_p.style.bottom= "-20px";
    },3000);

    setTimeout(()=>{
       // step1_p.style.opacity=0;
       // step1_p.style.transition=3000;
    },4000);

    setTimeout(()=>{
        step1_h2.style.opacity=0;
        step1.style.opacity=0;
        step1_p.style.opacity=0;
     },5000);
    }

function step2() {
    var step2 = document.getElementById('step2');
    console.log(step2);
    step2.style.opacity=1;






}
    


