const form = document.getElementById('form-verificacao');
let formValido = false 

function valiNumber(a, b) {
    return b>a
}

form.addEventListener('submit', function(e) {
    e.preventDefault
    const mensagemSucesso= `Parabéns!  A validação está correta!`
    const mensagemInsucesso= `Ops! É necessário que o valor do primeiro campo seja menor que do segundo para a validação ser correta.`
    let numero1 = document.getElementById("primeiro-numero").value;
    let numero2 = document.getElementById("segundo-numero").value;
    parseInt(numero1)
    parseInt(numero2)

    formValido=valiNumber(numero1, numero2)
    if(formValido){
        alert(mensagemSucesso)
    } else{
        alert(mensagemInsucesso)
    }
})
S

