

const mNavHambergurIcon = document.querySelector('.mobile-nav-bar-hamburger-icon');
const mNavItemContainer = document.querySelector('.mobile-nav-item-menu-container');
const mNavItemCloseBtn = document.querySelector('.nav-item-close');

function main(){

    mNavItemContainer.style.visibility = "hidden";
    MobileNavHamburgerButton();    

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



