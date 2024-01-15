let invoice = {
    name: "felipe",
    age: 28,
    products: {
        0: ["mouse ", 29.90],
        1: ["teclado mecânico", 129.90],
        2: ["Monitor", 899.90]
    }
}

generateInvoice(invoice);

function generateInvoice(invoice) {
    console.log(`O comprador é: ${invoice.name}`);
    console.log(`A idade é: ${invoice.age}`);
    
    for (let index in invoice.products) {
        let [ProductName, ProductPrice] = invoice.products[index]
        console.log(`produto: -${ProductName}: valor: R$ ${ProductPrice}`);
    }
} 

