var orders = [{item: "apple", price: 1.00, quantity: 10}, 
              {item: "banana", price: 0.50, quantity: 20},
              {item: "cherry", price: 0.25, quantity: 30} ];

function generateOrderReceipt(orders) {
    let grandTotal = 0;
    console.log("Order Receipt");
    console.log("--------------------------------");
    for (let i=0; i<orders.length; i++) {
        let itemTotal = orders[i].price * orders[i].quantity;
        grandTotal += itemTotal;
        console.log(`${orders[i].item} - $${orders[i].price.toFixed(2)} x ${orders[i].quantity} = $${itemTotal.toFixed(2)}`);
    }
    console.log("--------------------------------");
    console.log(`Grand Total: $${grandTotal.toFixed(2)}`);
    console.log("--------------------------------");
}

generateOrderReceipt(orders);