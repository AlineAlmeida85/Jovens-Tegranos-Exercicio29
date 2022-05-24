function verifica_cnpj () {

    let cnpj = document.getElementById("inputCnpj").value;

    var b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ];
    var c = String(cnpj).replace(/[^\d]/g, '');

    let msg = "";
    
    if(c.length !== 14) {
        msg = "Inválido.";
    };         

    if(/0{14}/.test(c)) {
        msg = "Inválido.";
    }

    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
    if(c[12] != (((n %= 11) < 2) ? 0 : 11 - n)) {
        msg = "Inválido.";
    }

    for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
    if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n)) {
        msg = "Inválido.";
    } else {
        msg = "Válido.";
    }

    Validacao.innerHTML = msg;
}