function step1() {
    var step1 = document.getElementById('step1');
    step1.style.opacity=1;    

    var step1_h2 = document.getElementById('step1_h2');
    step1_h2.style.opacity=1;
    step1_h2.style.top=0;

    var step1_p = document.getElementById('step1_p');
    step1_p.style.opacity=1;
    step1_p.style.bottom=0;



    //To make elements move slide 1//

    setTimeout(()=>{
       step1_h2.style.top= "-60px";
       step1_p.style.bottom="-60px"
       },4000);

   //To make elements disappear slide 1 //

    setTimeout(()=>{
        step1_h2.style.opacity=0;
        step1.style.opacity=0;
        step1_p.style.opacity=0;
     },7000);
    }

    // for slide 2 //

function step2() {
    var step2 = document.getElementById('step2');
    step2.style.opacity=1;

    var step2_h2 = document.getElementById('step2_h2');
    step2_h2.style.opacity=1;
    step2_h2.style.left=0;

    var step2_p = document.getElementById('step2_p');
    step2_p.style.opacity=1;
    step2_p.style.right=0;

    //To make elements move slide 2//

    setTimeout(()=>{
       step2_h2.style.left= "-60px";
       step2_p.style.right= "-60px";
       },5000);
    
    //To make elements disappear slide 2 //
    
    setTimeout(()=>{
        step2_h2.style.opacity=0;
        step2.style.opacity=0;
        step2_p.style.opacity=0;
        },7000);
        }

    // for slide 3 //

function step3() {
    var step3 = document.getElementById('step3');
    step3.style.opacity=1;

    var step3_h2 = document.getElementById('step3_h2');
    step3_h2.style.opacity=1;
    step3_h2.style.top=0;

    var step3_p = document.getElementById('step3_p');
    step3_p.style.opacity=1;
    step3_p.style.bottom=0;

    //To make elements move slide 3//

    setTimeout(()=>{
        step3_h2.style.top= "-60px";
        step3_p.style.bottom= "-60px";
         },5000);
    
    //To make elements disappear slide 3 //
    
    setTimeout(()=>{
        step3_h2.style.opacity=0;
        step3.style.opacity=0;
        step3_p.style.opacity=0;
        },7000);
        }

function step4() {
    var step4 = document.getElementById('step4');
    step4.style.opacity=1;
        
    var step4_h2 = document.getElementById('step4_h2');
    step4_h2.style.opacity=1;
    step4_h2.style.right=0;
            
    var step4_p = document.getElementById('step4_p');
    step4_p.style.opacity=1;
    step4_p.style.left=0;
            
    //To make elements move slide 4//
            
    setTimeout(()=>{
    step4_h2.style.right= "-60px";
    step4_p.style.left= "-60px";
    },5000);
                
    //To make elements disappear slide 4 //
                
    setTimeout(()=>{
    step4_h2.style.opacity=0;
    step4.style.opacity=0;
    step4_p.style.opacity=0;
    },7000);
    }

function step5() {
        var step5 = document.getElementById('step5');
        step5.style.opacity=1;
            
        var step5_h2 = document.getElementById('step5_h2');
        step5_h2.style.opacity=1;
        step5_h2.style.top=0;
                
        var step5_p = document.getElementById('step5_p');
        step5_p.style.opacity=1;
        step5_p.style.bottom=0;
                
        //To make elements move slide 5//
                
        setTimeout(()=>{
        step5_h2.style.top= "-60px";
        step5_p.style.bottom= "-60px";
        },5000);
                    
        //To make elements disappear slide 4 //
                    
        setTimeout(()=>{
        step5_h2.style.opacity=0;
        step5.style.opacity=0;
        step5_p.style.opacity=0;
        },7000);
        }

function start() {

    step1();
    setTimeout(()=>{
        step2();
        setTimeout(()=>{
            step3();
            setTimeout(()=>{
                step4();
                setTimeout(()=>{
                    step5();
                },8000)
            },8000)
        },8000)
    },8000);
}
    
    


