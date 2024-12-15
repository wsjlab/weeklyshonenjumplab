const body = document.body;
const openSidebar=document.querySelector('#openSidebar');
const closeSidebar=document.querySelector('#closeSidebar');
const toggleTheme=document.querySelector('.toggle-theme');
const sidebar=document.querySelector('.main-sidebar');
const light=toggleTheme.children[0];
const dark=toggleTheme.children[1];
const percentage = document.querySelectorAll('.percentage p');

openSidebar.addEventListener('click',()=>{
    sidebar.style.left='0%';
});
closeSidebar.addEventListener('click',()=>{
    sidebar.style.left='-100%';
});

toggleTheme.addEventListener('click',changeTheme);

function changeTheme(){
    if(body.classList.contains('.dark-mode')){
        lightMode();
    }else if(!body.classList.contains('.dark-mode')){
        darkMode();
    }
}

if (window.matchMedia('(prefer-color-scheme:dark)').matches) {
    darkMode();
}

function lightMode(){
    body.classlist.remove('.dark-mode');
    light.classList.add('active');
    dark.classList.remove('active');

}
function darkMode(){
    body.classlist.add('.dark-mode');
    light.classList.remove('active');
    dark.classList.add('active');
}