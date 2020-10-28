fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.log(error);
})

fetch('https://api.spacexdata.com/v3/capsules/upcoming')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.log(error);
})

fetch('https://api.spacexdata.com/v3/capsules/C104')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.log(error);
})

fetch('https://api.spacexdata.com/v3/capsules/past')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.log(error);
})