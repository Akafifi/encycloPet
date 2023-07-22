var catFactBtn = document.getElementById('cat-fact');
var dogFactbtn = document.getElementById('dog-fact');
var breedInputEl = document.querySelector('.search-breed');
var breedForm = document.querySelector('breed-input');
var petType = document.querySelector('#pet-select');
var selectedPetType;
var notification = document.querySelector('#modal');
var notificationBtn = document.querySelector('.notification .delete');
var clearEl = document.querySelector('#clear');
var historyElDog = document.querySelector('search-history-dog');
var historyElCat = document.querySelector('#search-history-cat');
var searchHistoryDog = JSON.parse(localStorage.getItem('searchDog')) || [];
var searchHistoryCat = JSON.parse(localStorage.getItem('searchCat')) || [];

dogFactbtn.addEventListener('click', function() {

        fetch('https://dogapi.dog/api/v2/facts')
    .then (function(response) {
        return response.json()
    })
    .then (function (data) {
        var heroText = document.getElementById('hero-text')
        var dogFact = data.data[0].attributes.body
        heroText.innerText = dogFact
        heroText.classList.add('is-size-3')
    })

})
// ----Cat Button-------------
catButton.addEventListener('click', function() {
    fetch('https://catfact.ninja/fact')
        .then( function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            var heroText = document.querySelector("#hero-text");
            heroText.textContent = data.fact;
            heroText.classList.add("is-size-3")

        })
})
