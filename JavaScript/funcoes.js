function math() {
    var num = 8;
    var t;
    for (t = 1, t <=10;t++) {
        document.write(
            num + "X" + t + "=" + num * t);
        pulalinha();
    }
}
function pulalinha() {
    document.write("</br>");
}

function soma(n1,n2) {
    var somar = n1 + n2;
    return somar;
}
window.alert("A somatória dos valores é: "+ soma(9,6));

function subtrai(n1,n2) {
    var reduz = n1 - n2;
    return reduz;
}
window.alert("A subtração dos valores é: "+ subtrai(9,6));

function multiplica(n1,n2) {
    var multi = n1 * n2;
    return multi;
}
window.alert("A multiplicação dos valores é: "+ multi(9,6));

function soma(n1,n2) {
    var divi = n1 / n2;
    return divi;
}
window.alert("A divisão dos valores é: "+ devi(9,6));