
function buscaCep(event){
	event.preventDefault();//previne o comportamento normal do botao, que é recarregar a página
	
	let inputCep = document.querySelector('input[name=CEP]');
	let cep = inputCep.value.replace('-','');

	let url = 'http://viacep.com.br/ws/'+cep+'/json/';

	let xhr = new XMLHttpRequest();

	xhr.open('GET',url,true);//true para assincrono

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			preencheCampos(JSON.parse(xhr.responseText));	
		}
	}	

	xhr.send();

}

function preencheCampos(json){
	document.querySelector('input[name=Estado]').value=json.uf;
	document.querySelector('input[name=Cidade]').value=json.localidade;
	document.querySelector('input[name=Bairro]').value=json.bairro;
	document.querySelector('input[name=Rua]').value=json.logradouro;
}



