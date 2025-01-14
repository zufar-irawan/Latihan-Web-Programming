function sec(nomre){
    bil = document.getElementById("angkaTotal").innerHTML;
    bil = bil + nomre;
    document.getElementById("angkaTotal").innerHTML = bil;
}

function resetIphone(){
    reset = document.getElementById("angkaTotal").innerHTML;
    reset = "";
    document.getElementById("angkaTotal").innerHTML = reset;
}

function minus(){
    bil = document.getElementById("angkaTotal").innerHTML;
    bil = " -" + bil;
    document.getElementById("angkaTotal").innerHTML = bil;
}

function kurang(){
    bil = document.getElementById("angkaTotal").innerHTML;
    bil = bil + " - ";
    document.getElementById("angkaTotal").innerHTML = bil;
}

function tambah(){
    bil = document.getElementById("angkaTotal").innerHTML;
    bil = bil + " + ";
    document.getElementById("angkaTotal").innerHTML = bil;
}

function persen(){
    bil = document.getElementById("angkaTotal").innerHTML;
    bil = bil * 1/100;
    document.getElementById("angkaTotal").innerHTML = bil;
}

function desimal(){
    bil = document.getElementById("angkaTotal").innerHTML;
    bil = bil + ".";
    document.getElementById("angkaTotal").innerHTML = bil;
}

function kali(){
    bil = document.getElementById("angkaTotal").innerHTML;
    bil = bil + " * ";
    document.getElementById("angkaTotal").innerHTML = bil;
}

function bagi(){
    bil = document.getElementById("angkaTotal").innerHTML;
    bil = bil + " / ";
    document.getElementById("angkaTotal").innerHTML = bil;
}

function azaltbili(){
    bil = document.getElementById("angkaTotal").innerHTML;
    document.getElementById("angkaTotal").innerHTML = bil.substring(0, bil.length - 1);
}

function inspeksi(){
    nomor = document.getElementById("angkaTotal").innerHTML;
    if (isNaN(eval(nomor)) !== false){
        alert("Berhasil");
    }
}

function neticeIphone(){
    nomor = document.getElementById("angkaTotal").innerHTML;
    inspeksi();
    const hasil = eval(nomor);
    document.getElementById("angkaTotal").innerHTML = hasil;
}