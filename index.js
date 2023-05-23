var nummberToFind = 0; 
var attemps = 0; 

function refresh() {
    attemps = 0;
    nummberToFind = parseInt (Math.random() *100);
    console.log(nummberToFind);

}

function verifyNumber() {
    var bet = document.getElementById('bet').value;

    if (bet> 100 || bet < 1)
    {
        alert('Aposta inválida !');
        return
    }

    if(bet > nummberToFind)
    {
        attemps++
        alert('O número para ser encontrado é MENOR !');
    }
    else if(bet < nummberToFind)
    {
        attemps++
        alert('O número a ser encontrado é MAIOR !');
    }

    else 
    {
        alert('Parabéns você acertou !! Com ' +attemps+ ' erros');
        refresh();
    }

}

refresh()