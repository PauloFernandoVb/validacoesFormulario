

function criarconta(){
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>?,./\\|-]).{8,}$/;
    var login=document.getElementById('login');
    var resp=document.getElementById('resultado');
    var respSenha=document.getElementById('resultados');
    var respSenhaPe=document.getElementById('resultadoCAR');
    var senha=document.getElementById('senha');
    var senhaC=document.getElementById('senhaC');
    var loginCerto=true;
    var senhaCerta=true;
    var senhaCertaTam=true;
    //TESTE 1
    if(login.value.length>=8){
        loginCerto=true;
    }else{
        loginCerto=false;
        resp.textContent="login precisa conter no mínimo 8 caracteres";
        resp.style.color="red";
        
    }
    if(senha.value.length<8 && senhaC.value.length<8){
        senhaCertaTam=false;
        respSenhaPe.textContent="Senha precisa conter no mínimo 8 caracteres";
        respSenhaPe.style.color="red";
    }else{
        senhaCertaTam=true;
    }
    if (!regex.test(senha.value)) {
        senhaCertaTam = false;
        respSenhaPe.textContent = "A senha deve conter ao menos 1 letra maiúscula, 1 número e 1 caractere especial e no mínimo 8 caracteres";
        respSenhaPe.style.color = "red";
    }else{
        senhaCertaTam = true;
    }

    if(senha.value!=senhaC.value){
        senhaCerta=false;
        respSenha.textContent="Senhas precisam ser sao iguais";
        respSenha.style.color="red";
    }else{
        senhaCerta=true;
    }
    if(loginCerto==true&&senhaCerta==true&&senhaCertaTam==true){
        resp.textContent="conta criada com sucesso";
        resp.style.color="black";
    }
    
}
function limpar(){
    var resp=document.getElementById('resultado');
    var respSenha=document.getElementById('resultados');
    var respSenhaPe=document.getElementById('resultadoCAR');
    resp.textContent="";
    respSenha.textContent="";
    respSenhaPe.textContent ="";
}
