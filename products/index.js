async function getProducts(){
    // products =fetch('https://dummyjson.com/products')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         products = data.products
    //         console.log(products)
    //     })
    //     .catch(console.log)
    let res = await fetch('https://dummyjson.com/products')
    let {products} = await res.json()
    let str = ''
    products.forEach(product=>{
        console.log(product.title)
        str+= `
            <a href='./product.html?id=${product.id}'>
            <h1>${product.title}</h1>
            <img src="${product.thumbnail}" alt="">
            </a>
        `
    })
    console.log(str)
    document.getElementById('products').innerHTML = str
}
getProducts()