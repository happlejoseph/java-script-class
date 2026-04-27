let url = new URLSearchParams(window.location.search)
let id = url.get('id')
async function getProduct(){
    let res =  await  fetch(`https://dummyjson.com/products/${id}`)
    let data = await res.json()
    
}
getProduct()