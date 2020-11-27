

const mNavHambergurIcon = document.querySelector('.mobile-nav-bar-hamburger-icon');
const mNavItemContainer = document.querySelector('.mobile-nav-item-menu-container');
const mNavItemCloseBtn = document.querySelector('.nav-item-close');

var bgAudio = document.querySelector('#bgAudio');

function main(){

    mNavItemContainer.style.visibility = "hidden";
    MobileNavHamburgerButton();    

    var welcome = document.querySelector('.welcome'); 

    window.onload = () => {

        welcome.addEventListener('click', ()=>{

            welcome.style.opacity = '0';
            
            document.documentElement.style.overflow ='visible';

            if(document.getElementById('typed-config-js') <= 0){
                const typedJS = document.createElement('script');
                typedJS.id = 'typed-config-js';
                typedJS.src = "./js/typed-config.js";
                document.body.appendChild(typedJS);
            }

            bgAudio.play();
        });
    }

}

function MobileNavHamburgerButton(){
    
    mNavHambergurIcon.addEventListener('click', ()=>{

        if(mNavItemContainer.style.visibility === "hidden"){
            mNavItemContainer.style.visibility = "visible";
            console.log('visible');
        } else{
            console.log('hidden');
            mNavItemContainer.style.visibility = "hidden";
        }

    });

    mNavItemCloseBtn.addEventListener('click', ()=>{
        mNavItemContainer.style.visibility = "hidden";
    });

}

main();



