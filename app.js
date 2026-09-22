const form = document.getElementById('form'); //capturando o formulario
const cepInput = document.getElementById('cep') //captura o input do CEP

form.addEventListener('submit', async (event)=>{
    event.proventDefault(); // evita o envio do formulario
    const cep = cepInput.value.trim(); // obtendo o valor do CEP e removendo espaços em branco

    try{
        const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`); // fazendo requisição para a API do ViaCEP

        const data = await resp.json(); // convertendo a resposta para JSON

        if(data.erro) {
            alert('CEP não encontrado.'); // caso o CEP não seja encontrado
            return;
        }

        //preenchendo os campos do formulário com os daods retornados
        document.getElementById('logradouro').value = data.logradouro || '-';
        document.getElementById('bairro').value = data.bairro || '-';
        document.getElementById('cidade').value = data.cidade || '-';
        document.getElementById('uf').value = data.uf || '-';
        } catch (err) {
        alert('Erro ao buscar o CEP'); // caso ocorra algum erro na requisição
    }
})