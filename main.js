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

function validPassword() {
  if (password.value !== username.value) {
    document.getElementById('password-error').textContent =
      'Password must match Username';
    return false;
  }
  return true;
}

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

async function login() {
  const response = await fetch(
    'https://dtu-mentoring-server.onrender.com/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      credentials: 'include',
    }
  );
  return await response.json();
}

async function getAvengersAlive() {
  const response = await fetch(
    'https://dtu-mentoring-server.onrender.com/whosAvenger',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }
  );
  const { avengers } = await response.json();
  return avengers;
}

// ====================================================================== //

function saveAvengersOnStorage(avengers) {
  localStorage.setItem('avengers', JSON.stringify(avengers));
}

async function onSubmit(event) {
  event.preventDefault();
  const isFormValid = validUsername() && validPassword();
  if (!isFormValid) {
    return;
  }
  document.querySelector('.formBox').classList.add('hide');
  const { role } = await login();

  switch (role) {
    case 'Thanos':
      createThanosButton();
      document
        .getElementById('thanosButton')
        .addEventListener('click', onSnap, { once: true });
      break;
    case 'Avengers':
      createAvengersButton();
      document
      .getElementById('avengersButton')
      .addEventListener('click', onSnap, { once: true });
      break;
  }
}

async function onSnap() {
  const aliveAvengers = await getAvengersAlive();
  saveAvengersOnStorage(aliveAvengers)
  displayAvengers();
}

function displayAvengers() {
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

username.addEventListener('focus', function () {
  document.getElementById('username-error').textContent = '';
});

username.addEventListener('blur', validUsername)


password.addEventListener('focus', function () {
  document.getElementById('password-error').textContent = '';
});

password.addEventListener('blur', validPassword);

document
  .getElementById('myForm')
  .addEventListener('submit', onSubmit)

displayAvengers();