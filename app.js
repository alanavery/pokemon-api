let container = document.querySelector('.container');

let createNewElement = (tagName, className) => {
  let newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
}

let createNewCard = (pokemon) => {
  fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
  .then(response => {
    return response.json();
  })
  .then(data => {
    
    console.log(data);

    // Create new object
    let newPokemon = {
      imageUrl: data.sprites.other['official-artwork']['front_default'],
      name: data.name,
      height: data.height,
      weight: data.weight,
      ability: data.abilities[0].ability.name,
      move: data.moves[0].move.name,
      purchaseLink: 'https://www.pokemoncenter.com/category/trading-card-game'
    }
    
    // Create new HTML elements
    let divCard = createNewElement('div', 'card');
    divCard.classList.add(pokemon);
    divCard.style.width = '20rem';
    divCard.style.display = 'inline-block';

    let img = createNewElement('img', 'card-img-top');
    img.src = newPokemon.imageUrl;

    let divCardBody = createNewElement('div', 'card-body');

    let name = createNewElement('h5', 'card-title');
    name.textContent = newPokemon.name;
    name.style.textTransform = 'capitalize';

    let height = createNewElement('p', 'card-text');
    height.textContent = `Height: ${newPokemon.height}`;

    let weight = createNewElement('p', 'card-text');
    weight.textContent = `Weight: ${newPokemon.weight}`;

    let ability = createNewElement('p', 'card-text');
    ability.textContent = `Ability: ${newPokemon.ability}`;

    let move = createNewElement('p', 'card-text');
    move.textContent = `Move: ${newPokemon.move}`;

    let purchaseLink = createNewElement('a', 'btn');
    purchaseLink.classList.add('btn-primary');
    purchaseLink.href = newPokemon.purchaseLink;
    purchaseLink.textContent = 'Purchase';

    // Add new HTML elements to the DOM
    divCardBody.appendChild(name);
    divCardBody.appendChild(height);
    divCardBody.appendChild(weight);
    divCardBody.appendChild(ability);
    divCardBody.appendChild(move);
    divCardBody.appendChild(purchaseLink);

    divCard.appendChild(img);
    divCard.appendChild(divCardBody);

    container.appendChild(divCard);

  })
  .catch(error => {
    console.log(error);
  });
}

createNewCard('charizard');
createNewCard('klink');
createNewCard('turtwig');
createNewCard('vulpix');
createNewCard('mr-mime');