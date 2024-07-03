const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const sideMenu = document.getElementById('sideMenu');
const options = document.getElementById('options');
options.classList.add('unanimated-option');

menu.addEventListener('click', () => {
    if(!bar1.classList.contains('animated-button1')){
        bar1.classList.remove('unanimated-button1');
        bar2.classList.remove('unanimated-button2');
        bar3.classList.remove('unanimated-button3');
        bar1.classList.add('animated-button1');
        bar2.classList.add('animated-button2');
        bar3.classList.add('animated-button3');

        
        sideMenu.classList.remove('unanimated-menu');
        sideMenu.classList.add('animated-menu');

        // options.classList.remove('unanimated-option');
        // options.classList.add('animated-option');

    }
    else{
        bar1.classList.remove('animated-button1');
        bar2.classList.remove('animated-button2');
        bar3.classList.remove('animated-button3');
        bar1.classList.add('unanimated-button1');
        bar2.classList.add('unanimated-button2');
        bar3.classList.add('unanimated-button3');


        sideMenu.classList.remove('animated-menu');
        sideMenu.classList.add('unanimated-menu');

        // options.classList.remove('animated-option');
        // options.classList.add('unanimated-option');
    }
    
  });


