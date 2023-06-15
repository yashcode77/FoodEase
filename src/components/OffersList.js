const offerList = [
    {
      "data": {
        "id": "1",
        "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426", 
        "offerHeading": "20% OFF UPTO ₹50", 
        "restaurantName": "KFC", 
        "rating": "3.9", 
        "cuisines": ["Burgers","Biryani"],
        "location": "Lower Parel",
      }
    },
    {
        "data": {
          "id": "2",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fboyciz8h4g1ij64xf6b", 
          "offerHeading": "60% OFF UPTO ₹120", 
          "restaurantName": "PVR Cafe", 
          "rating": "4", 
          "cuisines": ["Snacks","Fast Food","Beverages"],
          "location": "Saki Naka",
        }
    },
    {
        "data": {
          "id": "3",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/53f88d009d0528792249fb282ef2e17b", 
          "offerHeading": "30% OFF UPTO ₹75", 
          "restaurantName": "Dabba Garam", 
          "rating": "4.3", 
          "cuisines": ["North Indian","Homely meals"],
          "location": "Bandra East",
        }
    },
    {
        "data": {
          "id": "4",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee4f041cd8611dccc19f4267783ab5ea", 
          "offerHeading": "50% OFF UPTO ₹125", 
          "restaurantName": "EatFit", 
          "rating": "4.1", 
          "cuisines": ["Healthy food","Pizzas"],
          "location": "Vashi",
        }
    },
    {
        "data": {
          "id": "5",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf", 
          "offerHeading": "EVERY ITEM @ ₹129", 
          "restaurantName": "Burger King", 
          "rating": "4.2", 
          "cuisines": ["Burgers","American"],
          "location": "Seawoods West",
        }
    },
    {
        "data": {
          "id": "6",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sxkkygjqz7e8mad1qnvw", 
          "offerHeading": "40% OFF UPTO ₹80", 
          "restaurantName": "Domino's Pizza", 
          "rating": "3.6", 
          "cuisines": ["Pizzas","Italian"],
          "location": "Kurla West",
        }
    },
    {
        "data": {
          "id": "7",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0bf19a82b109b40c2f5c56d00f071a33", 
          "offerHeading": "40% OFF UPTO ₹80", 
          "restaurantName": "Subway", 
          "rating": "4", 
          "cuisines": ["Fast Food","Salads"],
          "location": "Ghatkopar East",
        }
    },
    {
        "data": {
          "id": "8",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/umgg4slp2glw7ewbnyxo", 
          "offerHeading": "₹175 OFF ABOVE ₹399", 
          "restaurantName": "Barbeque Nation", 
          "rating": "3.6", 
          "cuisines": ["North Indian","Barbeque"],
          "location": "Nerul",
        }
    },
    {
        "data": {
          "id": "9",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/160d3413471166793e2cab57c7322dc1", 
          "offerHeading": "50% OFF UPTO ₹100", 
          "restaurantName": "Bombay Sweet Shop", 
          "rating": "4.8", 
          "cuisines": ["Desserts"],
          "location": "Bandra East",
        }
    },
    {
        "data": {
          "id": "10",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pf3fw4qzazsu0dqngrry", 
          "offerHeading": "50% OFF UPTO ₹100", 
          "restaurantName": "La Pino'z Pizza", 
          "rating": "3.9", 
          "cuisines": ["Pizzas","Pastas"],
          "location": "Chembur",
        }
    },
    {
        "data": {
          "id": "11",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85c20ed30425350ac5ee96f10d5d1329", 
          "offerHeading": "₹125 OFF ABOVE ₹299", 
          "restaurantName": "Faasos Rolls", 
          "rating": "4.1", 
          "cuisines": ["Kebabs","Rolls"],
          "location": "Sanatcruz East",
        }
    },
    {
        "data": {
          "id": "12",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d461cb7eac503656a2b4bb13e7c60b97", 
          "offerHeading": "EVERY ITEM @ ₹159", 
          "restaurantName": "NIC Ice Creams", 
          "rating": "4.6", 
          "cuisines": ["Ice Cream","Desserts"],
          "location": "Ghatkopar",
        }
    },
    {
        "data": {
          "id": "13",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xu6gzhnn1xln7dsopxb1", 
          "offerHeading": "60% OFF UPTO ₹120", 
          "restaurantName": "Bakingo", 
          "rating": "4.3", 
          "cuisines": ["Bakery","Desserts"],
          "location": "Vashi",
        }
    },
    {
        "data": {
          "id": "14",
          "imageSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/12b09df9a17e77a05819f004e7381aec", 
          "offerHeading": "40% OFF UPTO ₹80", 
          "restaurantName": "Smoor", 
          "rating": "4.2", 
          "cuisines": ["Bakery","Desserts"],
          "location": "Kurla",
        }
    },
]

export default offerList;