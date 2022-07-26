const form = document.getElementById('form-empresa');

function buscarCEP(event) {
    event.preventDefault();

    const nomeEmpresa = this.nomeEmpresa.value;
    const cnpjEmpresa = this.cnpjEmpresa.value;
    empresa = {'nome': nomeEmpresa, 'cnpj': cnpjEmpresa }
    const URL = 'http://127.0.0.1:8090/add_empresas';

    axios.post(URL, empresa).then(function (resposta) {
        console.log(resposta.data);
    }).catch(error => console.log(error));

    loadTables();
}

form.addEventListener('submit', buscarCEP);


function loadTables() {
    const table = document.getElementById('conteud-table');
    const URL = 'http://127.0.0.1:8090/empresas';

    axios.get(URL).then(function (response) {
        const data = response.data;

        for (var i = 0; i < data.empresas.length; i++){
           
            table.innerHTML += `<tr>
                                    <td>${data.empresas[i].ID_empresa}</td>
                                    <td>${data.empresas[i].nome}</td>
                                    <td>${data.empresas[i].cnpj}</td>
                                </tr>`
        }
        console.log(data.empresas[0].nome);
        //console.log(JSON.stringify(response.data));
    }).catch(error => console.log(error));   
}

