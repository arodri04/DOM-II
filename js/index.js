// Your code goes here
const whole = document.querySelector('body');

whole.addEventListener('keydown', function(e){
    if(e.key === 'n') {
        whole.style.backgroundColor = random();
    }
});

function random() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const navbar = document.querySelector('nav');
const image = document.querySelectorAll('img');
const head = document.querySelectorAll('h2');
const par = document.querySelectorAll('p');

input = [];
pass = [ 2, 3, 4, 1, 's', 'a', 'm' ];
image[0].addEventListener('click', function(e){
    console.log("click");
    input.push(1);
    console.log(input);
    // if (input === pass) {
    //     console.log('SECRET!');
    //     image[2].src = 'img/chris.png';
    //     image[3].src = 'img/danger';
    // }


})

image[1].addEventListener('click', function(e){
    console.log("click");
    input.push(2);
    console.log(input);

})

image[2].addEventListener('click', function(e){
    console.log("click");
    input.push(3);
    console.log(input);

})

image[3].addEventListener('click', function(e){
    console.log("click");
    input.push(4);
    console.log(input);

})

whole.addEventListener('keydown', function(e){
    if(e.key === 'p') {
        console.log('check')
        console.log(pass);
        console.log(input);
        if(check() === true) {
            console.log('secret');
            image[2].src = 'img/chris.png';
            image[1].src = 'img/danger.jpg';
            image[0].src = 'img/banner.jpg';
            image[3].src = 'img/zboat.jpg';
            head[0].innerHTML = "My Name Is Sam Rodriguez";
            par[0].innerHTML = "This is my top Secret room. keep this between us okay.";
        }
    
    
    }
});

function check() {
    if (pass.lenth === input.length) {
        console.log('if');
        console.log(pass.length, input.length);
        
    }
    for(i=0; i < pass.length; i++) {
        if(pass[i] !== input[i]) {
            console.log('for');
            return false;

        }
    }

    return true;
}

whole.addEventListener('keydown', function(e){
    if(e.key === 's') {
        console.log('click');
        input.push('s');
    }
});
whole.addEventListener('keydown', function(e){
    if(e.key === 'a') {
        console.log('click');
        input.push('a');
    }
});
whole.addEventListener('keydown', function(e){
    if(e.key === 'm') {
        console.log('click');
        input.push('m');
    }
});
