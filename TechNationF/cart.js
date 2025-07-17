console.clear();

if (document.cookie.indexOf(',counter=') >= 0) {
  let counter = document.cookie.split(',')[1].split('=')[1];
  document.getElementById("badge").innerHTML = counter;
}

let cartContainer = document.getElementById('cartContainer');

let boxContainerDiv = document.createElement('div');
boxContainerDiv.id = 'boxContainer';

// Total container setup
let totalContainerDiv = document.createElement('div');
totalContainerDiv.id = 'totalContainer';

let totalDiv = document.createElement('div');
totalDiv.id = 'total';
totalContainerDiv.appendChild(totalDiv);

let totalh2 = document.createElement('h2');
totalh2.innerText = 'Total Amount';
totalDiv.appendChild(totalh2);

// Button setup
let buttonDiv = document.createElement('div');
buttonDiv.id = 'button';
totalDiv.appendChild(buttonDiv);

// Place Order button
let placeOrderButton = document.createElement('button');
placeOrderButton.innerText = 'Place Order';
buttonDiv.appendChild(placeOrderButton);

placeOrderButton.onclick = function () {
  window.location.href = 'Address_details_page.html?id=';
};

// --- Add Cancel Order button ---
let cancelButton = document.createElement('button');
cancelButton.innerText = 'Cancel Order';
cancelButton.style.marginLeft = "10px"; // Spacing between buttons
buttonDiv.appendChild(cancelButton);

cancelButton.onclick = function () {
  // Set cart count to 0 (or clear cookie)
    document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "counter=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  // Update badge value visually
  document.getElementById("badge").innerHTML = "0";
  // Redirect to index.html
  window.location.href = "index.html";
};

// DYNAMIC CODE TO SHOW SELECTED ITEMS
function dynamicCartSection(ob, itemCounter) {
  let boxDiv = document.createElement('div');
  boxDiv.id = 'box';
  boxContainerDiv.appendChild(boxDiv);

  let boxImg = document.createElement('img');
  boxImg.src = ob.preview;
  boxDiv.appendChild(boxImg);

  let boxh3 = document.createElement('h3');
  boxh3.innerText = ob.name + ' × ' + itemCounter;
  boxDiv.appendChild(boxh3);

  let boxh4 = document.createElement('h4');
  boxh4.innerText = 'Amount: Rs ' + ob.price * itemCounter;
  boxDiv.appendChild(boxh4);

  return cartContainer;
}

// TO UPDATE THE TOTAL AMOUNT
function amountUpdate(amount) {
  let totalh4 = document.createElement('h4');
  totalh4.id = 'toth4';
  totalh4.innerText = 'Amount: Rs ' + amount;
  totalDiv.appendChild(totalh4);
}

cartContainer.appendChild(boxContainerDiv);
cartContainer.appendChild(totalContainerDiv);

// BACKEND CALL
let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function () {
  if (this.readyState === 4) {
    if (this.status == 200) {
      let contentTitle = JSON.parse(this.responseText);

      let counter = Number(document.cookie.split(',')[1].split('=')[1]);
      document.getElementById("totalItem").innerText = 'Total Items: ' + counter;

      let item = document.cookie.split(',')[0].split('=')[1].split(" ");

      let totalAmount = 0;
      for (let i = 0; i < counter; i++) {
        let itemCounter = 1;
        for (let j = i + 1; j < counter; j++) {
          if (Number(item[j]) === Number(item[i])) {
            itemCounter += 1;
          }
        }
        totalAmount += Number(contentTitle[item[i] - 1].price) * itemCounter;
        dynamicCartSection(contentTitle[item[i] - 1], itemCounter);
        i += (itemCounter - 1);
      }

      amountUpdate(totalAmount);
    } else {
      console.log('Call failed!');
    }
  }
};

httpRequest.open('GET', 'https://656307afee04015769a6b6c0.mockapi.io/api/v1/Product_details', true);
httpRequest.send();