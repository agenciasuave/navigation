/**********************/
// NAVEGAÇÃO POR ARROWS
/**********************/

function Navigation(objClicado, push, linha){
	
	//RETORNA APENAS NUMEROS DE STRING
	this.apenasNumeros = function(string){
		var numsStr = string.replace(/[^0-9]/g,'')
		return parseInt(numsStr)
	}

	//EXPLODE OBJ E RETORNA NOVO OBJ COM ATRIBUTOS
	this.objAttr = _ => {
		return {
			a: objClicado.attr('data-nav'), b: push.attr('data-push'), c: linha.attr('id')
		}
	}

	//MUDA TELA
	this.change = function(){
		let destiny = this.objAttr().b

		//PEGA LARGURA E ALTURA DA LINHA
		alt = objClicado.height()
		larg = objClicado.parent().width()

		//APLICA ANIMAÇÃO
		function effect(objScroll){
			$(`html, body`).animate(objScroll, 500);
		}
	
		//TESTA QUAL O DESTINO E APLICA O "PUSH"
		if(destiny == 'navNext'){
			effect({scrollLeft: `+=${larg}`})
		}else if(destiny == 'navPrev'){
			effect({scrollLeft: `-=${larg}`})
		}else if(destiny == 'navBottom'){
			effect({scrollTop: `+=${alt}`})
		}else if(destiny == 'navTop'){
			effect({scrollTop: `-=${alt}`})
		}
	}	
}

//EXECUTA NO CLICK E PASSA PARÂMETROS
$('a[data-push="navNext"], a[data-push="navPrev"], a[data-push="navBottom"], a[data-push="navTop"]').click(function(){
	let navHorizontal = new Navigation($(this).parents('[data-nav^="tela"]'), $(this), $(this).parents('[id^="l"]'))
	navHorizontal.change()
	return false;
})

/**********************/
// NAVEGAÇÃO POR MENU
/**********************/

function navLink(tela){
	//BUSCA NO DOM O DATANAV CORRESPONDENTE AO LINK
	let search = $('body').find(`[data-nav="${tela}"]`)
	//EXPLODE PRIMEIRO OBJ RETORNADO E DEVOLVE AS CLASSES
	let screen = $(search[0]).attr('class').split(" ")
	//PEGA POSIÇÃO
	let position = $(`.${screen[0]}`).offset()
	if(position.top <= 0 && position.left <= 0){
		$('html, body')
		.animate({scrollTop: `${position.top}`})
		.animate({scrollLeft: `${position.left}`})
	}else if(position.top >= 0 && position.left >= 0 || position.left <= 0){
		$('html, body')
		.animate({scrollTop: `${position.top}`})
		.animate({scrollLeft: `${position.left}`})
	}
}

//EXECUTA NO CLICK E PASSA PARÂMETROS
$('.menu li a').click(function(){
	navLink($(this).attr('id'))
	return false;
})