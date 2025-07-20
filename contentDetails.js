console.clear();

let id = new URLSearchParams(window.location.search).get("id");
console.log("Product ID:", id);

// Display cart count if present in cookies
if (document.cookie.indexOf(',counter=') >= 0) {
    let counter = document.cookie.split(',')[1].split('=')[1];
    document.getElementById("badge").innerHTML = counter;
}

function dynamicContentDetails(ob) {
    let mainContainer = document.createElement('div');
    mainContainer.id = 'containerD';
    document.getElementById('containerProduct').appendChild(mainContainer);

    let imageSectionDiv = document.createElement('div');
    imageSectionDiv.id = 'imageSection';

    let imgTag = document.createElement('img');
    imgTag.id = 'imgDetails';
    imgTag.src = ob.preview;
    imageSectionDiv.appendChild(imgTag);

    let productDetailsDiv = document.createElement('div');
    productDetailsDiv.id = 'productDetails';

    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(ob.name));

    let h4 = document.createElement('h4');
    h4.appendChild(document.createTextNode(ob.brand));

    let detailsDiv = document.createElement('div');
    detailsDiv.id = 'details';

    let h3DetailsDiv = document.createElement('h3');
    h3DetailsDiv.appendChild(document.createTextNode('Rs ' + ob.price));

    let h3 = document.createElement('h3');
    h3.appendChild(document.createTextNode('Description'));

    let para = document.createElement('p');
    para.appendChild(document.createTextNode(ob.description));

    let productPreviewDiv = document.createElement('div');
    productPreviewDiv.id = 'productPreview';

    let h3ProductPreviewDiv = document.createElement('h3');
    h3ProductPreviewDiv.appendChild(document.createTextNode('Product Preview'));
    productPreviewDiv.appendChild(h3ProductPreviewDiv);

    for (let i = 0; i < ob.photos.length; i++) {
        let imgTagProductPreviewDiv = document.createElement('img');
        imgTagProductPreviewDiv.id = 'previewImg';
        imgTagProductPreviewDiv.src = ob.photos[i];

        imgTagProductPreviewDiv.onclick = function () {
            imgTag.src = this.src;
        };

        productPreviewDiv.appendChild(imgTagProductPreviewDiv);
    }

    let buttonDiv = document.createElement('div');
    buttonDiv.id = 'button';

    let buttonTag = document.createElement('button');
    buttonTag.textContent = 'Add to Cart';

    buttonTag.onclick = function () {
        let order = id + " ";
        let counter = 1;
        if (document.cookie.indexOf(',counter=') >= 0) {
            order = id + " " + document.cookie.split(',')[0].split('=')[1];
            counter = Number(document.cookie.split(',')[1].split('=')[1]) + 1;
        }
        document.cookie = "orderId=" + order + ",counter=" + counter;
        document.getElementById("badge").innerHTML = counter;
        console.log("Cart updated:", document.cookie);
    };

    buttonDiv.appendChild(buttonTag);

    mainContainer.appendChild(imageSectionDiv);
    mainContainer.appendChild(productDetailsDiv);
    productDetailsDiv.appendChild(h1);
    productDetailsDiv.appendChild(h4);
    productDetailsDiv.appendChild(detailsDiv);
    detailsDiv.appendChild(h3DetailsDiv);
    detailsDiv.appendChild(h3);
    detailsDiv.appendChild(para);
    productDetailsDiv.appendChild(productPreviewDiv);
    productDetailsDiv.appendChild(buttonDiv);
}

// ✅ FIXED: Proper XMLHttpRequest setup
let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            console.log("Connected to API ✅");
            let contentDetails = JSON.parse(this.responseText);
            dynamicContentDetails(contentDetails);
        } else {
            console.log("API call failed ❌");
        }
    }
};

httpRequest.open('GET', 'https://656307afee04015769a6b6c0.mockapi.io/api/v1/Product_details/' + id, true);
httpRequest.send();
