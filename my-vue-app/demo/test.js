const product = ["mercedes", "audi", "ford", "lamborghini"];
const showProduct = product;
if(product.length === 0){
    console.log("không có sản phẩm để hiển thị");
} else {
    console.log(showProduct);
}
const addProduct = prompt("Nhập sản phẩm").split(",");
if (addProduct.find(el => el.length > 5)){
    addProduct.join('');    
    product.push(...addProduct) 
    console.log(showProduct);
} else {
    prompt("Nhập lại").split(",");
    }

const removeName = prompt("Nhập sản phẩm cần xóa")
if (removeName !== true){
    const removeProduct = product.filter(item => item !== removeName);
    console.log(removeProduct);
}else{
    console.log("Không tìm thấy sản phẩm")
}

const updateName = prompt("Nhập sản phẩm cần thay thế")
if (updateName !== true){
    const nameUpdate = prompt("Cập nhập sản phẩm");
    const updateProduct = product.fill(nameUpdate, 1 , 2);
    console.log(updateProduct);
}else{
    console.log("Không tìm thấy sản phẩm")
}

alert("Xóa toàn bộ phần tử trong mảng");
while(product.length > 0) {
    product.pop();
}
console.log(showProduct);





