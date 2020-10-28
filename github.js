fetch('https://api.github.com/users/delayedaa')
.then(response => {
  return response.json();
})
.then(responseJson => {
  console.log(responseJson);
});