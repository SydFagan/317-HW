const cards = document.getElementById("recipeCards");

fetch("recipes.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (recipes) {
    buildCards(recipes);
  })

function buildCards(recipes) {
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    const card = document.createElement("div");
    card.className = "card";
//the random images not even related to the food? (ToT)
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <p>Cook time: ${recipe.minutes} minutes</p>
      <p>${recipe.description}</p>
      <div class="counter">
        <p>Times Cooked: <span class="count-display">0</span></p>
        <button class="minus-btn">-</button>
        <button class="plus-btn">+</button>
        <button class="reset-btn">Reset</button>
      </div>
    `;

    cards.appendChild(card);

    let count = 0;
    const countDisplay = card.querySelector(".count-display");
    const minusBtn = card.querySelector(".minus-btn");
    const plusBtn = card.querySelector(".plus-btn");
    const resetBtn = card.querySelector(".reset-btn");

    plusBtn.addEventListener("click", function () {
      count = count + 1;
      countDisplay.textContent = count;
    });

    minusBtn.addEventListener("click", function () {
      if (count > 0) {
        count = count - 1;
      }
      countDisplay.textContent = count;
    });

    resetBtn.addEventListener("click", function () {
      count = 0;
      countDisplay.textContent = count;
    });
  }
}