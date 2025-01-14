function convert(){
    var input = document.getElementById('input').value;
    var konversi = (input - 32) * 5/9;
    document.getElementById('hasil').innerHTML = `${konversi.toFixed(2)} Derajat Celcius.`;
}