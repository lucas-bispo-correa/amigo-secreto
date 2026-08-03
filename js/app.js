
let participantes = [];

//---------Functions-----------

function adicionar(){
    let nomePessoa = document.getElementById('nome-amigo').value;

    if(!nomePessoa){
        alert('Por favor, insira um nome válido.');
        return;
    }

if (participantes.some(nome => nome.toLowerCase() === nomePessoa.toLowerCase())) {
    alert('Este nome já foi adicionado.');
    return;
}
    participantes.push(nomePessoa);

    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = (`${participantes}`);

    document.getElementById('nome-amigo').value = '';
}


function sortear() {
    if (participantes.length <= 2) {
        alert('É necessário ter pelo menos 2 participantes para realizar o sorteio.');
        return;
    }

    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';

    // Cria uma cópia da lista
    let sorteio = [...participantes];

    // Embaralha a cópia
    for (let i = sorteio.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        let temp = sorteio[i];
        sorteio[i] = sorteio[j];
        sorteio[j] = temp;
    }

    // Exibe o resultado
    for (let i = 0; i < sorteio.length; i++) {
        let amigo = sorteio[(i + 1) % sorteio.length];

        listaSorteio.innerHTML += `<li>${sorteio[i]} → ${amigo}</li>`;
    }
}

function reiniciar(){
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    participantes = [];
}