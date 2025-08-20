//Sort products alphabetically from given array of objects



const products = [
  {
    id: 1,
    name: "StellarCharge Smartphone",
    category: "Electronics",
    price: 799.99,
    description: "A flagship smartphone with a stunning OLED display, 108MP camera, and all-day battery life.",
    imageURL: "https://example.com/images/stellar-smartphone.jpg",
    stock: 150,
    rating: 4.8
  },
  {
    id: 2,
    name: "AeroBook Pro Laptop",
    category: "Electronics",
    price: 1299.99,
    description: "A lightweight and powerful laptop designed for professionals on the go. Features the latest gen processor and 16GB RAM.",
    imageURL: "https://example.com/images/aerobook-pro.jpg",
    stock: 85,
    rating: 4.9
  },
  {
    id: 3,
    name: "SoundScape Wireless Headphones",
    category: "Electronics",
    price: 199.99,
    description: "Noise-cancelling over-ear headphones with superior sound quality and 30-hour battery life.",
    imageURL: "https://example.com/images/soundscape-headphones.jpg",
    stock: 220,
    rating: 4.7
  },
  {
    id: 4,
    name: "Classic Cotton T-Shirt",
    category: "Apparel",
    price: 24.99,
    description: "A soft, breathable, and durable 100% cotton t-shirt. Available in various colors.",
    imageURL: "https://example.com/images/cotton-tshirt.jpg",
    stock: 500,
    rating: 4.5
  },
  {
    id: 5,
    name: "UrbanFlex Denim Jeans",
    category: "Apparel",
    price: 89.99,
    description: "Slim-fit stretch denim jeans that offer both comfort and style for everyday wear.",
    imageURL: "https://example.com/images/urbanflex-jeans.jpg",
    stock: 300,
    rating: 4.6
  },
  {
    id: 6,
    name: "JavaGo Automatic Coffee Maker",
    category: "Home & Kitchen",
    price: 129.99,
    description: "12-cup programmable coffee maker with a built-in grinder and thermal carafe.",
    imageURL: "https://example.com/images/javago-coffeemaker.jpg",
    stock: 120,
    rating: 4.7
  },
  {
    id: 7,
    name: "The Midnight Library by Matt Haig",
    category: "Books",
    price: 15.99,
    description: "A captivating novel about life, death, and the choices we make.",
    imageURL: "https://example.com/images/midnight-library-book.jpg",
    stock: 450,
    rating: 4.8
  },
  {
    id: 8,
    name: "ChronoFit Smartwatch",
    category: "Electronics",
    price: 249.99,
    description: "A sleek smartwatch with fitness tracking, heart rate monitoring, and GPS.",
    imageURL: "https://example.com/images/chronofit-smartwatch.jpg",
    stock: 180,
    rating: 4.6
  },
  {
    id: 9,
    name: "Velocity Running Sneakers",
    category: "Apparel",
    price: 129.99,
    description: "Lightweight running shoes with advanced cushioning for maximum performance.",
    imageURL: "https://example.com/images/velocity-sneakers.jpg",
    stock: 250,
    rating: 4.7
  },
  {
    id: 10,
    name: "PowerBlend Pro Blender",
    category: "Home & Kitchen",
    price: 99.99,
    description: "High-speed blender perfect for smoothies, soups, and sauces with a 1200W motor.",
    imageURL: "https://example.com/images/powerblend-pro.jpg",
    stock: 95,
    rating: 4.8
  },
  {
    id: 11,
    name: "Atomic Habits by James Clear",
    category: "Books",
    price: 18.50,
    description: "An easy and proven way to build good habits and break bad ones.",
    imageURL: "https://example.com/images/atomic-habits-book.jpg",
    stock: 600,
    rating: 4.9
  },
  {
    id: 12,
    name: "QuantumPad Tablet",
    category: "Electronics",
    price: 459.99,
    description: "A versatile 11-inch tablet with a high-resolution display, perfect for work and entertainment.",
    imageURL: "https://example.com/images/quantumpad-tablet.jpg",
    stock: 110,
    rating: 4.7
  },
  {
    id: 13,
    name: "EverWarm Winter Jacket",
    category: "Apparel",
    price: 179.99,
    description: "A waterproof and insulated jacket designed to keep you warm in the coldest conditions.",
    imageURL: "https://example.com/images/everwarm-jacket.jpg",
    stock: 140,
    rating: 4.8
  },
  {
    id: 14,
    name: "Crispify Air Fryer",
    category: "Home & Kitchen",
    price: 119.99,
    description: "A 5.8-quart air fryer that lets you cook your favorite foods with little to no oil.",
    imageURL: "https://example.com/images/crispify-airfryer.jpg",
    stock: 160,
    rating: 4.7
  },
  {
    id: 15,
    name: "Dune by Frank Herbert",
    category: "Books",
    price: 14.99,
    description: "The classic science fiction epic set on the desert planet Arrakis.",
    imageURL: "https://example.com/images/dune-book.jpg",
    stock: 320,
    rating: 4.9
  },
  {
    id: 16,
    name: "AuraGlow Smart Lamp",
    category: "Home & Kitchen",
    price: 59.99,
    description: "A Wi-Fi enabled smart lamp with customizable colors and voice control compatibility.",
    imageURL: "https://example.com/images/auraglow-lamp.jpg",
    stock: 200,
    rating: 4.6
  },
  {
    id: 17,
    name: "ComfyCloud Hoodie",
    category: "Apparel",
    price: 64.99,
    description: "An ultra-soft fleece hoodie that provides ultimate comfort and warmth.",
    imageURL: "https://example.com/images/comfycloud-hoodie.jpg",
    stock: 350,
    rating: 4.8
  },
  {
    id: 18,
    name: "StreamDeck Gaming Keyboard",
    category: "Electronics",
    price: 149.99,
    description: "A mechanical gaming keyboard with customizable RGB lighting and programmable macro keys.",
    imageURL: "https://example.com/images/streamdeck-keyboard.jpg",
    stock: 90,
    rating: 4.8
  },
  {
    id: 19,
    name: "Gourmet Chef Cookware Set",
    category: "Home & Kitchen",
    price: 299.99,
    description: "A 10-piece non-stick ceramic cookware set, durable and easy to clean.",
    imageURL: "https://example.com/images/gourmet-cookware.jpg",
    stock: 75,
    rating: 4.9
  },
  {
    id: 20,
    name: "Project Hail Mary by Andy Weir",
    category: "Books",
    price: 22.00,
    description: "A thrilling science fiction adventure from the author of 'The Martian'.",
    imageURL: "https://example.com/images/project-hail-mary-book.jpg",
    stock: 280,
    rating: 4.9
  }
];


const electronics = products.filter(products => products.name )
//.sort((a, b) => a.name.localeCompare(b.name));

.sort((a,b) => (a.name).localeCompare(b.name))

 console.log(electronics)








