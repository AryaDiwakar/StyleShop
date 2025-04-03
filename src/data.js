import bImage from "./b.jpeg";
import aImage from "./a.webp";
import cImage from "./c.webp";
import dImage from "./d.webp";
import eImage from "./e.webp";
import fImage from "./f.avif";
import gImage from "./g.jpg";
import hImage from "./h.jpeg";

import ddImage from "./dd.jpeg";
import aaImage from "./aa.webp";
import ccImage from "./cc.webp";
import bbImage from "./bb.webp";
    export const products = [
        {
            id: 1,
            name: "Classic White T-Shirt",
            category: "men",
            price: 29.99,
            oldPrice: 39.99,
            discount: "25%",
            image: bImage,  // Local image reference
            badge: "Sale",
            description: "A comfortable and versatile white t-shirt made from 100% organic cotton. Perfect for everyday wear.",
            rating: 4.5,
            reviewCount: 128,
            colors: ["white", "black", "navy", "gray"],
            sizes: ["XS", "S", "M", "L", "XL"],
            images: [
                aaImage,bbImage,ccImage,ddImage
            ]
        },
        {
            id: 2,
            name: "Slim Fit Jeans",
            category: "men",
            price: 59.99,
            oldPrice: null,
            discount: null,
            image: aImage,
            badge: "New",
            description: "Modern slim fit jeans with a comfortable stretch. Made with sustainable materials and processes.",
            rating: 4.2,
            reviewCount: 86,
            colors: ["blue", "black", "gray"],
            sizes: ["30", "32", "34", "36", "38"],
            images: [
                "https://via.placeholder.com/600x800/denim",
                "https://via.placeholder.com/600x800/darkdenim",
                "https://via.placeholder.com/600x800/lightdenim"
            ]
        },
        {
            id: 3,
            name: "Floral Summer Dress",
            category: "women",
            price: 49.99,
            oldPrice: 69.99,
            discount: "28%",
            image:cImage,
            badge: "Sale",
            description: "A beautiful floral summer dress perfect for warm days. Made from lightweight, breathable fabric.",
            rating: 4.8,
            reviewCount: 215,
            colors: ["pink", "blue", "yellow"],
            sizes: ["XS", "S", "M", "L"],
            images: [
                "https://via.placeholder.com/600x800/ffcccc",
                "https://via.placeholder.com/600x800/ccffcc",
                "https://via.placeholder.com/600x800/ccccff"
            ]
        },
        {
            id: 4,
            name: "Leather Crossbody Bag",
            category: "accessories",
            price: 79.99,
            oldPrice: 99.99,
            discount: "20%",
            image: dImage,
            badge: "Sale",
            description: "A stylish leather crossbody bag with multiple compartments. Perfect for everyday use.",
            rating: 4.6,
            reviewCount: 92,
            colors: ["tan", "black", "brown"],
            sizes: [],
            images: [
                "https://via.placeholder.com/600x800/tan",
                "https://via.placeholder.com/600x800/black",
                "https://via.placeholder.com/600x800/brown"
            ]
        },
        {
            id: 5,
            name: "Running Shoes",
            category: "footwear",
            price: 89.99,
            oldPrice: null,
            discount: null,
            image: fImage,
            badge: "New",
            description: "Lightweight and comfortable running shoes with excellent support and cushioning.",
            rating: 4.7,
            reviewCount: 156,
            colors: ["white", "black", "blue", "red"],
            sizes: ["7", "8", "9", "10", "11", "12"],
            images: [
                "https://via.placeholder.com/600x800/eeeeee",
                "https://via.placeholder.com/600x800/black",
                "https://via.placeholder.com/600x800/blue",
                "https://via.placeholder.com/600x800/red"
            ]
        },
        {
            id: 6,
            name: "Denim Jacket",
            category: "women",
            price: 69.99,
            oldPrice: null,
            discount: null,
            image: hImage,
            badge: null,
            description: "A classic denim jacket that never goes out of style. Perfect for layering in any season.",
            rating: 4.4,
            reviewCount: 78,
            colors: ["blue", "black", "light blue"],
            sizes: ["XS", "S", "M", "L", "XL"],
            images: [
                "https://via.placeholder.com/600x800/lightdenim",
                "https://via.placeholder.com/600x800/black",
                "https://via.placeholder.com/600x800/denim"
            ]
        },
        {
            id: 7,
            name: "Aviator Sunglasses",
            category: "accessories",
            price: 39.99,
            oldPrice: null,
            discount: null,
            image:eImage,
            badge: null,
            description: "Classic aviator sunglasses with UV protection. Stylish and functional for everyday wear.",
            rating: 4.3,
            reviewCount: 65,
            colors: ["gold", "silver", "black"],
            sizes: [],
            images: [
                "https://via.placeholder.com/600x800/gold",
                "https://via.placeholder.com/600x800/silver",
                "https://via.placeholder.com/600x800/black"
            ]
        },
        {
            id: 8,
            name: "Casual Sneakers",
            category: "footwear",
            price: 59.99,
            oldPrice: 79.99,
            discount: "25%",
            image: gImage,
            badge: "Sale",
            description: "Comfortable casual sneakers perfect for everyday wear. Versatile design that goes with everything.",
            rating: 4.5,
            reviewCount: 112,
            colors: ["white", "black", "gray", "navy"],
            sizes: ["7", "8", "9", "10", "11", "12"],
            images: [
                "https://via.placeholder.com/600x800/white",
                "https://via.placeholder.com/600x800/black",
                "https://via.placeholder.com/600x800/gray",
                "https://via.placeholder.com/600x800/navy"
            ]
        }
  ];
