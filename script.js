let chaves = ["kiko","chiquinha","madruga","barriga","florinda","linguiça","71"];
let tentativasFalhas = [];
function tentativa(){
    let palavra = document.getElementById("password").value;
    if(chaves.indexOf(palavra) != -1){
        window.location.href="about.html";
        //window.open("about.html");
    }
    else{
        alert("Você erôôô!");
        tentativasFalhas.push(palavra);
        document.getElementById("lista").innerHTML = tentativasFalhas;
        document.getElementById("password").value = null;
    }
}
function voltar(){
    window.location.href="index.html";
}