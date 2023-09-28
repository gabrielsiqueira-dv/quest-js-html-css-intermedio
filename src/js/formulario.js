function validarCampos() {
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const numeroInput = document.getElementById("numero");
    const mensagemInput = document.getElementById("mensagemInput");

    const nomeErro = document.getElementById("nomeErro");
    const emailErro = document.getElementById("emailErro");
    const numeroErro = document.getElementById("numeroErro");
    const mensagemErro = document.getElementById("mensagemErro");


    nomeInput.classList.remove("campo-invalido");
    emailInput.classList.remove("campo-invalido");
    numeroInput.classList.remove("campo-invalido");
    mensagemInput.classList.remove("campo-invalido");


    nomeErro.style.display = "none";
    emailErro.style.display = "none";
    numeroErro.style.display = "none";
    mensagemErro.style.display = "none";

    if (nomeInput.value.trim() === "") {
        nomeInput.classList.add("campo-invalido");
        nomeInput.classList.remove("borda-preta");
        nomeErro.style.display = "block";

    } else {
        nomeInput.classList.add("campo-valido");
    }

    if (emailInput.value.trim() === "") {
        emailInput.classList.add("campo-invalido");
        emailInput.classList.remove("borda-preta");
        emailErro.style.display = "block";

    } else {
        emailInput.classList.add("campo-valido");
    }

    if (numeroInput.value.trim() === "") {
        numeroInput.classList.add("campo-invalido");
        numeroInput.classList.remove("borda-preta");
        numeroErro.style.display = "block";

    } else {
        nomeInput.classList.add("campo-valido");
    }

    if (mensagemInput.value.trim() === "") {
        mensagemInput.classList.add("campo-invalido");
        mensagemInput.classList.remove("borda-preta");
        mensagemErro.style.display = "block";

    } else {
        mensagemInput.classList.add("campo-valido");
    }
    
}
