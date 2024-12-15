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
})
closeSidebar.addevenlistener('click',()=>{
    sidebar.style.Left='-100%'  
})




