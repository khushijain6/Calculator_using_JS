const buttons=document.querySelectorAll('button');
const screen = document.getElementById('screen');

for(let button of buttons){
    button.addEventListener('click', (e) => {
        // console.log('clicked');
        // console.log('e.target');
        const buttonText= e.target.innerText;
        // console.log('buttonText');
        if(buttonText === 'C'){
            screen.value = "";
        }
        else if(buttonText === 'x'){
            screen.value += '*' ;
        }
        else if(buttonText === '='){
            try{
                screen.value = eval(screen.value);
            }
            catch (e) {
                //if any error comes up you will lan here
                screen.value = 'Invalid Operation';
            }
        }
        else{
            screen.value += buttonText;
        }

    })
}