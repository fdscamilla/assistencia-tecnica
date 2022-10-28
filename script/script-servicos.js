function enviarForm(){

    var nome = document.getElementById("nome");
    if (nome.value == "") {
        return false
    }

    var email = document.getElementById("email");
    if (email.value == "" || email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1) {
        return false
    }

    var fone = document.getElementById("fone");
    if (fone.value < 11) {
        return false
    }


    var modelo = document.getElementById("modelo");
    if (selecionar-modelo.value == "") {
        return false
    }
    return true

}    
