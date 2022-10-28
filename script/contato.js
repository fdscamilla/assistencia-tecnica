/*embora ache o alert um tnato deselegante foi a melhor forma que achei de notificar sobre a verificação dos campos do formulário de conatoa, embora parte tenha sido feita no html*/
/*usando ¨const¨ para garantir que ao iniciar o programa ele tera algum valor, para que nao seja indefinida¨*/

function enviar(){
    /*estou pondo o requerimento de numero com apenas 10 numeros pq ha pessoas que tem numero de telefone com apenas 8 digitos, e caso digitem seu numero com ddd sem 0 daria apenas 10 numero*/
    var fone = document.getElementById("numero");
    if (fone.length < 10) {
        alert("Insira seu núnmero de telefone com DDD");
    }
    var email = document.getElementById("email");
    if (email.value == "" || email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1) {
        alert("Insira um Email valido");
    }
    var as = document.getElementById("assunto");
    if (as.value == "") {
        alert("Digite o assunto");
    }
    var nome = document.getElementById("nome");
    if (nome.length < 2) {
        alert("Digite seu nome e sobre nome");
    }
    else{
        alert("Mensagem enviada, responderemos assim que possível. Agradecemos o contato.");
    }

}
