
function clrs() {
    document.getElementById('textVal').value = "";
}

function display(val) {
    document.getElementById('textVal').value += val;
}

function calculate() {
    let x = document.getElementById('textVal').value;
    let y = eval(x);
    document.getElementById('textVal').value = y;
}