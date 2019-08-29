
let canvas = document.getElementById("snake");
//Renderiza o desenho dentro do canvas
console.log(canvas);
let context = canvas.getContext("2d")

let box = 32;
//Incia o canvas
function criarBg() {
    context.fill = "lightgreen";
    context.fillRect(0, 0, 16 * box * box);
}

criarBg();