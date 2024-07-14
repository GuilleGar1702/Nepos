const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const sideMenu = document.getElementById('sideMenu');
const options = document.getElementById('options');
const searchInput = document.getElementById('searchInput');
const find = document.getElementById('find');
const userInput = document.getElementById('userInput');
const messages = document.getElementById('messages');
const chatBody = document.getElementById('chatBody');
// const Nepos = document.getElementById('Nepos');
const Logo = document.getElementById('logo');
const menu = document.getElementById('menu');
const search = document.getElementById('search');
const btnNP = document.getElementsByClassName('btnNP');


function menuInteraction() {
    if(!bar1.classList.contains('animated-button1')){
        bar1.classList.remove('unanimated-button1');
        bar2.classList.remove('unanimated-button2');
        bar3.classList.remove('unanimated-button3');
        bar1.classList.add('animated-button1');
        bar2.classList.add('animated-button2');
        bar3.classList.add('animated-button3');

        
        sideMenu.classList.remove('unanimated-menu');
        sideMenu.classList.add('animated-menu');

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

        
        
        if (searchInput.classList.contains('inSearch')) {
            searchInput.classList.remove('inSearch');
            
            searchInput.classList.add('unSearch');
            
            
            setTimeout(() => {
                searchInput.classList.remove('niceBorder');
                // searchInput.classList.add('invisible');
                search.classList.add('invisible');
                


              }, 301);
            
        }
        if (Logo.classList.contains('inSearchLogo')) {
            Logo.classList.remove('inSearchLogo');
            Logo.classList.add('unSearchLogo');
            
        }
        
    }
}

function findInteraction() {
    if(sideMenu.classList.contains('animated-menu')){
        sideMenu.classList.remove('animated-menu');
        sideMenu.classList.add('unanimated-menu');

        searchInput.classList.remove('unSearch');
        // searchInput.classList.remove('invisible');
        search.classList.remove('invisible');

        searchInput.classList.add('inSearch');
        searchInput.classList.add('niceBorder');

        Logo.classList.remove('unSearchLogo');
        Logo.classList.add('inSearchLogo');
    }
}


function gestureHider() {
    if(bar1.classList.contains('animated-button1')){
        bar1.classList.remove('animated-button1');
        bar2.classList.remove('animated-button2');
        bar3.classList.remove('animated-button3');
        bar1.classList.add('unanimated-button1');
        bar2.classList.add('unanimated-button2');
        bar3.classList.add('unanimated-button3');


        sideMenu.classList.remove('animated-menu');
        sideMenu.classList.add('unanimated-menu');

        searchInput.classList.remove('inSearch');
        if (!searchInput.classList.contains('unSearch')) {
            searchInput.classList.add('unSearch');
            
            setTimeout(() => {
                searchInput.classList.remove('niceBorder');
                // searchInput.classList.add('invisible');
                search.classList.add('invisible');
              }, 301);
            
        }
        if (Logo.classList.contains('inSearchLogo')) {
            Logo.classList.remove('inSearchLogo');
            Logo.classList.add('unSearchLogo');
            
        }
    }
}




menu.addEventListener('click', () => {
    menuInteraction();
});

find.addEventListener('click', () => {
    findInteraction();    
});

userInput.addEventListener('click', () =>{
    gestureHider();
});
chatBody.addEventListener('click', () =>{
    gestureHider();
});

