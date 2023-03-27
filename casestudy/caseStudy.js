class Products {
    name
    price
    img

    constructor(img, name, price) {
        this.name = name
        this.price = price
        this.img = img
    }

    getname() {
        return this.name
    }

    getprice() {
        return this.price
    }

    getimg() {
        return this.img
    }
}
let product1 = new Products("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq22QkwvEw76GnNYLmeOkX7vaRBf9cd3jyPQ&usqp=CAU", "Dép tổ ong công nghệ nano", "129000");
let product = []
product.push(product1)
function displayAllProduct() {
    let data = "<table>";
    data += "<tr>"
    for (let i = 0; i < product.length; i++) {
        if (i === 5){
         data += "<tr></tr>"
        }
        data += `<td> <img src="${product[i].img}" style="width: 100px; height: 100px"> 
                <div>${product[i].name}</div>
                 <div>${product[i].price}</div>
               <button onclick='editProd( ${i} )'>Edit</button>
              <button onclick='deleteProduct( ${i} )'>Delete</button>
              <button><i class="fa-sharp fa-solid fa-cart-shopping"></i></button>
              </td>`
    }
    data += "</tr>"
    data += "</table>"
    document.getElementById("show").innerHTML = data;
}
let demo
function inputInfo() {
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let newProd = new Products(img, name, price);
    product.push(newProd);
    displayAllProduct();
}
function editProd(index) {
    document.getElementById("img").value = product[index].img
    document.getElementById("name").value = product[index].name
    document.getElementById("price").value = product[index].price
    demo = index
}

function editProd2() {
    product[demo].img = document.getElementById("img").value
    product[demo].name = document.getElementById("name").value
    product[demo].price = document.getElementById("price").value
    displayAllProduct()

}
function deleteProduct(index) {
    if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + product[index].name + " ?")) {
        product.splice(index, 1)
        displayAllProduct()
    }
}
function buyProduct(){

}
displayAllProduct(product);