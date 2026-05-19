export const navLinks = [
  "home",
  "products",
  "about_us",
  "reviews",
  "contact",
];

export const restaurant = {
  name: "Ramen House Cavite",
  phone_number: "+63 962 8871296",
  email: "ramenhouse@gmail.com",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  gmap:
    "https://www.google.com/maps?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA",
  messenger: "https://m.me/captain.jhuvs",
  facebook: "https://facebook.com/captain.jhuvs",
  instagram: "https://instagram.com/jhuvel_",
};

export const products = [
  // RAMEN - Shoyu
  {
    name: "Shoyu Ramen",
    price: "198.00",
    description:
      "Soy sauce based clear broth with chashu pork, noodles, and vegetables.",
    tags: ["ramen", "shoyu", "pork"],
    category: "Main",
    subCategory: "Ramen",
    badge: "All Time Favorite",
    image: "/images/products/ramen.png",
    available: true,
  },
  {
    name: "Tonkotsu Ramen",
    price: "235.00",
    description:
      "Pork bone broth ramen with ground pork, chashu, kikurage mushroom, and vegetables.",
    tags: ["ramen", "tonkotsu", "pork"],
    category: "Main",
    subCategory: "Ramen",
    badge: "Best Seller",
    image: "/images/products/seafoodRamen.png",
    available: true,
  },
  {
    name: "Aka Ramen",
    price: "235.00",
    description:
      "Spicy pork bone broth ramen with pork bones, ground pork, vegetables, and garlic oil.",
    tags: ["ramen", "spicy", "pork"],
    category: "Main",
    subCategory: "Ramen",
    badge: "Best Seller",
    image: "/images/products/spicyRamen.png",
    available: true,
  },
  {
    name: "Kuro Ramen",
    price: "235.00",
    description:
      "Pork bone broth ramen with black garlic oil, chashu pork, kikurage mushroom, and vegetables.",
    tags: ["ramen", "black garlic", "pork"],
    category: "Main",
    subCategory: "Ramen",
    badge: null,
    image: "/images/products/ramen.png",
    available: true,
  },
  {
    name: "Miso Ramen",
    price: "305.00",
    description:
      "Miso flavored ramen with chashu pork, sweet corn, tamago, naruto, and pork chashu.",
    tags: ["ramen", "miso", "corn"],
    category: "Main",
    subCategory: "Ramen",
    badge: "All Time Favorite",
    image: "/images/products/ramen.png",
    available: true,
  },
  {
    name: "Spicy Miso Ramen",
    price: "245.00",
    description:
      "Spicy miso ramen with chashu pork, sweet corn, tamago, naruto, and vegetables.",
    tags: ["ramen", "spicy", "miso"],
    category: "Main",
    subCategory: "Ramen",
    badge: "Best Seller",
    image: "/images/products/spicyRamen.png",
    available: true,
  },
  {
    name: "Tantanmen",
    price: "405.00",
    description:
      "Sesame paste ramen with ground pork, tamago, and vegetables.",
    tags: ["ramen", "sesame", "pork"],
    category: "Main",
    subCategory: "Ramen",
    badge: null,
    image: "/images/products/ramen.png",
    available: true,
  },
  {
    name: "Hannibal",
    price: "245.00",
    description:
      "Pork bone broth ramen with black kikurage, tamago, pork chashu, and garlic oil.",
    tags: ["ramen", "garlic", "pork"],
    category: "Main",
    subCategory: "Ramen",
    badge: null,
    image: "/images/products/ramen.png",
    available: true,
  },
  {
    name: "Bacon From Hell",
    price: "275.00",
    description:
      "Bacon chashu ramen with chili oil, chashu, leeks, tamago, moyashi, and chili.",
    tags: ["ramen", "bacon", "super spicy"],
    category: "Main",
    subCategory: "Ramen",
    badge: "Best Seller",
    image: "/images/products/spicyRamen.png",
    available: true,
  },

  // RAMEN - Tori
  {
    name: "Tori Tori",
    price: "265.00",
    description:
      "Chicken based creamy broth with chicken chashu, leeks, tamago, chili oil, and garlic oil.",
    tags: ["ramen", "chicken", "creamy"],
    category: "Main",
    subCategory: "Tori Ramen",
    badge: "All Time Favorite",
    image: "/images/products/seafoodRamen.png",
    available: true,
  },
  {
    name: "Tori Shiro",
    price: "265.00",
    description:
      "Chicken based creamy broth with chicken chashu, leeks, tamago, and garlic oil.",
    tags: ["ramen", "chicken", "garlic"],
    category: "Main",
    subCategory: "Tori Ramen",
    badge: null,
    image: "/images/products/seafoodRamen.png",
    available: true,
  },
  {
    name: "Tori Aka",
    price: "285.00",
    description:
      "Chicken based creamy broth with chicken chashu, leeks, tamago, and spicy chili oil.",
    tags: ["ramen", "spicy", "chicken"],
    category: "Main",
    subCategory: "Tori Ramen",
    badge: "Best Seller",
    image: "/images/products/spicyRamen.png",
    available: true,
  },
  {
    name: "Tori Kuro",
    price: "285.00",
    description:
      "Chicken based creamy broth with chicken chashu, leeks, tamago, black garlic oil, and chili.",
    tags: ["ramen", "garlic", "chicken"],
    category: "Main",
    subCategory: "Tori Ramen",
    badge: null,
    image: "/images/products/ramen.png",
    available: true,
  },

  // TSUKEMEN
  {
    name: "Tsukemen",
    price: "260.00",
    description:
      "Combination of fish and pork broth with chewy noodles and tamago.",
    tags: ["tsukemen", "fish", "pork"],
    category: "Main",
    subCategory: "Tsukemen Ramen",
    badge: "All Time Favorite",
    image: "/images/products/seafoodRamen.png",
    available: true,
  },
  {
    name: "Spicy Gyokai",
    price: "280.00",
    description:
      "Spicy gyokai tsukemen with fish and pork broth combination.",
    tags: ["tsukemen", "spicy", "gyokai"],
    category: "Main",
    subCategory: "Tsukemen Ramen",
    badge: "Best Seller",
    image: "/images/products/ramen.png",
    available: true,
  },

  // UDON
  {
    name: "Miku Udon",
    price: "230.00",
    description:
      "Thick udon noodles in sweet-savory soup topped with fried pork and vegetables.",
    tags: ["udon", "noodles", "pork"],
    category: "Main",
    subCategory: "Udon Ramen",
    badge: null,
    image: "/images/products/ramen.png",
    available: true,
  },

  // RICE MEALS
  {
    name: "Katsudon",
    price: "205.00",
    description:
      "Breaded pork cutlet served over rice with egg and savory sauce.",
    tags: ["rice", "pork", "cutlet"],
    category: "Main",
    subCategory: "Rice Meal",
    badge: "Best Seller",
    image: "/images/products/katsuCurry.png",
    available: true,
  },
  {
    name: "Beef Misono",
    price: "305.00",
    description:
      "Tender thinly sliced beef sautéed with onions and served with rice.",
    tags: ["rice", "beef", "savory"],
    category: "Main",
    subCategory: "Rice Meal",
    badge: "All Time Favorite",
    image: "/images/products/katsuCurry.png",
    available: true,
  },

  // SIDES
  {
    name: "Gyoza (3 pcs)",
    price: "95.00",
    description:
      "Japanese dumplings filled with seasoned meat and vegetables.",
    tags: ["gyoza", "dumplings", "side"],
    category: "Sides",
    subCategory: "Fried",
    badge: "Best Seller",
    image: "/images/products/takoyaki.png",
    available: true,
  },
  {
    name: "Karaage",
    price: "145.00",
    description:
      "Japanese fried chicken with crispy golden coating.",
    tags: ["fried chicken", "karaage", "side"],
    category: "Sides",
    subCategory: "Fried",
    badge: "All Time Favorite",
    image: "/images/products/takoyaki.png",
    available: true,
  },
  {
    name: "Fried Gyoza (8 pcs)",
    price: "140.00",
    description:
      "Crispy pan-fried gyoza served with dipping sauce.",
    tags: ["gyoza", "fried", "snack"],
    category: "Sides",
    subCategory: "Fried",
    badge: null,
    image: "/images/products/takoyaki.png",
    available: true,
  },
  {
    name: "Chahan (Fried Rice)",
    price: "99.00",
    description:
      "Japanese fried rice with vegetables and savory seasonings.",
    tags: ["fried rice", "rice", "side"],
    category: "Sides",
    subCategory: "Rice",
    badge: null,
    image: "/images/products/sushi.png",
    available: true,
  },

  // DRINKS
  {
    name: "Red Iced Tea",
    price: "58.00",
    description: "Sweet and refreshing iced tea.",
    tags: ["drink", "tea", "iced"],
    category: "Drinks",
    subCategory: "Beverage",
    badge: "Best Seller",
    image: "/images/products/ramen.png",
    available: true,
  },

  // ADD ONS
  {
    name: "Ajitsuke Tamago",
    price: "35.00",
    description: "Seasoned soft-boiled ramen egg.",
    tags: ["addon", "egg"],
    category: "Add Ons",
    subCategory: "Toppings",
    badge: "Best Seller",
    image: "/images/products/ramen.png",
    available: true,
  },
];

export const reviews = [
  {
    author: "Jhuvel",
    text:
      "The broth was rich and flavorful, with just the right kick of spice. Definitely my go-to comfort food spot!",
    image: "/images/profiles/profile_1.png",
    priority: true,
    bgColor: "bg-blue-400/90",
    profileColor: "bg-orange-500",
    rating: 5,
  },
  {
    author: "Aya",
    text:
      "I loved the seafood ramen! Fresh ingredients and the umami taste really stood out. Highly recommended.",
    image: "/images/profiles/profile_2.png",
    priority: true,
    bgColor: "bg-green-400/90",
    profileColor: "bg-red-500",
    rating: 4,
  },
  {
    author: "Kenji",
    text:
      "The vegetarian ramen surprised me — light yet satisfying. Perfect balance of tofu and greens.",
    image: "/images/profiles/profile_3.png",
    priority: false,
    bgColor: "bg-purple-400/90",
    profileColor: "bg-yellow-500",
    rating: 4,
  },
  {
    author: "Maria",
    text:
      "Takoyaki was crispy outside and soft inside, just like in Osaka. Loved the bonito flakes topping!",
    image: "/images/profiles/profile_4.png",
    priority: false,
    bgColor: "bg-orange-400/90",
    profileColor: "bg-blue-500",
    rating: 5,
  },
  {
    author: "David",
    text:
      "Katsu curry was hearty and filling. The pork cutlet was perfectly breaded and the curry sauce was rich.",
    image: "/images/profiles/profile_5.png",
    priority: false,
    bgColor: "bg-teal-400/90",
    profileColor: "bg-purple-500",
    rating: 5,
  },
];