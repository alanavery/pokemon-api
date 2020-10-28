let container = document.querySelector('.container');

fetch('https://api.github.com/users/delayedaa')
.then(response => {
  return response.json();
})
.then(data => {
  let alanObj = {
    bio: data.bio,
    username: data.login,
    name: data.name
  }
  console.log(alanObj);
  let p = document.createElement('p');
  p.textContent = alanObj.name;
  container.appendChild(p);
})
.catch(error => {
  console.log(error);
});