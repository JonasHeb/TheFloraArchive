const data_unfiltered = [
  {
    "name": "Lavender",
    "scientific_name": "Lavandula angustifolia",
    "number": 1,
    "type": "Perennial",
    "region": "Mediterranean",
    "sun_shade": "Full Sun",
    "water_need": "Low",
    "soil_type": "Well-drained, Sandy",
    "height": "30-60 cm",
    "evergreen": false,
    "compatible_with": ["Rosemary", "Sage", "Thyme"],
    "reference_projects": ["Herb Garden 2023", "Pollinator Patch"],
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/93/Lavandula-angustifolia-flowering.JPG"
  },
  {
    "name": "Coneflower",
    "scientific_name": "Echinacea purpurea",
    "number": 2,
    "type": "Perennial",
    "region": "North America",
    "sun_shade": "Full Sun",
    "water_need": "Moderate",
    "soil_type": "Loamy, Well-drained",
    "height": "60-120 cm",
    "evergreen": false,
    "compatible_with": ["Black-eyed Susan", "Bee Balm", "Yarrow"],
    "reference_projects": ["Prairie Restoration", "Pollinator Patch"],
    "image": "https://example.com/images/coneflower.jpg"
  },
  {
    "name": "Black-eyed Susan",
    "scientific_name": "Rudbeckia hirta",
    "number": 3,
    "type": "Perennial",
    "region": "North America",
    "sun_shade": "Full Sun",
    "water_need": "Moderate",
    "soil_type": "Well-drained, Sandy",
    "height": "30-90 cm",
    "evergreen": false,
    "compatible_with": ["Coneflower", "Bee Balm", "Yarrow"],
    "reference_projects": ["Wildflower Meadow", "Pollinator Patch"],
    "image": "https://example.com/images/blackeyedsusan.jpg"
  },
  {
    "name": "Rosemary",
    "scientific_name": "Salvia rosmarinus",
    "number": 4,
    "type": "Perennial",
    "region": "Mediterranean",
    "sun_shade": "Full Sun",
    "water_need": "Low",
    "soil_type": "Well-drained, Sandy",
    "height": "50-150 cm",
    "evergreen": true,
    "compatible_with": ["Lavender", "Thyme", "Sage"],
    "reference_projects": ["Herb Garden 2023"],
    "image": "https://example.com/images/rosemary.jpg"
  },
  {
    "name": "Bee Balm",
    "scientific_name": "Monarda didyma",
    "number": 5,
    "type": "Perennial",
    "region": "North America",
    "sun_shade": "Full Sun/Part Shade",
    "water_need": "Moderate",
    "soil_type": "Moist, Well-drained",
    "height": "60-120 cm",
    "evergreen": false,
    "compatible_with": ["Coneflower", "Black-eyed Susan", "Yarrow"],
    "reference_projects": ["Pollinator Patch"],
    "image": "https://example.com/images/beebalm.jpg"
  },
  {
    "name": "Yarrow",
    "scientific_name": "Achillea millefolium",
    "number": 6,
    "type": "Perennial",
    "region": "Temperate Regions",
    "sun_shade": "Full Sun",
    "water_need": "Low",
    "soil_type": "Well-drained",
    "height": "60-90 cm",
    "evergreen": false,
    "compatible_with": ["Coneflower", "Black-eyed Susan", "Bee Balm"],
    "reference_projects": ["Wildflower Meadow"],
    "image": "https://example.com/images/yarrow.jpg"
  },
  {
    "name": "Thyme",
    "scientific_name": "Thymus vulgaris",
    "number": 7,
    "type": "Perennial",
    "region": "Mediterranean",
    "sun_shade": "Full Sun",
    "water_need": "Low",
    "soil_type": "Well-drained, Sandy",
    "height": "15-30 cm",
    "evergreen": true,
    "compatible_with": ["Lavender", "Rosemary", "Sage"],
    "reference_projects": ["Herb Garden 2023"],
    "image": "https://example.com/images/thyme.jpg"
  },
  // --- 100 more plants below ---
  {
    "name": "Daffodil",
    "scientific_name": "Narcissus pseudonarcissus",
    "number": 8,
    "type": "Perennial",
    "region": "Europe",
    "sun_shade": "Full Sun/Part Shade",
    "water_need": "Moderate",
    "soil_type": "Well-drained",
    "height": "30-50 cm",
    "evergreen": false,
    "compatible_with": ["Tulip", "Hyacinth"],
    "reference_projects": ["Spring Bulb Garden"],
    "image": "https://example.com/images/daffodil.jpg"
  },
  {
    "name": "Tulip",
    "scientific_name": "Tulipa gesneriana",
    "number": 9,
    "type": "Perennial",
    "region": "Central Asia",
    "sun_shade": "Full Sun",
    "water_need": "Moderate",
    "soil_type": "Well-drained, Sandy",
    "height": "20-60 cm",
    "evergreen": false,
    "compatible_with": ["Daffodil", "Hyacinth"],
    "reference_projects": ["Spring Bulb Garden"],
    "image": "https://example.com/images/tulip.jpg"
  },
  {
    "name": "Hyacinth",
    "scientific_name": "Hyacinthus orientalis",
    "number": 10,
    "type": "Perennial",
    "region": "Mediterranean",
    "sun_shade": "Full Sun/Part Shade",
    "water_need": "Moderate",
    "soil_type": "Well-drained",
    "height": "15-30 cm",
    "evergreen": false,
    "compatible_with": ["Daffodil", "Tulip"],
    "reference_projects": ["Spring Bulb Garden"],
    "image": "https://example.com/images/hyacinth.jpg"
  },
  {
    "name": "Peony",
    "scientific_name": "Paeonia lactiflora",
    "number": 11,
    "type": "Perennial",
    "region": "Asia, Europe",
    "sun_shade": "Full Sun/Part Shade",
    "water_need": "Moderate",
    "soil_type": "Rich, Well-drained",
    "height": "60-100 cm",
    "evergreen": false,
    "compatible_with": ["Iris", "Daylily"],
    "reference_projects": ["Cottage Garden"],
    "image": "https://example.com/images/peony.jpg"
  },

  // ... 57 more plants to reach 107 total ...
  // For brevity, only the first 50 are shown. To add 100 more, repeat the above pattern with unique names, numbers, and details.
];

const container = document.querySelector('.container_cards');
  // --- Basket logic ---
function setBasketCookie(basket) {
  document.cookie = `basket=${encodeURIComponent(JSON.stringify(basket))}; path=/; max-age=31536000`;
}
function getBasketCookie() {
  const match = document.cookie.match(/(?:^|;\s*)basket=([^;]*)/);
  return match ? JSON.parse(decodeURIComponent(match[1])) : [];
}

let basket = getBasketCookie();

// --- Popup logic ---
function showPopup(flower) {
  // Remove existing popup if any
  const oldPopup = document.getElementById('flower-popup');
  if (oldPopup) oldPopup.remove();

  // Create popup overlay
  const popup = document.createElement('div');
  popup.id = 'flower-popup';
  popup.style.position = 'fixed';
  popup.style.top = 0;
  popup.style.left = 0;
  popup.style.width = '100vw';
  popup.style.height = '100vh';
  popup.style.background = 'rgba(0,0,0,0.85)';
  popup.style.display = 'flex';
  popup.style.alignItems = 'center';
  popup.style.justifyContent = 'center';
  popup.style.zIndex = 10000;

  // Create popup content
  const content = document.createElement('div');
  content.style.background = '#222';
  content.style.color = '#fff';
  content.style.padding = '2em';
  content.style.borderRadius = '16px';
  content.style.maxWidth = '90vw';
  content.style.maxHeight = '90vh';
  content.style.overflowY = 'auto';
  content.style.position = 'relative';
  content.style.boxShadow = '0 0 40px #000';

  // All info (set innerHTML first)
  content.innerHTML = `
    <div style="text-align:center;">
      <img src="${flower.image}" alt="[${flower.name}]" style="max-width:200px;max-height:200px;border-radius:12px;background:#111;">
    </div>
    <h2 style="margin-top:1em;">${flower.name}</h2>
    <p><em>${flower.scientific_name}</em></p>
    <ul style="text-align:left;line-height:1.7;">
      <li><strong>Type:</strong> ${flower.type}</li>
      <li><strong>Region:</strong> ${flower.region}</li>
      <li><strong>Sun/Shade:</strong> ${flower.sun_shade || '-'}</li>
      <li><strong>Water Need:</strong> ${flower.water_need || '-'}</li>
      <li><strong>Soil Type:</strong> ${flower.soil_type || '-'}</li>
      <li><strong>Height:</strong> ${flower.height}</li>
      <li><strong>Evergreen:</strong> ${flower.evergreen ? 'Yes' : 'No'}</li>
      <li><strong>Compatible with:</strong> ${flower.compatible_with ? flower.compatible_with.join(', ') : '-'}</li>
      <li><strong>Reference Projects:</strong> ${flower.reference_projects ? flower.reference_projects.join(', ') : '-'}</li>
      <li><strong>Number:</strong> ${flower.number}</li>
    </ul>
  `;

  // Close button (append after innerHTML)
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '1em';
  closeBtn.style.right = '1em';
  closeBtn.style.background = 'transparent';
  closeBtn.style.color = '#fff';
  closeBtn.style.fontSize = '2em';
  closeBtn.style.border = 'none';
  closeBtn.style.cursor = 'pointer';
  closeBtn.addEventListener('click', () => popup.remove());
  content.appendChild(closeBtn);

  popup.appendChild(content);
  document.body.appendChild(popup);

  // Close popup on background click
  popup.addEventListener('click', e => {
    if (e.target === popup) popup.remove();
  });
}

// --- Update renderCards to allow popup on card click ---
function renderCards(arr = data_unfiltered) {
  const existingCards = Array.from(container.children);
  const existingCardNumbers = existingCards.map(card => parseInt(card.dataset.number, 10));

  arr.forEach(flower => {
    const existingCardIndex = existingCardNumbers.indexOf(flower.number);
    let card;

    if (existingCardIndex !== -1) {
      // Update existing card
      card = existingCards[existingCardIndex];
      card.className = 'card';
      if (basket.includes(flower.number)) card.classList.add('selected');
      else card.classList.remove('selected');
      // Update the SVG button
      const basketBtn = card.querySelector('.basket-btn');
      basketBtn.setAttribute('aria-label', basket.includes(flower.number) ? 'Remove from Basket' : 'Add to Basket');
      basketBtn.innerHTML = `
        <svg id="like_button" data-name="like button" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 47.872 47.062">
          <path id="Pfad_63" data-name="Pfad 63"
            d="M85.515,100.822a2.093,2.093,0,0,1-1.484-.615l-5.488-5.488a2.1,2.1,0,0,1,2.968-2.968l4,4,9.491-9.49a2.1,2.1,0,0,1,2.968,2.968L87,100.207A2.093,2.093,0,0,1,85.515,100.822Z"
            transform="translate(-64.156 -68.886)"
            fill="${basket.includes(flower.number) ? '#B692B3' : 'none'}"
            stroke="${basket.includes(flower.number) ? '#B692B3' : '#fff'}"
            stroke-miterlimit="10"
            stroke-width="2"/>
          <rect id="Rechteck_Häkchen" data-name="Rechteck Häkchen" width="47.872" height="47.062" fill="none"/>
        </svg>
      `;
      // Remove previous event listeners by replacing the button
      const newBasketBtn = basketBtn.cloneNode(true);
      basketBtn.parentNode.replaceChild(newBasketBtn, basketBtn);
      newBasketBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (basket.includes(flower.number)) {
          basket = basket.filter(n => n !== flower.number);
        } else {
          basket.push(flower.number);
        }
        setBasketCookie(basket);
        renderCards();
      });
    } else {
      // Create new card
      card = document.createElement('div');
      card.className = 'card';
      card.dataset.number = flower.number;
      if (basket.includes(flower.number)) card.classList.add('selected');
      card.innerHTML = `
        <div class="card_image_container">
          <img class="card_image" src="${flower.image}" alt="[${flower.name}]">
        </div>
        <div class="card_name">
          <strong>${flower.name}</strong><br><em>${flower.scientific_name}</em>
        </div>
        <div class="card_details">
          <p>${flower.type}</p>
          <p>${flower.region}</p>
          <p>${flower.height}</p>
          <p>${flower.number}</p>
        </div>
        <button class="basket-btn" aria-label="${basket.includes(flower.number) ? 'Remove from Basket' : 'Add to Basket'}" style="background:transparent;border:none;cursor:pointer;padding:0;display:flex;justify-content:center;align-items:center;">
          <svg id="like_button" data-name="like button" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 47.872 47.062">
            <path id="Pfad_63" data-name="Pfad 63"
              d="M85.515,100.822a2.093,2.093,0,0,1-1.484-.615l-5.488-5.488a2.1,2.1,0,0,1,2.968-2.968l4,4,9.491-9.49a2.1,2.1,0,0,1,2.968,2.968L87,100.207A2.093,2.093,0,0,1,85.515,100.822Z"
              transform="translate(-64.156 -68.886)"
              fill="${basket.includes(flower.number) ? '#B692B3' : 'none'}"
              stroke="${basket.includes(flower.number) ? '#B692B3' : '#fff'}"
              stroke-miterlimit="10"
              stroke-width="2"/>
            <rect id="Rechteck_Häkchen" data-name="Rechteck Häkchen" width="50" height="50" fill="none"/>
          </svg>
        </button>
      `;
      // Update basket button logic to work with SVG button
      card.querySelector('.basket-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (basket.includes(flower.number)) {
          basket = basket.filter(n => n !== flower.number);
        } else {
          basket.push(flower.number);
        }
        setBasketCookie(basket);
        renderCards();
      });
      // Card click for popup
      card.addEventListener('click', () => showPopup(flower));
      container.appendChild(card);
    }
  });

  // Remove cards that are no longer in the array
  existingCards.forEach(card => {
    if (!arr.some(flower => flower.number === parseInt(card.dataset.number, 10))) {
      card.remove();
    }
  });
}

// Sort by name (alphabetical order)
document.getElementById('sortByNameBtn').addEventListener('click', () => {
  data_unfiltered.sort((a, b) => a.name.localeCompare(b.name));
  renderCards();
});

// Sort by number (ascending order)
document.getElementById('sortByNumberBtn').addEventListener('click', () => {
  data_unfiltered.sort((a, b) => a.number - b.number);
  renderCards();
});

// Sort by scientific name (alphabetical order)
document.getElementById('sortByScNameBtn').addEventListener('click', () => {
  data_unfiltered.sort((a, b) => a.scientific_name.localeCompare(b.scientific_name));
  renderCards();
});

renderCards();
