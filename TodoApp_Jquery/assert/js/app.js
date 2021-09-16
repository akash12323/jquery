

$('ul').on('click', 'span', function(event){
    // $(this).parent().remove();
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })

    event.stopPropagation();      //TO STOP EVENT BUBBLING
})

$('ul').on('click','li', function(event){
    $(this).toggleClass('first');
})




$('input[type="text"]').keypress(function(e){

    const todoText = $(this).val();

    if(e.which === 13){
        // console.log("You hit the enter")
        // console.log(todoText)

        const todo = `<li><span>X</span> ${todoText}</li>`;
        $('ul').append(todo);
    }
    
})


$('#plus').click(function () {
    $('input[type="text"]').fadeToggle(500);
})

