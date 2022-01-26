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
            compraCard.addEventListener('click', () => {contador++; valor += price; arrayCompra.push(arrayItems[i]); addCarrinho(); removeSpan(); addTotal();})
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

      aCard.addEventListener('click', () => {contador--;valor -= price; arrayCompra.splice(i, 1); addCarrinho(); addSpan(); subTotal();})
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


//<==========================BOnus=======================================>

function categories(event){
     if(event = 'Acessórios'){
      
     }
     if(event = 'Calçados'){
           
     }
     if(event = 'Camisetas'){
           
     }     
}


/*
<div class="container">
<figure class="background-figure">
<img src="img/Men-Jacket-Front-Black__15466 1.png" alt="">
<figcaption></figcaption>
</figure>
<p class="span-categories"> <span>Camisetas</span> </p>
<h2 class="product-name">Lightweight Jacket</h2>
<p class="product-description">Adicione um pouco de energai ao seu guarda-roupa de inverno com esta jaqueta vibrante...</p>
<p class="product-price"> <span>R$ 100,00</span> </p>
<a class="link-compra" href="">Adicionar ao carrinho</a>
</div>

<div class="container">
<figure class="background-figure">
<img src="img/image 1.png" alt="">
<figcaption></figcaption>
</figure>
<p class="span-categories"> <span>Acessórios</span> </p>
<h2 class="product-name">Black Hat</h2>
<p class="product-description">O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...</p>
<p class="product-price"> <span>R$ 100,00</span> </p>
<a class="link-compra" href="">Adicionar ao carrinho</a>
</div>

<div class="container">
<figure class="background-figure">
<img src="img/Surgical-Mask-Black__89554 1.png" alt="">
<figcaption></figcaption>
</figure>

<p class="span-categories"> <span>Acessórios</span> </p>
<h2 class="product-name">Mask</h2>
<p class="product-description">Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...</p>
<p class="product-price"> <span>R$ 40,00</span> </p>
<a class="link-compra" href="">Adicionar ao carrinho</a>
</div>

<div class="container">
<figure class="background-figure">
<img src="img/Men-TShirt-Black-Front__70046 1.png" alt="">
<figcaption></figcaption>
</figure>
<p class="span-categories"> <span>Camisetas</span> </p>
<h2 class="product-name">T-shirt</h2>
<p class="product-description">Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...</p>
<p class="product-price"> <span>R$ 100,00</span> </p>
<a class="link-compra" href="">Adicionar ao carrinho</a>
</div>

<div class="container">
<figure class="background-figure">
<img src="img/Men-TShirt-White-Front_70047 1.png" alt="">
<figcaption></figcaption>
</figure>
<p class="span-categories"> <span>Camisetas</span> </p>
<h2 class="product-name">Short-Sleeve T-Shirt</h2>
<p class="product-description">Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...</p>
<p class="product-price"> <span>R$ 100,00</span> </p>
<a class="link-compra" href="">Adicionar ao carrinho</a>
</div>

<div class="container">
<figure class="background-figure">
<img src="img/Men-Jacket-Black-Front- 15467 1.png" alt="">
<figcaption></figcaption>
</figure>
<p class="span-categories"> <span>Camisetas</span> </p>
<h2 class="product-name">Champion Packable Jacket</h2>
<p class="product-description">Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...</p>
<p class="product-price"> <span>R$ 100,00</span> </p>
<a class="link-compra" href="">Adicionar ao carrinho</a>
</div> 




 <li class="lista-items-compra">  
  <div class="imagem-carrinho">
                                          <img src="img/Men-Jacket-Front-Black__15466 1.png" alt="">
                                    </div>
                                    <div class="infos-compra">
                                          <h2>Lightweight Jacket</h2>
                                          <p> <span>R$ 100,00</span> </p>
                                          <a href="">Remover Produto</a>
                                    </div>
                              </li>
*/                                  



