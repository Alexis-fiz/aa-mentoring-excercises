displayAvengers();

const username = document.getElementById("username");
const password = document.getElementById("password");

function validUsername() {
  const valueLowerCase = username.value.toLowerCase();
  if (valueLowerCase !== 'thanos' && valueLowerCase !== 'avengers') {
    document.getElementById("username-error").textContent = "Username should be either thanos or avengers";
    return false;
  }
  return true;
}

function validPassowrd() {
  if (password.value !== username.value) {
    document.getElementById("password-error").textContent = "Password must match Username";
    return false;
  }
  return true;
}

username.addEventListener('focus', function() {
  document.getElementById("username-error").textContent = "";
});

username.addEventListener('blur', function() {
  validUsername();
});

password.addEventListener('focus', function() {
  document.getElementById("password-error").textContent = "";
});

password.addEventListener('blur', function() {
  validPassowrd();
});

document.getElementById("myForm").addEventListener("submit", async function(event) {
  const isFormValid = validUsername() && validPassowrd();
  event.preventDefault();
  if (!isFormValid) {
    return;
  }
  
  document.querySelector('.formBox').classList.add('hide');
  
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: username.value, password: password.value }),
    credentials: 'include' // Include cookies in the request and response
  })
  
  const data = await response.json();
  if (data?.role === 'Thanos') {
    
    // this is to be written by users
    var thanosButton = document.createElement('button');
    thanosButton.id = 'thanosButton'; 
    thanosButton.textContent = 'Snap';
    thanosButton.classList.add('btn')
    document.querySelector('.button-container').appendChild(thanosButton);
    
    
    thanosButton.addEventListener('click', async function() {
      await getAvengersAlive();
      displayAvengers();
    })

  } else if (data?.role === 'Avengers') {
    
    const avengersButton = document.createElement('button');
    avengersButton.id = 'avengersButton'; 
    avengersButton.textContent = 'Save';
    avengersButton.classList.add('btn')
    document.querySelector('.button-container').appendChild(avengersButton);
    
    
    avengersButton.addEventListener('click', async function() {
      await getAvengersAlive();
      displayAvengers();
    })
  }
});


async function getAvengersAlive() {
  const response = await fetch('http://localhost:3000/whosAvenger', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
  const {avengers} = await response.json()
  localStorage.setItem('avengers', JSON.stringify(avengers));
}


function displayAvengers() {
  const avengersString = localStorage.getItem('avengers');
  if(!avengersString) return;

  const avengers = JSON.parse(avengersString);
  const container = document.getElementById('avengersContainer');
  avengers.forEach(avenger => {
    const cardHtml = `
    <div class="card">
        <p class="avenger-text">${avenger}</p>
    </div>`;
    container.insertAdjacentHTML('beforeend', cardHtml); 
  })
}
