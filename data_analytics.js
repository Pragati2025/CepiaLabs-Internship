//according to my understanding , we have been given 3 array data
//we have to find missing data and invalid refrence 
//array users-> issue is One user (id 4) has no name
//array product ->have 1 issue One product (id 3) has no name.
//array order-> have 1 issue One order (orderId 6) references an invalid user (userId = 9, not in users).
//what to find Compute using .reduce(): 1. Total revenue. 2. Total items sold. 3. Revenue by country. 4. Top spending user. 5. Most sold product. 6. Average order value.



// Given data
const users = [
  { id: 1, name: "Amit", country: "India", premium: true },
  { id: 2, name: "John", country: "USA", premium: false },
  { id: 3, name: "Riya", country: "India", premium: true },
  { id: 4, country: "Germany", premium: false }, // missing name
  { id: 5, name: "Neha", country: "India", premium: false },
];

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "E-book", category: "Digital", price: 15 },
  { id: 3, category: "Fashion", price: 200 }, // missing name
  { id: 4, name: "Headphones", category: "Electronics", price: 120 },
  { id: 5, name: "Course", category: "Digital", price: 50 },
];

const orders = [
  { orderId: 1, userId: 1, productId: 1, quantity: 2 },
  { orderId: 2, userId: 2, productId: 2, quantity: 1 },
  { orderId: 3, userId: 1, productId: 4, quantity: 3 },
  { orderId: 4, userId: 5, productId: 5, quantity: 4 },
  { orderId: 5, userId: 3, productId: 3, quantity: 2 },
  { orderId: 6, userId: 9, productId: 2, quantity: 1 }, // invalid user
];

//  Clean Data
const cleanUsers = users.map(u => ({ ...u, name: u.name || "Unknown" }));
const cleanProducts = products.map(p => ({ ...p, name: p.name || "Unknown" }));

const validOrders = orders.filter(order =>
  cleanUsers.some(u => u.id === order.userId) &&
  cleanProducts.some(p => p.id === order.productId)
);

//  Analytics using .reduce()
const analytics = validOrders.reduce(
  (acc, order) => {
    const user = cleanUsers.find(u => u.id === order.userId);
    const product = cleanProducts.find(p => p.id === order.productId);
    const revenue = product.price * order.quantity;

    acc.totalRevenue += revenue;
    acc.totalItemsSold += order.quantity;

    acc.revenueByCountry[user.country] =
      (acc.revenueByCountry[user.country] || 0) + revenue;

    acc.userSpending[user.name] =
      (acc.userSpending[user.name] || 0) + revenue;

    acc.productSales[product.name] =
      (acc.productSales[product.name] || 0) + order.quantity;

    return acc;
  },
  {
    totalRevenue: 0,
    totalItemsSold: 0,
    revenueByCountry: {},
    userSpending: {},
    productSales: {},
  }
);

// Additional Results
const topUser = Object.entries(analytics.userSpending).sort((a, b) => b[1] - a[1])[0];
const topProduct = Object.entries(analytics.productSales).sort((a, b) => b[1] - a[1])[0];
const avgOrderValue = analytics.totalRevenue / validOrders.length;

//  Add GST using .map()
const productsWithGST = cleanProducts.map(p => ({
  name: p.name,
  category: p.category,
  priceWithGST: +(p.price * 1.1).toFixed(2),
}));

// 5 Print Results
console.log("Total Revenue:", analytics.totalRevenue);
console.log("Total Items Sold:", analytics.totalItemsSold);
console.log("Revenue by Country:", analytics.revenueByCountry);
console.log(" Top Spending User:", topUser);
console.log(" Most Sold Product:", topProduct);
console.log(" Average Order Value:", avgOrderValue.toFixed(2));
console.log(" Products with GST:", productsWithGST);
