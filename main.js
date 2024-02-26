displayAvengers();

const username = document.getElementById('username');
const password = document.getElementById('password');

function validUsername() {
  const valueLowerCase = username.value.toLowerCase();
  if (valueLowerCase !== 'thanos' && valueLowerCase !== 'avengers') {
    document.getElementById('username-error').textContent =
      'Username should be either thanos or avengers';
    return false;
  }
  return true;
}

function validPassowrd() {
  if (password.value !== username.value) {
    document.getElementById('password-error').textContent =
      'Password must match Username';
    return false;
  }
  return true;
}

// TODO: dinoume to callback do the rest
username.addEventListener('focus', function () {
  document.getElementById('username-error').textContent = '';
});

username.addEventListener('blur', function () {
  validUsername();
});

password.addEventListener('focus', function () {
  document.getElementById('password-error').textContent = '';
});

password.addEventListener('blur', function () {
  validPassowrd();
});

function createThanosButton() {
  var thanosButton = document.createElement('button');
  thanosButton.id = 'thanosButton';
  thanosButton.textContent = 'Snap';
  thanosButton.classList.add('btn');
  document.querySelector('.button-container').appendChild(thanosButton);
}

function createAvengersButton() {
  const avengersButton = document.createElement('button');
  avengersButton.id = 'avengersButton';
  avengersButton.textContent = 'Save';
  avengersButton.classList.add('btn');
  document.querySelector('.button-container').appendChild(avengersButton);
}

async function onSnap(role) {
  const aliveAvengers = await getAvengersAlive(role);
  console.log(aliveAvengers, role);
  localStorage.setItem('avengers', JSON.stringify(aliveAvengers));
  displayAvengers();
}

document
  .getElementById('myForm')
  .addEventListener('submit', async function (event) {
    const isFormValid = validUsername() && validPassowrd();
    event.preventDefault();
    if (!isFormValid) {
      return;
    }

    document.querySelector('.formBox').classList.add('hide');
    // const response = await fetch('http://localhost:3000/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: username.value,
    //     password: password.value,
    //   }),
    // });

    // const data = await response.json();
    const data = { role: username.value };
    if (data?.role === 'thanos') {
      createThanosButton();
      // this is to be written by users
      document
        .getElementById('thanosButton')
        .addEventListener('click', () => onSnap('thanos'), { once: true });
    } else if (data?.role === 'avengers') {
      createAvengersButton();
      document
        .getElementById('avengersButton')
        .addEventListener('click', () => onSnap('avengers'), { once: true });
    }
  });

async function getAvengersAlive(role) {
  // const response = await fetch(
  //   'https://dtu-mentoring-server.onrender.com/whosAvenger',
  //   {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     cors: 'omit',
  //   }
  // );
  // const { avengers } = await response.json();
  const avengers = [
    'Iron Man',
    'Captain America',
    'Thor',
    'Hulk',
    'Black Widow',
    'Hawkeye',
    'Scarlet Witch',
    'Vision',
    'Black Panther',
    'Spider-Man',
  ];
  if (role === 'thanos') return avengers.slice(0, 5);
  return avengers;
}

function displayAvengers() {
  // TODO Intro + HTML container D<div class="card">
  // <p class="avenger-text">${avenger}</p>
  // </div>`;
  const avengersString = localStorage.getItem('avengers');
  if (!avengersString) return;

  const avengers = JSON.parse(avengersString);
  const container = document.getElementById('avengersContainer');
  container.innerHTML = '';

  avengers.forEach((avenger) => {
    const cardHtml = `
    <div class="card">
        <p class="avenger-text">${avenger}</p>
    </div>`;
    container.insertAdjacentHTML('beforeend', cardHtml);
  });
}
