async function getTechData() {
  try {
    const response = await fetch('/src/data/data.json');
    const data = await response.json();
    return data.techs;
  } catch (err) {
    console.log(err.message);
  }
}

async function renderTechs() {
  try {
    const techs = await getTechData();
    const techsContainer = document.getElementById('techs-container');
    techs.forEach((tech) => {
      const card = createCard(tech);
      techsContainer.appendChild(card);
    });
  } catch (err) {
    console.log(err.message);
  }
}

function createCard(tech) {
  console.log(tech);
  const card = document.createElement('article');
  card.classList.add('card');

  const techIcon = document.createElement('img');
  techIcon.classList.add('card-icon');
  techIcon.setAttribute('src', tech.image);
  techIcon.setAttribute('alt', tech.name);

  const cardBody = document.createElement('section');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = tech.name;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = tech.description;

  const cardState = document.createElement('p');
  cardState.classList.add(tech.state);
  cardState.textContent =
    tech.state.charAt(0).toUpperCase() + tech.state.slice(1);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardState);

  card.appendChild(techIcon);
  card.appendChild(cardBody);

  return card;
}

renderTechs();
