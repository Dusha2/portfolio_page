let styleMode = localStorage.getItem('styleMode');

if (styleMode === 'dark') {
    document.body.classList.add('darkstyle');
}

const styleToggle = document.querySelector('.button');

const enableDarkStyle = () => {
    document.body.classList.add('darkstyle');
    localStorage.setItem('styleMode', 'dark');
}

const disableDarkStyle = () => {
    document.body.classList.remove('darkstyle');
    localStorage.setItem('styleMode', 'light'); 
}

styleToggle.addEventListener('click', () => {
    styleMode = localStorage.getItem('styleMode');
    if (styleMode !== 'dark') {
        enableDarkStyle();
    } else {
        disableDarkStyle();
    }
});