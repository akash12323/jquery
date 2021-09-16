

//______________________CSS SELECTOR_________________________________________________
$('document').ready(function(){
    console.log("Hello world");
})

$('h1').css('border','2px solid aqua');

$('h1').css({
    borderRadius: "10px",
    backgroundColor: "lightskyblue",
    textAlign: "center",
    padding: "9px 0px"
});





$('ol li').css('color','blue');
$('ol li').first().css('color','red');
$('ol li').last().css('color','green');
$('ol li:nth-of-type(odd)').css('background-color','yellow');


$('a').css({
    backgroundColor:"lightgreen",
    fontSize: '2rem'
});





//_______________________ADJACENT QUERY SELECTOR________________________________________
$('input + a').css({
    backgroundColor:"aqua",
    fontSize:'1.5rem'
});





//_______________________________ATTRIBUTE SELECTOR_______________________________________

$('img').attr('src');
$('img').attr('src','https://images.unsplash.com/photo-1542995470-870e12e7e14f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60')


// $('input[type="text"]').attr('type')
// "text"

// $('input[type="text"]').attr('placeholder')
// undefined

// $('input[type="text"]').attr('placeholder','Type here...')
// S.fn.init [input, prevObject: S.fn.init(1)]

// $('input[type="text"]').val()
// ""

// $('input[type="text"]').val('go to gym')
// S.fn.init [input, prevObject: S.fn.init(1)]




//________________ADDCLASS_____REMOVECLASS_______________TOGGLECLASS___________________

$('p').addClass('first');
$('p').addClass('second');

$('p').removeClass('first');

$('p').toggleClass('first second');
$('p').toggleClass('second');



//__________________CLICK_____KEYPRESS_____________ON______________________________________

$('input[type="text"]').keypress((e)=>{
    if(e.which == 13){
        console.log('Enter pressed')
    }
    console.dir(e.target.value);
});
