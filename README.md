README - MyStore E-Commerce Website

This is a fully functional e-commerce website with home, products, and cart pages, featuring a responsive design with Tailwind CSS.
Features

    🛍️ Complete e-commerce functionality

    🖼️ Image slider on homepage

    🛒 Shopping cart with localStorage persistence

    📱 Responsive design for all devices

    🧩 Modular JavaScript architecture

    💳 Checkout process

    📋 Product categories

Project Structure

MyStore/
├── index.html          # Home page with featured products
├── Product.html        # All products page
├── Cart.html           # Shopping cart page
├── JS/
│   ├── product.js      # Product management functionality
│   ├── slider.js       # Homepage image slider
│   └── cart.js         # Shopping cart operations
└── Img/                # Product images directory

Getting Started

    Clone this repository:

bash

git clone https://github.com/yourusername/mystore.git

    Open any of the HTML files in your browser:

    index.html - Homepage

    Product.html - Products page

    Cart.html - Shopping cart

JavaScript Files
product.js

    Handles adding products to cart

    Stores cart items in localStorage

    Product structure: { id, name, price, image }

slider.js

    Controls the homepage image slider

    Automatic rotation every 5 seconds

    Manual navigation with arrow buttons

cart.js

    Loads and displays cart items

    Calculates total price

    Handles checkout process

    Clears cart after purchase

Customization

To add new products:

    Add HTML structure in index.html or Product.html

    Ensure each product has:

        Unique ID

        Proper class names for styling

        "Add to Cart" button with onclick="AddtoCart('productID')"

Dependencies

    Tailwind CSS - For responsive styling

    Modern Browser (Chrome, Firefox, Edge) with JavaScript enabled

Future Improvements

    User authentication system

    Product search functionality

    Payment gateway integration

    Order history tracking

    Product reviews and ratings
    
 License

    This project is open-source and available under the MIT License.
