document.querySelector('.zheti').addEventListener("click", function(zheti){
    zheti = appendToDisplay('7');
});

document.querySelector('.sekiz').addEventListener("click", function(sekiz){
    sekiz = appendToDisplay('8');
});

document.querySelector('.tokuz').addEventListener("click", function(tokuz){
    tokuz = appendToDisplay('9');
});

document.querySelector('.alty').addEventListener("click", function(alty){
    alty = appendToDisplay('6');
});

document.querySelector('.bes').addEventListener("click", function(bes){
    bes = appendToDisplay('5');
});

document.querySelector('.tort').addEventListener("click", function(tort){
    tort = appendToDisplay('4');
});

document.querySelector('.ush').addEventListener("click", function(ush){
    ush = appendToDisplay('3');
});

document.querySelector('.eki').addEventListener("click", function(eki){
    eki = appendToDisplay('2');
});

document.querySelector('.bir').addEventListener("click", function(bir){
    bir = appendToDisplay('1');
});

document.querySelector('.bolu').addEventListener("click", function(bolu){
    bolu = appendToDisplay('/');
});

document.querySelector('.kobeitu').addEventListener("click", function(kobeitu){
    kobeitu = appendToDisplay('*');
});

document.querySelector('.kosu').addEventListener("click", function(kosu){
    kosu = appendToDisplay('+');
});

document.querySelector('.minus').addEventListener("click", function(minus){
    minus = appendToDisplay('-');
});

document.querySelector('.procent').addEventListener("click", function(procent){
    procent = appendToDisplay('%');
});





document.querySelector('.remove').addEventListener("click", function(remove){
    remove = clearDisplay();
});


document.querySelector('.ten').addEventListener("click", function(esep){
    esep = calculate();
});





const main = document.getElementById("display");

function appendToDisplay(input){
    main.value += input;
};

function clearDisplay(){
    main.value = "";
};

function calculate(){
    main.value = eval(main.value);
};