async function getRepos() {
  try {
    const response = await fetch(
      'https://api.github.com/users/wesleyallan/repos'
    );
    const repos = await response.json();
    return repos;
  } catch (err) {
    console.log(err.message);
  }
}

function createCard(repo) {
  const card = document.createElement('article');
  card.classList.add('card');
  card.onclick = () => window.open(repo.html_url, '_blank');

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = repo.name;

  const cartDescription = document.createElement('p');
  cartDescription.classList.add('card-description');
  cartDescription.textContent = repo.description;

  const cardTech = document.createElement('p');
  cardTech.classList.add('card-tech');
  cardTech.classList.add(repo.language);
  cardTech.textContent = repo.language;

  card.appendChild(cardTitle);
  card.appendChild(cartDescription);
  card.appendChild(cardTech);

  return card;
}

async function render() {
  try {
    const repos = await getRepos();
    const container = document.getElementById('container');
    repos.forEach((repo) => {
      const card = createCard(repo);
      container.appendChild(card);
    });
  } catch (err) {
    console.log(err.message);
  }
}

render();
