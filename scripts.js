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
    description: "Optimus Prime is the leader of the Autobots, a faction of transforming robots from the planet Cybertron. He is known for his strong sense of justice and his dedication to protecting humanity from the Decepticons."
  },
  {
    name: "Megatron",
    faction: "Decepticons",
    image: "assets/megatron.jpg",
    description: "Megatron is the leader of the Decepticons, a faction of transforming robots from the planet Cybertron. He is known for his ruthless ambition and his desire to conquer the universe."

    },
    {
      name: "Bumblebee",
      faction: "Autobots",
      image: "assets/bumblebee.png",
      description: "Bumblebee is a member of the Autobots, a faction of transforming robots from the planet Cybertron. He is known for his bravery and his loyalty to Optimus Prime."
    },
    {
      name: "Starscream",
      faction: "Decepticons",
      image: "assets/starscream.jpg",
      description: "Starscream is a member of the Decepticons, a faction of transforming robots from the planet Cybertron. He is known for his treacherous nature and his desire to overthrow Megatron and become the leader of the Decepticons himself."
    },
    {
      name: "Thundercracker",
      faction: "Decepticons",
      image: "assets/thundercracker.jpg",
      description: "Thundercracker is a member of the Decepticons, a faction of transforming robots from the planet Cybertron. He is known for his speed and his ability to fly."
    },
    {
      name: "Tailgate",
      faction: "Autobots",
      image: "assets/tailgate.jpg",
      description: "Tailgate is a member of the Autobots, a faction of transforming robots from the planet Cybertron. He is known for his cheerful personality and his ability to transform into a compact car."
    },
    {
      name: "Cyclonus",
      faction: "Decepticons",
      image: "assets/cyclonus.jpg",
      description: "Cyclonus is a member of the Decepticons, a faction of transforming robots from the planet Cybertron. He is known for his loyalty to Galvatron and his ability to transform into a sleek jet."
    }

  ];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  transformersCatalog.forEach((bot) => {
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, bot);
    cardContainer.appendChild(nextCard);
  });
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
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
