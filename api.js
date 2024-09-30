let funcionarios = [];

function criarFuncionario(nome, cargo, salario) {
    const novoFuncionario = { id: funcionarios.length + 1, nome, cargo, salario };
    funcionarios.push(novoFuncionario);
    return novoFuncionario;
}

function lerFuncionarios() {
    return funcionarios;
}

function atualizarFuncionarios(id, nomeAtualizado, cargoAtualizado, salarioAtualizado) {
    const funcionario = funcionarios.find(func => func.id === id);
    if (funcionario) {
        funcionario.nome = nomeAtualizado || funcionario.nome;
        funcionario.cargo = cargoAtualizado || funcionario.cargo;
        funcionario.salario = salarioAtualizado || funcionario.salario;
        return funcionario;
    } else {
        return "Funcionário não encontrado";
    }
}

function deleteFuncionario(id) {
    const index = funcionarios.findIndex(func => func.id === id);
    if (index !== -1) {
        const funcionarioRemovido = funcionarios.splice(index, 1);
        return funcionarioRemovido;
    } else {
        return "Funcionário não encontrado!";
    }
}

// Manipulação da interface

document.getElementById('formAdicionar').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;
    const salario = document.getElementById('salario').value;
    criarFuncionario(nome, cargo, salario);
    exibirFuncionarios();
    this.reset();
});

document.getElementById('formAtualizar').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById('idAtualizar').value);
    const nomeAtualizado = document.getElementById('nomeAtualizado').value;
    const cargoAtualizado = document.getElementById('cargoAtualizado').value;
    const salarioAtualizado = document.getElementById('salarioAtualizado').value;
    atualizarFuncionarios(id, nomeAtualizado, cargoAtualizado, salarioAtualizado);
    exibirFuncionarios();
    this.reset();
});

document.getElementById('formExcluir').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById('idExcluir').value);
    deleteFuncionario(id);
    exibirFuncionarios();
    this.reset();
});

function exibirFuncionarios() {
    const listaFuncionarios = document.getElementById('listaFuncionarios');
    listaFuncionarios.innerHTML = '';
    lerFuncionarios().forEach(func => {
        const item = document.createElement('li');
        item.textContent = `ID: ${func.id} | Nome: ${func.nome} | Cargo: ${func.cargo} | Salário: R$ ${func.salario}`;
        listaFuncionarios.appendChild(item);
    });
}

// Exibe o funcionário "Pedro" automaticamente na primeira vez
criarFuncionario('Pedro', 'Gerente', 3000);
exibirFuncionarios();
