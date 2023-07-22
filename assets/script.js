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

function getDogBreedInfo(breedName) {
    fetch('https://api.api-ninjas.com/v1/dogs?name=' + breedName, {
        method: 'GET',
        headers: { 'X-Api-Key': 'ClM+4cVtO1YtwmOO8xz1jw==0CKehjLoj6PIJUqT'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        }

    })
        .then(function(response) {
            return response.json();
        })
        .then(function(breedData) {
            console.log(breedData[0]);
        
        var container = document.querySelector(".breed-data");
                    
                    var centerDiv = document.createElement('div');
                    centerDiv.classList.add("is-flex", "is-flex-direction-column", "is-align-items-center");
                    container.appendChild(centerDiv);
                    // append h1 to contaier div and add classes
                    var h1 = document.createElement('h1');
                    h1.classList.add("is-size-2", "has-text-centered", "has-text-link", "has-text-weight-semibold")
                    centerDiv.appendChild(h1);

                    var h2 = document.createElement('h2');
                    h2.classList.add("is-size-3", "has-text-centered", "has-text-link")
                    centerDiv.appendChild(h2);

                    var petImg = document.createElement('img');
                        petImg.setAttribute("src", breedData[0].image_link);
                    centerDiv.appendChild(petImg);

                    // capitalize first letter of breed name
                    h1.innerText = breedName.charAt(0).toUpperCase() + breedName.slice(1);

                    h2.innerText = "On a scale of 1 to 5 (low to high)"

                    // create list items
                    var ul = document.createElement('ul');

                    // barking level
                    var li1 = document.createElement('li');
                    li1.innerText = "Barking Level: " + breedData[0].barking;

                    // coat length
                    var li2 = document.createElement('li');
                    li2.innerText = "Coat Length: " + breedData[0].coat_length;

                    // energy level
                    var li3 = document.createElement('li');
                    li3.innerText = "Energy Level: " + breedData[0].energy;

                    // good with children
                    var li4 = document.createElement('li');
                    li4.innerText = "Good with Children: " + breedData[0].good_with_children;

                    // good with other dogs
                    var li5 = document.createElement('li');
                    li5.innerText = "Good with other dogs: " + breedData[0].good_with_other_dogs;

                    // max weight male
                    var li6 = document.createElement('li');
                    li6.innerText = "Maximum Weight Male: " + breedData[0].max_weight_male + " pounds";

                    // max weight female
                    var li7 = document.createElement('li');
                    li7.innerText = "Maximum Weight Female: " + breedData[0].max_weight_female + " pounds";

                    // max life expectancy
                    var li8 = document.createElement('li');
                    li8.innerText = "Maximum Life Expectancy: " + breedData[0].max_life_expectancy + " years";

                    // trainability
                    var li9 = document.createElement('li');
                    li9.innerText = "Trainability: " + breedData[0].trainability;

                    // shedding
                    var li10 = document.createElement('li');
                    li10.innerText = "Shedding: " + breedData[0].shedding;

                    ul.appendChild(li1);
                    ul.appendChild(li2);
                    ul.appendChild(li3);
                    ul.appendChild(li4);
                    ul.appendChild(li5);
                    ul.appendChild(li6);
                    ul.appendChild(li7);
                    ul.appendChild(li8);
                    ul.appendChild(li9);
                    ul.appendChild(li10);
                    
                    container.appendChild(ul);

                    searchHistoryDog.push(breedName);
                    localStorage.setItem("searchDog", JSON.stringify(searchHistoryDog));
                    displayLocalStorage(breedName);

                }) .catch(function(error) {
                    console.log(error);
                    showModal();
                })
        }
