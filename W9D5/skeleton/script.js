document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  const placesForm = document.getElementById("inputForm");
  placesForm.addEventListener("submit", event => {
    event.preventDefault();
    const favoritePlaceInput = document.getElementById("favorite-input");
    const favoritePlace = favoritePlaceInput.value;
    favoritePlaceInput.value = "";

    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");

    li.textContent = favoritePlace;
    ul.appendChild(li); 
  });


  const showPhotoForm = (e) => {
    const photoPhormDiv = document.querySelector(".photo-form-container");
    if (photoPhormDiv.className === "photo-form-container") {
      photoPhormDiv.className = "photo-form-container hidden";
    } else {
      photoPhormDiv.className = "photo-form-container";
    }
  }

  const showPhotoFormButton = document.querySelector(".photo-show-button");
  showPhotoFormButton.addEventListener("click", showPhotoForm);

  const 

  // adding new photos

  // --- your code here!





});
