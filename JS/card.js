
  fetch("JSON/cardData.json")
    .then(response => response.json())
    .then(cardData => {
      const cardContainer = document.getElementById("card-container");
    
  cardData.forEach(data => {
    const card = document.createElement("div");
    card.className = "card m-2 position-relative";
    card.style.width = "24rem";
    card.style.border = "1px solid #ddd";
    card.style.borderRadius = "1.5rem";
    card.style.overflow = "hidden";
    card.style.columnCount = "3";

    card.innerHTML = `
      <img src="${data.img}" alt="${data.title}" class="vendor-tile-revamped-image">
      <div class="d-flex flex-column gap-1 top-0 position-absolute m-2">
        <div style="background-color: #fa0050; display: inline-flex;" class="rounded align-items-center p-1">
          <svg style="fill: white;" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="..."></path>
          </svg>
          <span style="font-size: 0.75rem;" class="text-white">${data.discount}</span>
        </div>
        <div style="background-color: #fa0050;" class="d-flex rounded align-items-center p-1">
          <svg style="fill: white;" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="..."></path>
          </svg>
          <span style="font-size: 0.75rem;" class="text-white">${data.delivery}</span>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="card-body d-flex justify-content-between">
          <h5 class="card-title">${data.title}</h5>
          <div class="d-flex gap-1 align-items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="bds-c-rating-star bds-c-rating-star--star-type-full bds-c-rating__rating-star">
              <path class="bds-c-rating-star__fill" fill-rule="evenodd" clip-rule="evenodd" d="..."></path>
              <path class="bds-c-rating-star__outline" fill-rule="evenodd" clip-rule="evenodd" d="..."></path>
            </svg>
             <svg width="16" height="16" viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="bds-c-rating-star bds-c-rating-star--star-type-full bds-c-rating__rating-star">
                                            <path class="bds-c-rating-star__fill" fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.88486 12.1954L4.88943 13.7787C4.64763 13.9065 4.34857 13.813 4.22145 13.5699C4.17083 13.4731 4.15336 13.3622 4.17175 13.2544L4.74383 9.90101C4.75759 9.82035 4.73099 9.73805 4.6727 9.68092L2.24935 7.30602C2.05373 7.11431 2.04973 6.79947 2.24041 6.6028C2.31634 6.52448 2.41583 6.47352 2.52348 6.45779L5.87247 5.96853C5.95302 5.95676 6.02265 5.9059 6.05868 5.83251L7.55639 2.78147C7.67729 2.53518 7.97388 2.43406 8.21885 2.55561C8.3164 2.60402 8.39535 2.6834 8.4435 2.78147L9.94121 5.83251C9.97723 5.9059 10.0469 5.95676 10.1274 5.96853L13.4764 6.45779C13.7467 6.49728 13.9341 6.74963 13.8948 7.02142C13.8791 7.12965 13.8284 7.22968 13.7505 7.30602L11.3272 9.68092C11.2689 9.73805 11.2423 9.82035 11.2561 9.90101L11.8281 13.2544C11.8743 13.5251 11.6935 13.7822 11.4242 13.8286C11.317 13.8471 11.2067 13.8296 11.1105 13.7787L8.11503 12.1954C8.04298 12.1573 7.95691 12.1573 7.88486 12.1954Z">
                                            </path>
                                            <path class="bds-c-rating-star__outline" fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M5.3294 12.4109L7.41756 11.3071C7.78198 11.1145 8.21791 11.1145 8.58233 11.3071L10.6705 12.4109L10.2703 10.065C10.2016 9.66218 10.3341 9.24989 10.6273 8.96256L12.3274 7.2964L9.98286 6.95388C9.57451 6.89422 9.22406 6.63679 9.04353 6.26902L7.99994 4.14309L6.95635 6.26902C6.77582 6.63679 6.42538 6.89422 6.01702 6.95388L3.67247 7.2964L5.37263 8.96256C5.66581 9.24989 5.79831 9.66218 5.72958 10.065L5.3294 12.4109ZM4.88943 13.7745L7.88486 12.1912C7.95691 12.1532 8.04298 12.1532 8.11503 12.1912L11.1105 13.7745C11.2067 13.8254 11.317 13.843 11.4242 13.8245C11.6935 13.7781 11.8743 13.521 11.8281 13.2503L11.2561 9.89686C11.2423 9.8162 11.2689 9.7339 11.3272 9.67677L13.7505 7.30187C13.8284 7.22553 13.8791 7.1255 13.8948 7.01727C13.9341 6.74548 13.7467 6.49313 13.4764 6.45364L10.1274 5.96438C10.0469 5.95261 9.97723 5.90175 9.94121 5.82836L8.4435 2.77732C8.39535 2.67925 8.3164 2.59986 8.21885 2.55146C7.97388 2.42991 7.67729 2.53103 7.55639 2.77732L6.05868 5.82836C6.02265 5.90175 5.95302 5.95261 5.87247 5.96438L2.52348 6.45364C2.41583 6.46937 2.31634 6.52033 2.24041 6.59865C2.04973 6.79532 2.05373 7.11016 2.24935 7.30187L4.6727 9.67677C4.73099 9.7339 4.75759 9.8162 4.74383 9.89686L4.17175 13.2503C4.15336 13.3581 4.17083 13.469 4.22145 13.5658C4.34857 13.8089 4.64763 13.9023 4.88943 13.7745Z">
                                            </path>
                                            <linearGradient id="rating-gradient-one-third">
                                                <stop offset="40%" stop-color="var(--colorRating)"></stop>
                                                <stop offset="40%" stop-color="var(--colorRating)" stop-opacity="0">
                                                </stop>
                                            </linearGradient>
                                            <linearGradient id="rating-gradient-half">
                                                <stop offset="50%" stop-color="var(--colorRating)"></stop>
                                                <stop offset="50%" stop-color="var(--colorRating)" stop-opacity="0">
                                                </stop>
                                            </linearGradient>
                                            <linearGradient id="rating-gradient-two-thirds">
                                                <stop offset="60%" stop-color="var(--colorRating)"></stop>
                                                <stop offset="60%" stop-color="var(--colorRating)" stop-opacity="0">
                                                </stop>
                                            </linearGradient>
                                        </svg>
            <strong>${data.rating}</strong>
            <span>(${data.reviews}+)</span>
          </div>
        </div>
        <div class="card-text ms-1 d-flex gap-1 ">
          <strong>${data.minOrder}</strong>
          <span></span>
          <span>•</span>
          ${data.cuisine}
        </div>
      </div>
    `;

    cardContainer.appendChild(card);
  });
});
  
