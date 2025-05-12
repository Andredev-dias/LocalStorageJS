function login(){
    var nome = $("#nome").val()
    var senha = $("#senha").val()

    if(nome && senha && nome === "admin" && senha === "12345"){
        const user = {
            name: nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100000),
        };

        localStorage.setItem("usuario", JSON.stringify(user))

        window.location.href = "../Loja/index.html"
    }else{
        document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.borderBottom = "3px solid red"
        document.getElementById("senha").style.borderBottom = "3px solid red"
    }
}

function fecharError(){
    document.getElementById("error-modal").style.display = "none"
    document.getElementById("nome").style.borderBottom = " 2px solid #FFECD1"
    document.getElementById("senha").style.borderBottom = " 2px solid #FFECD1"
}

function showPassword(){
    var inputSenha = document.querySelector('#senha')
    var img_eye = document.querySelector('#eye')
    
    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type", "text")
        img_eye.setAttribute("src", "./images/eye-not.png")
    }else{
        inputSenha.setAttribute("type", "password")
        img_eye.setAttribute("src", "./images/eye.png")
    }
}

