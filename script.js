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
    body.classList.remove('dark-mode');
    light.classList.add('active');
    dark.classList.remove('active');

}
function darkMode(){
    body.classList.add('dark-mode');
    light.classList.remove('active');
    dark.classList.add('active');
}

//charts and buttons


const supabaseUrl = 'https://hzamsiqeeziwhfpilneo.supabase.co';
const supabaseKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6YW1zaXFlZXppd2hmcGlsbmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NDg0NTUsImV4cCI6MjA0OTUyNDQ1NX0.xQMdpOzBxmpQ1zeP_kljS9IolBVTsJKqbl4g6JuhzGI'; // Replace with your Supabase public anon key  
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function fetchClassement() {
    const { data, error } = await supabase
        .from('classement')
        .select('*')
        .order('numero', { ascending: false })
        .limit(10);

    if (data) {
        const labels = data.map(item => `Numéro ${item.numero}`);
        const classements = data.map(item => item.classement);
        const auteurs = data.map(item => item.auteur);

        const ctx = document.getElementById('classementChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Classement',
                    data: classements,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else {
        console.error(error);
    }
}

async function fetchImage() {
    const date = document.getElementById('date-input').value;
    const { data, error } = await supabase
        .from('couvertures')
        .select('url')
        .eq('date', date)
        .single();

    if (data) {
        document.getElementById('image-semaine').src = data.url;
    } else {
        alert('Image non trouvée pour cette date.');
    }
}

document.addEventListener('DOMContentLoaded', fetchClassement);