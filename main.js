const form = document.getElementById('formulario'); 
const atividade = [];
let linhas = "";

form.addEventListener('submit', function(e) {
    e.preventDefault();   

    const nomeCadastrado = document.getElementById('nome');
    const telCadastro = document.getElementById('telefone'); 
    
        atividade.push(telCadastro.value);
        
        let linha = `<tr>`;
        linha += `<td>${nomeCadastrado.value}</td>`;
        linha += `<td>${telCadastro.value}</td>`;
        linha += `</tr>`;
        linhas += linha;    

    const cadastroNamoTel = document.querySelector('tbody');
        cadastroNamoTel.innerHTML = linhas; 

    nomeCadastrado.value = "";
    telCadastro.value = "";
})