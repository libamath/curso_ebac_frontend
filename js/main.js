$(document).ready(function() {

    const form = document.getElementById('formulario')
    const nomeCadastro = document.getElementById('nome');

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('0000-000')

    $('form').validate({
        rules: {
            nome12:{
                required: true
            },
            email1:{
                required: true,
                email1: true
            },
            telefone1:{
                required: true
            },
            endereco1: {
                required: true
            },
            cpf1:{
                required: true
            },
            cep1:{
                required: true
            },
        },
        messages:{
            nome12: 'Por favor, seu nome completo.',
            email1: 'Por favor, insira seu e-mail.',
            telefone1: 'Por favor, insira seu número de celular.',
            endereco1: 'Por favor, insira seu e-mail.',
            cpf1: 'Por favor, insira seu CPF.',
            cep1: 'Por favor, insira seu CEP.',
        },
        invalidHandler: function(evento, validador){
            let camposInvalidos = validador.numberOfInvalids();
            if(camposInvalidos){
                alert(`Existem ${camposInvalidos} campos invalidos`)
            }
        }
        })

        function validaNome(nomeCompleto){
            const nomeTamanho = nomeCompleto.split(' ');
            return nomeTamanho.length >=2;
        }

        nomeCadastro.addEventListener('keyup', function(e){
            let formValido = false;
            formValido = validaNome(nomeCadastro.value)

            if(formValido){
                $('button[type=submit]').click(function() {
                    $(this).prop('disabled', false);
                })
                document.querySelector('.error-asde').style.display ='none'
            }
            else{
                $('button[type=submit]').click(function() {
                    $(this).prop('disabled', true);
                })
                document.querySelector('.error-asde').style.display ='block'
            }
            
        })
    })
