var sales = [{item: "apple", price: 1.00, quantity: 10}, 
             {item: "banana", price: 0.50, quantity: 20},
             {item: "cherry", price: 0.25, quantity: 30} ];

function calculateTotalSales(sales) {
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].price * sales[i].quantity;
    }
    return totalSales;
};

console.log("Total sales amount: $" + calculateTotalSales(sales));