const boxMain = document.getElementById('box-main');
const checkBox = document.getElementById('switch-shadow');
const imgMoon = document.getElementById('img-moon');
const imgSun = document.getElementById('img-sun');

if(!checkBox.checked){
    imgMoon.style.display = 'none';
}

checkBox.addEventListener('change', () => {
    if(!checkBox.checked){
        imgMoon.style.display = 'none';
        imgSun.style.display = 'block';
        boxMain.style.background = 'var(--light)'
    }else{
        imgMoon.style.display = 'block';
        imgSun.style.display = 'none';
        boxMain.style.background = 'var(--dark)'
    }
})