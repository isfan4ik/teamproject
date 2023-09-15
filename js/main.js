const user = document.getElementById('user')  


function addLocal() {
  localStorage.setItem('username', String(user.value))
}

let username = localStorage.getItem('username');

function login() {
   if (user.value === username) {
      location.href = './Registr.html'
   }
}