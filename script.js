const nomeInput = document.getElementById('nome');
const foneInput = document.getElementById('fone');
const emailInput = document.getElementById('email');
const cpfInput = document.getElementById('cpf');
const aniversarioInput = document.getElementById('aniversario');
const sexoInput = document.getElementById('sexo');
const cepInput = document.getElementById('cep');
const ruaInput = document.getElementById('rua');
const numeroInput = document.getElementById('numero');
const bairroInput = document.getElementById('bairro');
const cidadeInput =document.getElementById('cidade');
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
        
    const nomeSalvo = nomeInput.value;
    const foneSalvo = foneInput.value;
    const emailSalvo = emailInput.value;
    const cpfSalvo = cpfInput.value;
    const aniversarioSalvo = aniversarioInput.value;
    const sexoSalvo = sexoInput.value;
    const cepSalvo = cepInput.value;
    const ruaSalvo = ruaInput.value;
    const numeroSalvo = numeroInput.value;
    const bairroSalvo = bairroInput.value;
    const cidadeSalvo = cidadeInput.value;

    if (cpfSalvo.length !== 11) {
        alert("CPF inválido");
        return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)){
        alert("Insira um email válido.");
        return;
    }

    console.log("--- Dados do Cliente ---");
    console.log("Nome:", nomeSalvo);
    console.log("Telefone:", foneSalvo);
    console.log("Email:", emailSalvo);
    console.log("CPF:", cpfSalvo);
    console.log("Aniversário:", aniversarioSalvo);
    console.log("Sexo:", sexoSalvo);
    console.log("CEP:", cepSalvo);
    console.log("Rua:", ruaSalvo);
    console.log("Nº:", numeroSalvo);
    console.log("Bairro:", bairroSalvo);
    console.log("Cidade:", cidadeSalvo);
    console.log("------------------------");

});