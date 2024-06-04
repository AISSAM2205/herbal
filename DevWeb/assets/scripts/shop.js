async function getHerbs() {
  const response = await fetch("http://127.0.0.1:3001/herbs", {
    method: "GET",
  });

  const herbs = await response.json();
  return herbs;
}

async function getHerb(id) {
  const response = await fetch(`http://127.0.0.1:3001/herb/${id}`, {
    method: "GET",
  });

  const herb = await response.json();
  return herb;
}

async function addHerb(data = []) {
  // const data = [
  // 	{
  // 		name: "Gum arabic",
  // 		description:
  // 			"A natural gum sourced from hardened sap of various species of acacia tree used in ancient birth control as well as a binder and emulsifier for medicinal compounds.",
  // 		image: "arabic_gum.jpg",
  // 		stock: 120,
  // 		price: 500,
  // 	},
  // 	{
  // 		name: "Common yarrow",
  // 		description:
  // 			"Purported to be a diaphoretic, astringent, tonic, stimulant and mild aromatic.",
  // 		image: "common_yarrow.jpg",
  // 		stock: 80,
  // 		price: 621,
  // 	},
  // 	{
  // 		name: "Black cohosh",
  // 		description:
  // 			"Historically used for arthritis and muscle pain, used more recently for conditions related to menopause and menstruation.",
  // 		image: "black_cohosh.jpg",
  // 		stock: 35,
  // 		price: 356,
  // 	},
  // 	{
  // 		name: "Horse chestnut",
  // 		description:
  // 			"Its seeds, leaves, bark, and flowers have been used medicinally for many centuries for treating joint pain, bladder and gastrointestinal problems, fever, leg cramps, and other conditions. It may be useful for treating chronic venous insufficiency. The raw plant materials are toxic unless processed.",
  // 		image: "horse_chestnut.jpg",
  // 		stock: 45,
  // 		price: 120,
  // 	},
  // 	{
  // 		name: "White snakeroot",
  // 		description:
  // 			"Root tea has been used to treat diarrhea, kidney stones, and fever. A root poultice can be used on snakebites. The smoke from burning leaves is used to revive unconscious people. The plant contains the toxin tremetol which causes milk sickness, a sometimes fatal condition.",
  // 		image: "white_snakeroot.jpg",
  // 		stock: 19,
  // 		price: 320,
  // 	},
  // 	{
  // 		name: "Common hollyhock",
  // 		description:
  // 			"Believed to be an emollient and laxative. It is used to control inflammation, to stop bedwetting and as a mouthwash in cases of bleeding gums.",
  // 		image: "common_hollyhock.jpg",
  // 		stock: 36,
  // 		price: 560,
  // 	},
  // 	{
  // 		name: "Water plantain",
  // 		description: "Used for the urinary tract.",
  // 		image: "water_plantain.jpg",
  // 		stock: 78,
  // 		price: 400,
  // 	},
  // ]

  for (const herb of data) {
    console.log(herb);
    fetch("http://127.0.0.1:3001/herb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(herb),
    }).catch((error) => console.error(error));
  }
}

async function updateHerb(id, data) {
  const response = await fetch(`http://127.0.0.1:3001/herb/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => console.error(error));

  const herb = await response.json();
  return herb;
}

async function Shop() {
  const data = await getHerbs();
  const container = document.querySelector("#shop");
  container.innerHTML = "";

  await data.forEach((herb) => {
    const card = document.createElement("div");
    card.classList.add("shop-card");

    const image = document.createElement("img");
    image.src = `assets/images/herbs/${herb.image}`;
    image.alt = `${herb.name} herb`;

    const name = document.createElement("h3");
    name.textContent = herb.name;

    const description = document.createElement("p");
    description.textContent = herb.description;

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = `${herb.price} Dh/Kg`;

    const stock = document.createElement("span");
    stock.classList.add("stock");
    stock.textContent = `Stock: ${herb.stock}Kg`;

    // Add elements to the card
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(stock);

    // Add card to the shop element
    container.appendChild(card);
  });

  const add = document.createElement("button");
  add.textContent = "Add more";
  add.classList.add("add_more");
  add.onclick = () => {
    addHerb([
      {
        name: "Achillea filipendulina",
        description:
          "Achillea filipendulina, est une espèce asiatique de plantes vivaces de la famille des Asteracées, native du centre et du sud-ouest de l'Asie. Elle est également maintenant présente dans certaines parties de l'Europe et de l'Amérique du Nord.",
        image: "achillea_filipendula.jpg",
        stock: 30,
        price: 412,
      },
    ]);
  };

  container.parentElement.appendChild(add);
}

Shop();
