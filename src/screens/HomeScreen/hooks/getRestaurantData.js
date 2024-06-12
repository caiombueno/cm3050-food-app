import { useState, useEffect } from 'react';

export const getRestaurantData = () => {
    [restaurantsData, setRestaurantsData] = useState([]);
    [loading, setLoading] = useState(true);
    [error, setError] = useState(null);


    // simulate a network request
    useEffect(() => {
        try {

            setTimeout(() => {

                setRestaurantsData([
                    {
                        title: "Joe's Gelato",
                        tagline: "Desert, Ice cream, £££",
                        eta: "10-30",
                        imgUri: require('../../../assets/images/restaurants/restaurant-1.jpg'),
                        menuItems: [
                            {
                                title: "Gelato",
                                contents: [
                                    { title: "Vanilla" },
                                    { title: "Chocolate" },
                                    { title: "Mint" }
                                ]
                            },
                            {
                                title: "Coffee",
                                contents: [
                                    { title: "Flat white" },
                                    { title: "Latte" },
                                    { title: "Caffè Americano" }
                                ]
                            }
                        ],
                    },
                    {
                        title: "Mama's Pizzeria",
                        tagline: "Pizza, Italian, ££",
                        eta: "15-25",
                        imgUri: require('../../../assets/images/restaurants/restaurant-2.jpg'),
                        menuItems: [
                            {
                                title: "Pizzas",
                                contents: [
                                    { title: "Margherita" },
                                    { title: "Pepperoni" },
                                    { title: "Four Cheese" }
                                ]
                            },
                            {
                                title: "Pasta",
                                contents: [
                                    { title: "Spaghetti Carbonara" },
                                    { title: "Lasagna" },
                                    { title: "Penne Arrabiata" }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Sushi World",
                        tagline: "Japanese, Sushi, £££",
                        eta: "20-35",
                        imgUri: require('../../../assets/images/restaurants/restaurant-3.jpg'),
                        menuItems: [
                            {
                                title: "Sushi Rolls",
                                contents: [
                                    { title: "California Roll" },
                                    { title: "Spicy Tuna Roll" },
                                    { title: "Dragon Roll" }
                                ]
                            },
                            {
                                title: "Sashimi",
                                contents: [
                                    { title: "Salmon Sashimi" },
                                    { title: "Tuna Sashimi" },
                                    { title: "Yellowtail Sashimi" }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Taco Fiesta",
                        tagline: "Mexican, Tacos, £",
                        eta: "10-20",
                        imgUri: require('../../../assets/images/restaurants/restaurant-4.jpg'),
                        menuItems: [
                            {
                                title: "Tacos",
                                contents: [
                                    { title: "Chicken Taco" },
                                    { title: "Beef Taco" },
                                    { title: "Veggie Taco" }
                                ]
                            },
                            {
                                title: "Beverages",
                                contents: [
                                    { title: "Horchata" },
                                    { title: "Margarita" },
                                    { title: "Mexican Coke" }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Burger Heaven",
                        tagline: "Burgers, American, ££",
                        eta: "25-40",
                        imgUri: require('../../../assets/images/restaurants/restaurant-5.jpg'),
                        menuItems: [
                            {
                                title: "Burgers",
                                contents: [
                                    { title: "Cheeseburger" },
                                    { title: "Bacon Burger" },
                                    { title: "Veggie Burger" }
                                ]
                            },
                            {
                                title: "Sides",
                                contents: [
                                    { title: "Fries" },
                                    { title: "Onion Rings" },
                                    { title: "Coleslaw" }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Curry Palace",
                        tagline: "Indian, Curry, £££",
                        eta: "30-45",
                        imgUri: require('../../../assets/images/restaurants/restaurant-6.jpg'),
                        menuItems: [
                            {
                                title: "Curries",
                                contents: [
                                    { title: "Chicken Tikka Masala" },
                                    { title: "Lamb Vindaloo" },
                                    { title: "Paneer Butter Masala" }
                                ]
                            },
                            {
                                title: "Breads",
                                contents: [
                                    { title: "Naan" },
                                    { title: "Garlic Naan" },
                                    { title: "Roti" }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Green Bowl",
                        tagline: "Salads, Healthy, ££",
                        eta: "15-20",
                        imgUri: require('../../../assets/images/restaurants/restaurant-7.jpg'),
                        menuItems: [
                            {
                                title: "Salads",
                                contents: [
                                    { title: "Caesar Salad" },
                                    { title: "Greek Salad" },
                                    { title: "Cobb Salad" }
                                ]
                            },
                            {
                                title: "Smoothies",
                                contents: [
                                    { title: "Berry Blast" },
                                    { title: "Green Detox" },
                                    { title: "Mango Tango" }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Noodle House",
                        tagline: "Chinese, Noodles, ££",
                        eta: "20-30",
                        imgUri: require('../../../assets/images/restaurants/restaurant-8.jpg'),
                        menuItems: [
                            {
                                title: "Noodles",
                                contents: [
                                    { title: "Chow Mein" },
                                    { title: "Lo Mein" },
                                    { title: "Singapore Noodles" }
                                ]
                            },
                            {
                                title: "Dumplings",
                                contents: [
                                    { title: "Pork Dumplings" },
                                    { title: "Chicken Dumplings" },
                                    { title: "Veggie Dumplings" }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Steak Factory",
                        tagline: "Steak, American, £££",
                        eta: "40-60",
                        imgUri: require('../../../assets/images/restaurants/restaurant-9.jpg'),
                        menuItems: [
                            {
                                title: "Steaks",
                                contents: [
                                    { title: "Ribeye" },
                                    { title: "T-bone" },
                                    { title: "Filet Mignon" }
                                ]
                            },
                            {
                                title: "Sides",
                                contents: [
                                    { title: "Mashed Potatoes" },
                                    { title: "Grilled Asparagus" },
                                    { title: "Baked Potato" }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Vegan Delight",
                        tagline: "Vegan, Organic, ££",
                        eta: "15-25",
                        imgUri: require('../../../assets/images/restaurants/restaurant-10.jpg'),
                        menuItems: [
                            {
                                title: "Bowls",
                                contents: [
                                    { title: "Quinoa Bowl" },
                                    { title: "Tofu Bowl" },
                                    { title: "Chickpea Bowl" }
                                ]
                            },
                            {
                                title: "Drinks",
                                contents: [
                                    { title: "Kombucha" },
                                    { title: "Fresh Juice" },
                                    { title: "Herbal Tea" }
                                ]
                            }
                        ]
                    },

                ]);
                setLoading(false);
            }, 3000);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, []);



    return { restaurantsData, loading, error };
};


