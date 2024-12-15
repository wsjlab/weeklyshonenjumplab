const body = document.body;
const openSidebar=document.querySelector('#openSidebar');
const closeSidebar=document.querySelector('#closeSidebar');
const toggleTheme=document.querySelector('.toggle-theme');
const sidebar=document.querySelector('.main-sidebar');
const light=toggleTheme.children(0);
const dark=toggleTheme.children(1);
const percentage = document.querySelectorAll('.percentage p');

openSidebar.addevenlistener('click',()=>{
    sidebar.style.Left='0%'
});
closeSidebar.addevenlistener('click',()=>{
    sidebar.style.Left='-100%'  
});

toggleTheme.addevenlistener('click',changeTheme)

function changeTheme(){
    if(body.classList.contains('dark-mode')){
        lightMode();
    }else if(!body.classList.contains('dark-mode')){
        darkMode();
    }
}

if (window.matchMedia('(prefer-color-scheme:dark)').matches) {
    darkMode();
}

function lightMode(){
    body.classlist.remove('dark-mode');
    light.classList.add('active');
    dark.classList.remove('active');

}
function darkMode(){
    body.classlist.add('dark-mode');
    light.classList.remove('active');
    dark.classList.add('active');
}