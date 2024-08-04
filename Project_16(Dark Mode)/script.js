let icon = document.getElementById('icon');

// Load theme preference from localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        icon.src = 'images/sun.png';
    } else {
        document.body.classList.remove('dark-theme');
        icon.src = 'images/moon.png';
    }
});

function toggle() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'images/sun.png';
        localStorage.setItem('theme', 'dark');
    } else {
        icon.src = 'images/moon.png';
        localStorage.setItem('theme', 'light');
    }
}
