export const menuCategories = [
  "Starters",
  "Mains",
  "Desserts",
  "Drinks",
  "Chef's Specials"
];

export const menuData = {
  Starters: [
    {
      id: 1,
      name: "Charred Octopus",
      price: 24,
      description: "Spanish octopus, smoked paprika, fingerling potatoes, salsa verde.",
      image: "https://images.unsplash.com/photo-1599321955419-78439751121d?auto=format&fit=crop&q=80&w=800",
      badge: "Chef's Pick ⭐",
      ingredients: ["Octopus", "Smoked Paprika", "Potatoes", "Salsa Verde"],
      allergens: ["Seafood"]
    },
    {
      id: 2,
      name: "Burrata & Heirloom Tomato",
      price: 18,
      description: "Creamy burrata, heirloom tomatoes, aged balsamic, basil oil.",
      image: "https://images.unsplash.com/photo-1594627021414-3c240497e05d?auto=format&fit=crop&q=80&w=800",
      badge: "Fresh",
      ingredients: ["Burrata", "Tomatoes", "Balsamic", "Basil"],
      allergens: ["Dairy"]
    },
    {
      id: 3,
      name: "Bone Marrow Toast",
      price: 22,
      description: "Roasted bone marrow, sourdough, pickled shallots, herb salad.",
      image: "https://images.unsplash.com/photo-1616422285623-13ff0167c95c?auto=format&fit=crop&q=80&w=800",
      badge: "Rich",
      ingredients: ["Bone Marrow", "Sourdough", "Shallots", "Herbs"],
      allergens: ["Gluten"]
    }
  ],
  Mains: [
    {
      id: 4,
      name: "Wood-Fired Ribeye",
      price: 58,
      description: "45-day dry-aged beef, smoked salt, marrow butter, charred leeks.",
      image: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=800",
      badge: "Signature",
      ingredients: ["Ribeye", "Smoked Salt", "Marrow Butter", "Leeks"],
      allergens: ["Dairy"]
    },
    {
      id: 5,
      name: "Pan-Seared Sea Bass",
      price: 42,
      description: "Chilean sea bass, saffron risotto, asparagus, lemon foam.",
      image: "https://images.unsplash.com/photo-1534604973900-c41ab4c5d636?auto=format&fit=crop&q=80&w=800",
      badge: "Light",
      ingredients: ["Sea Bass", "Saffron", "Rice", "Asparagus"],
      allergens: ["Seafood", "Dairy"]
    },
    {
      id: 6,
      name: "Truffle Mushroom Pasta",
      price: 34,
      description: "Handmade pappardelle, wild mushrooms, black truffle, parmesan.",
      image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800",
      badge: "Vegetarian",
      ingredients: ["Pappardelle", "Mushrooms", "Truffle", "Parmesan"],
      allergens: ["Gluten", "Dairy", "Egg"]
    }
  ],
  Desserts: [
    {
      id: 7,
      name: "Smoked Chocolate Tart",
      price: 16,
      description: "Dark chocolate, smoked sea salt, bourbon caramel, vanilla bean ice cream.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800",
      badge: "Decadent",
      ingredients: ["Chocolate", "Sea Salt", "Caramel", "Ice Cream"],
      allergens: ["Dairy", "Gluten"]
    },
    {
      id: 8,
      name: "Deconstructed Lemon Meringue",
      price: 14,
      description: "Lemon curd, toasted meringue, graham cracker crumble, mint.",
      image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800",
      badge: "Zesty",
      ingredients: ["Lemon", "Meringue", "Graham Cracker", "Mint"],
      allergens: ["Dairy", "Gluten", "Egg"]
    }
  ],
  Drinks: [
    {
      id: 9,
      name: "Ember Old Fashioned",
      price: 18,
      description: "Smoked bourbon, orange bitters, maple syrup, cedar smoke.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
      badge: "Smoky 🥃",
      ingredients: ["Bourbon", "Bitters", "Maple", "Cedar"],
      allergens: []
    },
    {
      id: 10,
      name: "Salt & Spice Margarita",
      price: 16,
      description: "Tequila, lime, agave, jalapeño infusion, black lava salt rim.",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=800",
      badge: "Spicy 🌶️",
      ingredients: ["Tequila", "Lime", "Jalapeño", "Salt"],
      allergens: []
    }
  ],
  "Chef's Specials": [
    {
      id: 11,
      name: "Golden Tomahawk Steak",
      price: 145,
      description: "32oz Tomahawk, 24k edible gold leaf, roasted bone marrow, truffle fries.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
      badge: "Limited Edition ✨",
      ingredients: ["Beef", "Gold Leaf", "Bone Marrow", "Truffle"],
      allergens: ["Dairy"]
    }
  ]
};

export const stats = [
  { label: "Years of Excellence", value: 12, suffix: "" },
  { label: "Dishes Crafted", value: 200, suffix: "+" },
  { label: "Happy Guests", value: 98, suffix: "%" },
  { label: "Michelin Stars", value: 5, suffix: "" }
];

export const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    role: "Food Critic",
    quote: "The wood-fired ribeye is quite literally the best steak I've had in a decade. The smoky depth is unparalleled.",
    stars: 5
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "Travel Blogger",
    quote: "An atmosphere that feels both intimate and grand. The service at Ember & Salt is just as impressive as the menu.",
    stars: 5
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Chef",
    quote: "Technique and passion are evident in every plate. A true masterclass in modern bistro dining.",
    stars: 5
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Local Regular",
    quote: "Ember & Salt has become our go-to for every celebration. They never fail to exceed our expectations.",
    stars: 5
  }
];

export const team = [
  {
    id: 1,
    name: "Julian Valez",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1577214495773-55739cfbe46c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Michael Ross",
    role: "Sommelier",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Amara Okafor",
    role: "Sous Chef",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800"
  }
];

export const timeline = [
  { year: "2012", title: "The First Spark", description: "Julian Valez opens the original 12-seat Ember & Salt in a quiet alley." },
  { year: "2015", title: "First Star", description: "The Michelin Guide awards us our first star for 'exceptional wood-fired cuisine'." },
  { year: "2018", title: "Global Recognition", description: "Named Top 50 Best Restaurants in the World." },
  { year: "2021", title: "The Expansion", description: "Moved to our current flagship location with a state-of-the-art open kitchen." },
  { year: "2024", title: "5th Michelin Star", description: "Achieving the ultimate culinary milestone." }
];
