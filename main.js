function getAllitems() {

  fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment')
  .then(response => response.json())
  .then(json => {
      console.log(json)
      let elHtml = document.getElementById("data");
      json.data.forEach(data => {
          let divCard = document.createElement('div')
          divCard.classList.add('card')
          divCard.classList.add('col-lg-2')
          divCard.classList.add('my-3')
          divCard.classList.add('mx-3')
          divCard.classList.add('text-center')
          let infos = `
              <img src=${data.image} class="card-img-top" alt="une petite description">
              <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  <p class="card-text">Category : ${data.description}</p>
                  <a href="#" class="btn btn-primary">More infos</a>
              </div>
          `
          divCard.innerHTML = infos
          elHtml.appendChild(divCard);
      })
  })
}

getAllitems();

// function getUsers() {
  
//   fetch("https://dragonball-api.com/api/characters")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
      
//       let ul = document.getElementById("characters");
//       json.items.forEach(el => {

//         //list insertion
//         let li = document.createElement('li')
//         li.innerHTML = el.name
//         ul.appendChild(li)
        
//         //image insertion
//         let img = document.createElement('img')
//         img.src = el.image
//         ul.appendChild(img)
  
//     });
// });

// }

// getUsers();