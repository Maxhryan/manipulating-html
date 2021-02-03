document.addEventListener('DOMContentLoaded', function(){

    let btn = $('<button></button>').text('Click Me!');
    $('body').append(btn);
    btn.click(function(){
        alert('Hello There');
    });

    let msg = $('.msg');
    let text = $('.txtInput');
    msg.click(function(){
        alert(text.val())
    });

    let hello = $('.hello');
    hello.hover(function(){
        hello.css('background-color', 'yellow');
    });
    hello.mouseout(function(){
        hello.css('background-color', 'transparent');
    });


    let someText = $('.someText');
    someText.click(function(){
        let num1 = Math.floor(Math.random() * 255);
        let num2 = Math.floor(Math.random() * 255);
        let num3 = Math.floor(Math.random() * 255);
        someText.css({ color: `rgb(${num1}, ${num2}, ${num3})`});
    });

    let btn2 = $('#btn').text('Max');
    let empty = $('#empty');
    btn2.click(function(){
        let myName = $('<span></span>').text('Max Ryan');
        empty.append(myName);
    });

    let friendsArray = ['t', 'l', 'h', 'g', 'e', 'a', 'x', 'p', 'd', 'v'];

    let addF = $('#addF');
    let ul = $('#ul');
    addF.click(function(){
        friendsArray.forEach(function(){
          let li = $('<li></li>').text('[index]');
            ul.append(li);
        });

    });


});
