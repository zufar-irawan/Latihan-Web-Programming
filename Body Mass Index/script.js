<<<<<<< HEAD
function convertToFahrenheit(){
    var fahrenheitInput = document.getElementById('fahrenheitInput').value;
    var celsius = (fahrenheitInput - 32) * 5/9;
    document.getElementById('hasil').innerHTML = `Derajat Celcius: ${celsius.toFixed(2)} Celcius.`;

=======
function bmi(){
    var berat = document.getElementById('berat').value;
    var tinggi = document.getElementById('tinggi').value;
    var bmi = berat / (tinggi * tinggi);
    if (bmi < 18.5){
        document.getElementById('hasil').innerHTML = `${bmi.toFixed(2)} -> Kurus`;
    }
    else if (bmi > 18.5 && bmi < 24.9){
        document.getElementById('hasil').innerHTML = `${bmi.toFixed(2)} -> Normal`;
    }

    else if (bmi > 25 && bmi < 29.9){
        document.getElementById('hasil').innerHTML = `${bmi.toFixed(2)} -> Overweight`;
    }

    else if (bmi > 30){
        document.getElementById('hasil').innerHTML = `${bmi.toFixed(2)} -> Obesitas`;
    }

    else {
        document.getElementById('hasil').innerHTML = `${bmi.toFixed(2)} -> Tidak Diketahui`;
    }
>>>>>>> 56bb16ba8f785a04550a72a70818e212cfaa6a0e
}