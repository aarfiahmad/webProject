const buttons = document.querySelectorAll('.display');
const body = document.querySelector('body');
const display1=document.querySelector('.display1');
const display2=document.querySelector('.display2');
const display3=document.querySelector('.display3');
const display4=document.querySelector('.display4');
const show=document.querySelector('#msg');



buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(e.target);
        if (e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
         setTimeout( () => display1.remove(),1000 )
        }

        if (e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
            setTimeout( () => display2.remove(),1000 )
        }

        if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            setTimeout( () => display3.remove(),1000 )

        }

        if (e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
            setTimeout( () => display4.remove(),1000 )
            setTimeout( () => body.remove(),2000 )
        }

        })
      

    })
  
    window.alert('click inside border-background one by one ');
 