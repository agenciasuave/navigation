# navigation
# Instruções
## 1) JAVASCRIPT e CSS
* Inclua antes de , o arquivo jquery-3.3.1.js `<script src="js/jquery-3.3.1.js"></script>`

* Inclua antes de , o arquivo navigation.js `<script src="js/navigation.js"></script>`

* Inclua antes de , o arquivo navigation.css `<link rel="stylesheet" href="css/navigation.css" />`

## 2) MARCAÇÃO HTML
* Crie um container com a classe tela `<div class="tela"></div>`

* Crie uma div com o id da linha utilizando o prefixo "l" `<div id="l1"></div>`

* Dentro da div, crie a primeira tela de visualização com o atributo data-nav utilizando o prefixo "tela" `<div data-nav="tela01 col-12"></div>`

#### OBS: Para evitar erros, a classe com o nome da tela deve vir antes de todas as classes, conforme no exemplo.
Exemplo de como deve ficar a marcação para um grid 6x6:

```
<div id="tela"> 
  <div class="l1">
    <div data-nav="tela01"></div>
    <div data-nav="tela02"></div>
    <div data-nav="tela03"></div>
  </div>
<div>
<div id="tela"> 
  <div class="l2">
    <div data-nav="tela04"></div>
    <div data-nav="tela05"></div>
    <div data-nav="tela06"></div>
  </div>
<div>
```

### Navegação por setas
Dentro da div tela[*], crie um ou mais links com o atributo data-push, especificando para qual tela cada link deverá se referir quando clicado. Ex: Para prosseguir para a tela da direita, você deve usar data-push="navNext"

#### Controles
* Direita: navNext
* Esquerda: navPrev
* Cima: navTop
* Baixo: navBottom

### Navegação por menu
Crie uma lista desordenada com a classe menu. Dentro dela crie itens de lista, e dentro de cada item, um link com id cujo nome representa a classe da tela na qual o link deverá redirecionar quando clicado.
```
<ul>
  <li> 
    <a id="tela01" href=""> Home </a>
  </li>
  <li> 
    <a id="tela02" href=""> Sobre </a>
  </li>
  <li> 
    <a id="tela03" href=""> Contato </a>
  </li>
</ul>
```
