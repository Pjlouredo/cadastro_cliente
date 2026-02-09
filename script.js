const nomeInput = document.getElementById('nome');
const foneInput = document.getElementById('fone');
const emailInput = document.getElementById('email');
const cpfInput = document.getElementById('cpf');
const btnSalvar = document.getElementById('saveClient');
nomeInput.focus();

cpfInput.addEventListener('input', () => {
    cpfInput.value = cpfInput.value.replace(/\D/g, "");
});

foneInput.addEventListener('input', (e) =>{

    if (e.inputType === "deleteContentBackward") return;
    let num = foneInput.value.replace(/\D/g, "")
    let resultado = "";

    if (num.length > 0){
        resultado ="(" + num;
    }

    if (num.length >= 2){
        resultado = "(" + num.substring(0, 2) +") " +num.substring(2);
    }


    foneInput.value = resultado;
})

foneInput.addEventListener('focus', () =>{
    const fim = foneInput.value.length;
    foneInput.setSelectionRange(fim, fim);
});

console.log("1. Variáveis mapeadas!");

btnSalvar.addEventListener('click', (event) =>{
    event.preventDefault();

    console.log ("2. O botão foi clicado! Agora podemos salvar os dados.");
    alert("Botão funcionando")
    
    const nomeSalvo = nomeInput.value;
    const foneSalvo = foneInput.value;
    const emailSalvo = emailInput.value;
    const cpfSalvo = cpfInput.value;

    if (cpfSalvo.length !== 11) {
        alert("CPF inválido");
        return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)){
        alert("Insira um email válido.");
        return;
    }

    console.log("Nome:", nomeSalvo);
    console.log("Telefone:", foneSalvo);
    console.log("Email:", emailSalvo);
    console.log("CPF:", cpfSalvo);

});