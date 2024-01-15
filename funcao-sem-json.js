let name= "Felipe"
let age= 28
let products = ["mouse","teclado mecânico","Monitor"]
let productsValue = [29.90,129.90,899.99]
generateInvoice(name,age,products,productsValue)
function generateInvoice(name,age,products,productsValue){
    console.log("o comprador é: "+name)
    console.log("a idade do comprador é: "+age)
    console.log("--------------------")
    console.log("o produto é: "+products[0])
    console.log("o valor é: "+productsValue[0])
    console.log("--------------------")
    console.log("o produto é: "+products[1])
    console.log("o valor é: "+productsValue[1])
    console.log("--------------------")
    console.log("o produto é: "+products[2])
    console.log("o valor é: "+productsValue[2])
}