/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

/* Goals for this project:
  1. Implement a sort alphabetically function
    - Should show all bots in alphabetical order by name
  2. Implement a filter by faction function
    - Should show only bots from the faction selected by the user
  3. Implement a search function that searches by name
    - Should show bots and/or their descriptions that match the search query
  4. Add more data for each bot and show data on separate box like Instagram posts on the website

*/

const transformersCatalog = [
  {
    name: "Optimus Prime",
    faction: "Autobots",
    image: "assets/optimus.jpg",
    description:
      "Optimus Prime is the leader of the Autobots, a faction of transforming robots from the planet Cybertron. He is known for his strong sense of justice and his dedication to protecting humanity from the Decepticons.",
  },
  {
    name: "Megatron",
    faction: "Decepticons",
    image: "assets/megatron.jpg",
    description:
      "Megatron is the leader of the Decepticons, a faction of transforming robots from the planet Cybertron. He is known for his ruthless ambition and his desire to conquer the universe and destroy the Autobots.",
  },
  {
    name: "Bumblebee",
    faction: "Autobots",
    image: "assets/bumblebee.png",
    description:
      "Bumblebee is a member of the Autobots, a faction of transforming robots from the planet Cybertron. He is known for his swiftness, bravery, and his loyalty to Optimus Prime.",
  },
  {
    name: "Starscream",
    faction: "Decepticons",
    image: "assets/starscream.jpg",
    description:
      "Starscream is a member of the Decepticons, a faction of transforming robots from the planet Cybertron. Being a Seeker, he is known for his treacherous nature and his desire to overthrow Megatron and become the leader of the Decepticons himself. But fails every time.",
  },
  {
    name: "Thundercracker",
    faction: "Decepticons",
    image: "assets/thundercracker.jpg",
    description:
      "Thundercracker is a member of the Decepticons, a faction of transforming robots from the planet Cybertron. He is one of the seekers and funnily owns a dog named Buster.",
  },
  {
    name: "Tailgate",
    faction: "Autobots",
    image: "assets/tailgate.jpg",
    description:
      "Tailgate is a member of the Autobots, a faction of transforming robots from the planet Cybertron. He is known for his cheerful, clumsy, and naive personality. He is Cyclonus' Conjunx Endura (his true love).",
  },
  {
    name: "Cyclonus",
    faction: "Decepticons",
    image: "assets/cyclonus.jpg",
    description:
      "Cyclonus is a member of the Decepticons, a faction of transforming robots from the planet Cybertron. In the Lost Light, he is known for his discipline, cold nature as a samurai. He is later to be Tailgate's Conjunx Endura (his true love).",
  },
  {
    name: "Soundwave",
    faction: "Decepticons",
    image: "assets/soundwave.jpg",
    description:
      "Soundwave is a member of the Decepticons, a faction of transforming robots from the planet Cybertron. He is known for his unquestionable loyalty to Megatron and his role as his right-hand man.",
  },
  {
    name: "Swerve",
    faction: "Autobots",
    image: "assets/swerve.jpg",
    description:
      "Swerve is a member of the Autobots, a faction of transforming robots from the planet Cybertron. He is known on the Lost Light to serve other bots drinks at his bar.",
  }, 
  {
    name: "Knock Out",
    faction: "Decepticons",
    image: "assets/knockout.png",
    description:
      "Knock Out is a member of the Decepticons, a faction of transforming robots from the planet Cybertron. He is known for his vanity and obsession with his appearance, often prioritizing it over his duties. Is canonically confirmed to be one of the hottest bots alive.",
  }, 
  {
    name: "Ratchet",
    faction: "Autobots",
    image: "assets/ratchet.jpg",
    description:
      "Ratchet is a member of the Autobots, a faction of transforming robots from the planet Cybertron. He is known for his medical expertise and serves as the chief medical officer for the Autobots.",
  },
  {
    name: "Jetfire",
    faction: "Autobots",
    image: "assets/jetfire.png",
    description:
      "Jetfire is a member of the Autobots, a faction of transforming robots from the planet Cybertron. He is known for his aerial combat skills and his ability to transform into a jet. One of the biggest Autobots and was originally good friends with Starscream.",
  },
  {
    name: "Shockwave",
    faction: "Decepticons",
    image: "assets/shockwave.png",
    description:
      "Shockwave is a member of the Decepticons, a faction of transforming robots from the planet Cybertron. He is known for his cold, calculating nature and his role as the Decepticons' chief scientist. One of the most powerful Decepticons and is infamously regarded as a Cybertronian war criminal for his experiments on other bots.",
  },
  {
    name: "Whirl",
    faction: "Autobots",
    image: "assets/whirl.png",
    description:
      "Whirl is a member of the Autobots, a faction of transforming robots from the planet Cybertron. He is known for his eccentric and unpredictable behavior, as well as his unique transformation into a helicopter. He is also known for his love of music and often incorporates it into his combat style.",
  },
  {
    name: "Megatronus Prime",
    faction: "Decepticons",
    image: "assets/megatronusprime.png",
    description:
      "Megatronus Prime is a member of the Decepticons, a faction of transforming robots from the planet Cybertron. He is known for being one of the original Thirteen Primes and is often associated with darkness and chaos. He is also known for his immense power and his role in the creation of the Decepticons.",
  },
  {
    name: "Prima Prime",
    faction: "Autobots",
    image: "assets/primaprime.png",
    description:
      "Prima Prime is a member of the Autobots, a faction of transforming robots from the planet Cybertron. He is known for being one of the original Thirteen Primes and is often associated with leadership and wisdom. He is also known for his immense power and his role in the creation of the Autobots (art by Lantana_ice).",
  },
  {
    name: "Breakdown",
    faction: "Decepticons",
    image: "assets/breakdown.png",
    description:
      "Breakdown is a member of the Decepticons, a faction of transforming robots from the planet Cybertron. He is known for his aggressive and violent nature, often serving as a ruthless enforcer for the Decepticons. He is also known for being Knock Out's partner in crime and actually showed sympathy for Vehicons and for Bulkhead, his archenemy.",
  },
  {
    name: "Bulkhead",
    faction: "Autobots",
    image: "assets/bulkhead.png",
    description:
      "Bulkhead is a member of the Autobots, a faction of transforming robots from the planet Cybertron. He is known for his immense strength and durability, often serving as a powerful frontline fighter for the Autobots. He is also known for his kind-hearted nature. He is Breakdown's archenemy.",
  },
];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards(displayArray) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  displayArray.forEach((bot) => {
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, bot);
    cardContainer.appendChild(nextCard);
  });
}

//Implementing a search function that will search through the bots' names and have other cards disappear if they don't match the search query. This will be done by adding an event listener to the search input field that listens for changes and then filters the display array based on the search query.
function searchBots(query, displayArray) {
  const searchResults = [];
  searchResults.length = 0; // Clear the search results array
  displayArray.forEach((bot) => {
    if (bot.name.toLowerCase().includes(query.toLowerCase())) {
      searchResults.push(bot);
    }
  });
  return searchResults; // Refresh the display with search results
}

// Implementation will be manual instead of sort to demonstrate understanding of data structures and algorithms, as per project requirements
function sortAlphabetically(displayArray) {
  for (let i = 0; i < displayArray.length - 1; i++) {
    for (let j = 0; j < displayArray.length - i - 1; j++) {
      if (displayArray[j].name > displayArray[j + 1].name) {
        // Swap the bots
        const temp = displayArray[j];
        displayArray[j] = displayArray[j + 1];
        displayArray[j + 1] = temp;
      }
    }
  }
  return displayArray; // Refresh the display after sorting
}

// Implementing a sortByFaction function that will sort bots by their faction first whichever the user chose.
function sortByFaction(displayArray) {
  const autobots = [];
  const decepticons = [];

  displayArray.forEach((bot) => {
    if (bot.faction === "Autobots") {
      autobots.push(bot);
    } else if (bot.faction === "Decepticons") {
      decepticons.push(bot);
    }
  });
  return [...autobots, ...decepticons]; // Combine the two arrays to maintain the original order within each faction
}

// Next is to add a manual filter by faction which should only show bots from the faction selected by user
function filterbyFaction(faction, arrayToFilter) {
  const filteredBots = []; // This array will hold the bots that match the filter criteria
  filteredBots.length = 0; // Clear the filtered array
  arrayToFilter.forEach((bot) => {
    if (bot.faction === faction) {
      filteredBots.push(bot);
    }
  });
  return filteredBots; // Refresh the display with filtered results
}

// This function is supposed to fix any overlapping issues when using filter and sort together.
function filterSortOverlap() {
  let editableCatalog = [];
  // Create a copy of the original catalog to preserve the default order
  for (let i = 0; i < transformersCatalog.length; i++) {
    editableCatalog.push({ ...transformersCatalog[i] });
  }

  const selectFilter = document.getElementById("filter").value;
  if (selectFilter === "autobot") {
    editableCatalog = filterbyFaction("Autobots", editableCatalog);
  } else if (selectFilter === "decepticon") {
    editableCatalog = filterbyFaction("Decepticons", editableCatalog);
  }

  const selectSort = document.getElementById("sort").value;
  if (selectSort === "alphabetical") {
    editableCatalog = sortAlphabetically(editableCatalog);
  } else if (selectSort === "autobot") {
    editableCatalog = sortByFaction(editableCatalog);
  } else if (selectSort === "decepticon") {
    editableCatalog = sortByFaction(editableCatalog).reverse(); 
  }

  const searchQuery = document.getElementById("search-input").value;
  const searchEnter = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", () => {
    editableCatalog = searchBots(searchQuery, editableCatalog);
    showCards(editableCatalog);
  });
  searchEnter.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      searchButton.click();
    }
  });

  showCards(editableCatalog);
}

function editCardContent(card, botData) {
  card.style.display = "block";

  const cardHeader = card.querySelector(".bot-name");
  const mainImage = card.querySelector(".bot-image");
  const insigniaImage = card.querySelector(".insignia");
  const description = card.querySelector(".description");

  cardHeader.textContent = botData.name;
  mainImage.src = botData.image;
  mainImage.alt = botData.name + " Profile Image";
  description.textContent = botData.description;

  if (botData.faction === "Autobots") {
    insigniaImage.src = "assets/autobot.png";
    insigniaImage.alt = "Autobot Insignia";
    insigniaImage.className = "autobot-insignia";
  } else if (botData.faction === "Decepticons") {
    insigniaImage.src = "assets/decepticon.png";
    insigniaImage.alt = "Decepticon Insignia";
    insigniaImage.className = "decepticon-insignia";
  }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
  showCards(transformersCatalog);

  // Call the filter and sort functions when the user selects one or both of the options from the dropdown menus. This will ensure that the display updates immediately after the user makes a selection.
  const filterMenu = document.getElementById("filter");
  filterMenu.addEventListener("change", filterSortOverlap); 

  const sortMenu = document.getElementById("sort");
  sortMenu.addEventListener("change", filterSortOverlap);

  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", filterSortOverlap);
});
