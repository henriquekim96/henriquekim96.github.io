$(function () {
	var $dados = $('#dados');
	var $modelo = $('#modelo');
	var $preco = $('#preco');
	var $ID = $('#ID');

	function getStates(value){
		$
	}

	$.ajax({
		type: 'GET',
		url:'read',
		success: function(dados){
			$.each(dados, function(i, dado) {
				$dados.append('<li>modelo: '+dado.modelo+', Preco: '+dado.preco+
				', ID: '+dado.ID+'</li>');
			})
		},
		error: function(){
			alert("Erro ao carregar!");
			return false;
		}


	})	
	$('#enviar').on('click', function(e) {
		

		var produto = {
			modelo: $modelo.val(),
			preco: $preco.val(),
			ID: $ID.val(),
		}
		if(produto.modelo==""||produto.modelo==null){
			alert("Campo de modelo esta vazio!");
			return false;
		}
		if(produto.preco==""||produto.preco==null){
			alert("Campo de preco esta vazio!");
			return false;
		}
		if(produto.ID==""||produto.ID==null){
			alert("Campo de ID esta vazio!");
			return false;
		}
		e.preventDefault();

		$('#img').show();

		$.ajax({
			
			type:'POST',
			url:'create',
			data: produto,
			
			success: function(){
				$('#img').hide();
				$dados.append('<li>modelo: '+produto.modelo+', Preco: '+produto.preco+
				', ID: '+produto.ID+'</li>');
			},

			error: function() {
				console.log("deu treta ai", produto);
			},
		});	
	});
});

