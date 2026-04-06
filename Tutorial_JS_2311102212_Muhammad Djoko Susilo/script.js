function sequence(min, max) {
    let result = 0;
    let proses = "";

    for (let i = min; i <= max; i++) {
        if (i % 2 != 0) {
            result += i;
            proses += i + " + ";
        }
    }

    proses = proses.slice(0, -3); 

    console.log(proses + " = " + result);
}

let min = parseInt(prompt("BUKA CONSOLE UNTUK MELIHAT HASIL /n Masukan nilai minimum:"));
let max = parseInt(prompt("BUKA CONSOLE UNTUK MELIHAT HASIL /n Masukan nilai maksimum"));

sequence(min, max);

document.addEventListener("DOMContentLoaded", () => {
    
    //Tombol 1 untuk ganti posisi text
    const btnText = document.getElementById('btn-flex-toggle');
    const textElement = document.getElementById('target-text');

    const alignment = ['center', 'right'];
    let posIndex = 0;

    btnText.addEventListener('click', () => {
        posIndex = (posIndex + 1) % alignment.length;
        textElement.style.textAlign = alignment[posIndex];
    });

    // Tombol 2 untuk ganti background
    const btnColor = document.getElementById('btn-change-color');
    const colors = ['#9b59b6', '#34495e', '#27ae60' , '#e91e63'];
    let colorIndex = 1;

    btnColor.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % 2;

        console.log(colorIndex);
        
        if (colorIndex % 2 != 0) {
            btnColor.style.backgroundColor = '#e67e22'; // Warna default
        } else {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            btnColor.style.backgroundColor = randomColor;
        }
    });
});