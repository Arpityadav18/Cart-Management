var product = new Map();
product.set(1, "Laptop");
product.set(2, "Desktop");
product.set(3, "Mobile");
product.set(4, "TV");
product.set(5, "Cooler");
// Show All Product
console.log("Available Products :");
console.warn(product);
console.warn("Product Cooler is Deleted" + " " + product.delete(5)); // Remove Product
console.warn(product);
console.warn("Product TV is Deleted" + " " + product.delete(4)); // Remove Product
console.warn(product);
