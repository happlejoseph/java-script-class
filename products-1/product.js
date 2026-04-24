let url = new URLSearchParams(window.location.search)
let id = url.get('id')
async function getProduct(){
    let res =  await  fetch(`https://dummyjson.com/products/${id}`)
    let product = await res.json()

    // document.getElementById('products-list').innerHTML = id;

    let strImages = '';
    product.images.forEach(image=>{
        strImages+= 
        `
        <img src='${image}' onmouseover= 'changeImage("${image}")'>
        `
    })

    document.getElementById('images').innerHTML = strImages;
    document.getElementById('main-image').src = product.thumbnail;
}

getProduct();

function changeImage(img) {
    document.getElementById('main-image').src = img;
}