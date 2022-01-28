const arrayItems = [{
      imagem: 'img/Men-Jacket-Front-Black__15466 1.png',
      categoria: 'Camisetas',
      nome: 'Lightweight Jacket',
      descricao: 'Adicione um pouco de energai ao seu guarda-roupa de inverno com esta jaqueta vibrante...',
      preco: 100
},
{
      imagem: 'img/image 1.png',
      categoria: 'Acessórios',
      nome: 'Black Hat',
      descricao: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...',
      preco: 100
},
{
      imagem: 'img/Surgical-Mask-Black__89554 1.png',
      categoria: 'Acessórios',
      nome: 'Mask',
      descricao: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...',
      preco: 40
},
{
      imagem: 'img/Men-TShirt-Black-Front__70046 1.png',
      categoria: 'Camisetas',
      nome: 'T-shirt',
      descricao: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...',
      preco: 100
},
{
      imagem: 'img/Men-TShirt-White-Front_70047 1.png',
      categoria: 'Camisetas',
      nome: 'Short Sleeve T-shirt',
      descricao: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...',
      preco: 100
},
{
      imagem: 'img/Men-Jacket-Black-Front- 15467 1.png',
      categoria: 'Camisetas',
      nome: 'Champion Packable Jacket',
      descricao: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
      preco: 100
}];

const arrayCompra = [];

let contador = 0;

let valor = 0;

let height = 344;

const mainSite = document.getElementById('lista-items');

function createItem(arrayItems, indice){

      for(let i = 0; i < arrayItems.length; i++){
            let price = 0; 
            if(indice === i){
            // criação do card
            const card = document.createElement('div');
            card.classList.add('container');

            //criação da figura do card
            const figureCard = document.createElement('figure');
            figureCard.classList.add('background-figure');
            const imgCard = document.createElement('img');
            const figCaptionCard = document.createElement('figcaption');
            figureCard.appendChild(imgCard);
            figureCard.appendChild(figCaptionCard);

            //criação do span categoria do card
            const categoriaCard = document.createElement('p');
            categoriaCard.classList.add('span-categories');
            const spanCategoria = document.createElement('span');
            categoriaCard.appendChild(spanCategoria);

            //criação do nome do produto
            const nomeCard = document.createElement('h2');
            nomeCard.classList.add('product-name');

            //criação descrição do card
            const descricaoCard = document.createElement('p');
            descricaoCard.classList.add('product-description');

            //criação preço produto
            const priceCard = document.createElement('p');
            priceCard.classList.add('product-price');
            const spanPrice = document.createElement('span');
            priceCard.appendChild(spanPrice);

            //criação do link de compra
            const addCard = document.createElement('a');
            addCard.classList.add('link-compra');
            addCard.href = '#';
            addCard.innerText = "Adicionar ao carrinho";

            for (let x in arrayItems[i]){
                  if(x === 'imagem'){
                        imgCard.src = arrayItems[i][x];
                  }
                  if(x === 'categoria'){
                        spanCategoria.innerHTML = arrayItems[i][x];
                  }    
                  if(x === 'nome'){
                        nomeCard.innerHTML = arrayItems[i][x];  
                  }    
                  if(x === 'descricao'){
                        descricaoCard.innerHTML = arrayItems[i][x];  
                  }    
                  if(x === 'preco'){
                        price = arrayItems[i][x];
                        spanPrice.innerHTML = 'R$ ' + arrayItems[i][x] + ',00';  
                  }             
            }

            //jogando tudo para o card
            card.appendChild(figureCard)
            card.appendChild(categoriaCard)
            card.appendChild(nomeCard)
            card.appendChild(descricaoCard)
            card.appendChild(priceCard)
            card.appendChild(addCard)

            //incluindo card na main
            mainSite.appendChild(card)

            const compraCard = document.getElementsByClassName('link-compra')[i];
            compraCard.addEventListener('click', () => {contador++; valor += price; arrayCompra.push(arrayItems[i]); addCarrinho(); removeSpan(); addTotal(); addheight();})
            }
      }   
}

createItem(arrayItems, 0);
createItem(arrayItems, 1);
createItem(arrayItems, 2);
createItem(arrayItems, 3);
createItem(arrayItems, 4);
createItem(arrayItems, 5);

//chamando lista não ordenada
const card = document.getElementById('lista-compras');

function addCarrinho(){
      
      card.innerHTML = null;

      for(let i = 0; i < arrayCompra.length; i++){
      let price = 0;      

      //criando item
      const liCard = document.createElement('li');
      liCard.classList.add('lista-items-compra');

      //criando imagem
      const divImagem = document.createElement('div');
      divImagem.classList.add('imagem-carrinho');
      const imagemCard = document.createElement('img');
      divImagem.appendChild(imagemCard);
      
      //criando div infos-compra
      const divInfos = document.createElement('div');
      divInfos.classList.add('infos-compra');
      
      //criando nome produto
      const nomeCard = document.createElement('h2');

      //preço do produto
      const precoCard = document.createElement('p');
      const spanPreco = document.createElement('span');
      precoCard.appendChild(spanPreco);

      //criando link de remoção
      const aCard = document.createElement('a');
      aCard.href = '#'
      aCard.innerText = 'Remover Produto';

      for (let x in arrayCompra[i]){
            if(x === 'imagem'){
                  imagemCard.src = arrayCompra[i][x];
            }
            if(x === 'nome'){
                  nomeCard.innerHTML = arrayCompra[i][x];  
            }    
            if(x === 'preco'){
                  price = arrayCompra[i][x];
                  spanPreco.innerHTML = 'R$ ' + arrayCompra[i][x] + ',00';  
            }             
      }

      divInfos.appendChild(nomeCard);
      divInfos.appendChild(precoCard);
      divInfos.appendChild(aCard);

      //jogando tudo para dentro do liCard
      liCard.appendChild(divImagem);
      liCard.appendChild(divInfos);

      card.appendChild(liCard);

      aCard.addEventListener('click', () => {contador--;valor -= price; arrayCompra.splice(i, 1); addCarrinho(); addSpan(); subTotal();removeHeight()})
      }      
}

function removeSpan(){
      const span = document.getElementById('span-hidden');
      const p = document.getElementById('p-hidden');
      if(contador > 0){  
            span.classList.add('hidden');
            p.classList.add('hidden');
      }
}

function addSpan(){
      const span = document.getElementById('span-hidden');
      const p = document.getElementById('p-hidden');
      if(contador === 0){
            span.classList.remove('hidden');
            p.classList.remove('hidden');
      }
}


function addTotal(){
      const div = document.getElementById('box-total');
      const span = document.getElementById('end');
      const span1 = document.getElementById('end1');
      if(contador > 0){
            div.classList.remove('hidden');
            span.innerText = contador;
            span1.innerText = 'R$ ' + valor + ',00';
      }
}

function subTotal(){
      const div = document.getElementById('box-total');
      const span = document.getElementById('end');
      const span1 = document.getElementById('end1');
      span.innerText = contador;
      span1.innerText = 'R$ ' + valor + ',00';
      if(contador === 0){
            div.classList.add('hidden');
      }
}
let aumenta = 0;

function addheight(){      
      const div = document.getElementsByClassName('buy-items');
      if(contador > 3){           
            aumenta += 100;
            div[0].style.height = height + aumenta + 'px'; 
      }      
}

function removeHeight(){
      if(contador >= 3){
            const div = document.getElementsByClassName('buy-items');
            aumenta -= 100;
            div[0].style.height = height + aumenta + 'px';
      } 
}


//<==========================BOnus=======================================>
const buttonResearch = document.querySelector('research-box button');
const inputResearch = document.querySelector('research-box input');

const linkCategories = document.querySelectorAll('nav ul li a');

function categories(){
    for(let i = 0; i < linkCategories.length; i++){
      if(linkCategories[i].innerText === 'Todos'){

      }
      if(linkCategories[i].innerText === 'Acessórios'){

      }
      if(linkCategories[i].innerText === 'Calçados'){

      }
      if(linkCategories[i].innerText === 'Camisetas'){

      }
    }  
    
}


