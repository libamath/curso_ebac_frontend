$(document).ready(function(){0

    $('form').on('submit',function(e){
        e.preventDefault();
        /*Capturando o endereço do input */
        const enderecoNovaAtv = $('#atividade').val();
        const novoItem = $('<li></li>');

        /*Cria um novo item na lista */
        $(`<p>${enderecoNovaAtv}</p>`).appendTo(novoItem);

        /* Joga dentro da lista*/
        $(novoItem).appendTo('ol');

        /* Limpa o campo*/
        $('#atividade').val("");
    })

    $('ol').on('click','li',function(){
        $(this).css('text-decoration','line-through');
    })
})