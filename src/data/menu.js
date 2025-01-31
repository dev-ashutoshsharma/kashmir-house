const menu = [
  {
    category: "Entrées Tandoori / Starters",
    description:
      "Des entrées tandoori savoureuses, grillées à la perfection, pour bien commencer votre repas.",
    items: [
      {
        name: "Seekh kabab",
        description: "Agneau haché, coriandre et épices",
        price: 8.50,
      },
      {
        name: "Bara kabab",
        description: "Jarret d'agneau mariné aux épices variées",
        price: 11.50,
      },
      {
        name: "Shahi poulet kebab",
        description: "Poulet haché, coriandre et épices",
        price: 7.50,
      },
      {
        name: "Samosa sabzi",
        description: "Beignets de légumes peu épicés",
        price: 4.50,
      },
      {
        name: "Shahi tangri kebab",
        description: "Pilon de poulet grillé aux épices",
        price: 7.50,
      },
      {
        name: "Samosa viande",
        description: "Beignets d'agneau peu épicé",
        price: 5.00,
      },
      {
        name: "Shahi malai tikka",
        description:
          "Morceaux de poulet marinés dans un mélange à base de crème épicée",
        price: 8.50,
      },
      {
        name: "Shahi Hariyali kebab",
        description:
          "Poulet, feuilles de menthe et de coriandre, garam masala",
        price: 7.50,
      },
      {
        name: "Gambas tandoori",
        description: "Gambas macérées dans des épices cuit au tandoor",
        price: 18.50,
      },
      {
        name: "Poulet tandoori",
        description: "Cuisse de poulet aux épices cuit au tandoor",
        price: 6.50,
      },
      {
        name: "Poulet tikka",
        description: "Poulet désossé mariné cuit au charbon",
        price: 8.50,
      },
      {
        name: "Agneau tikka",
        description: "Gigot d'agneau désossé mariné grillé au charbon",
        price: 9.50,
      },
      {
        name: "Fish tikka",
        description: "Poisson grillé en morceaux",
        price: 9.50,
      },
      {
        name: "Pakora aubergine",
        description: "Beignets d'aubergine, farine de pois chiche",
        price: 4.50,
      },
      {
        name: "Aloo pakora",
        description: "Beignets de pommes de terre farine pois chiche",
        price: 4.50,
      },
      {
        name: "Raita",
        description: "Concombre légèrement épicé, yaourt",
        price: 4.50,
      },
      {
        name: "Oignon bajha",
        description:
          "Lamelles d'oignon marinées, farine de pois chiche puis frites",
        price: 5.00,
      },
      {
        name: "Mix grill shahi",
        description: "Cocktail grill, chef spécial pour 2 personnes",
        price: 19.50,
      },
      {
        name: "Mix vég. shahi",
        description: "Cocktail d'entrées végétarien pour 2 personnes",
        price: 15.50,
      },
    ],
  },

  {
    category: "Plats / Main Course",
    description:
      "Des plats principaux traditionnels, des curry savoureux, parfaits pour satisfaire votre appétit.",
  },

  {
    category: "Poulet",
    description:
      "Découvrez nos plats de poulet aux saveurs riches, cuisinés avec des épices authentiques.",
    items: [
      {
        name: "Poulet Curry",
        description: "Curry traditionnel",
        price: 10.00,
      },
      {
        name: "Poulet shahi korma",
        description: "Poulet aux noix de cajou et crème fraiche",
        price: 11.50,
      },
      {
        name: "Poulet Palak",
        description: "Poulet aux épinards hachés",
        price: 11.50,
      },
      {
        name: "Poulet Vindaloo",
        description: "Poulet relevé aux pommes de terre",
        price: 11.50,
      },
      {
        name: "Butter Chicken",
        description: "Poulet grillé au tandoor puis cuisiné au beurre",
        price: 13.00,
      },
      {
        name: "Poulet Masala",
        description: "Épice aux tomates et oignons",
        price: 10.50,
      },
      {
        name: "Poulet Tikka Masala",
        description: "Poulet grillé cuit au tandoor, sauce masala",
        price: 13.50,
      },
    ],
  },

  {
    category: "Agneau",
    description:
      "Nos plats d'agneau sont cuisinés avec des épices traditionnelles, offrant une saveur riche et profonde.",
    items: [
      {
        name: "Agneau Roglian Gosht",
        description: "Curry traditionnel légèrement épicé",
        price: 13.50,
      },
      {
        name: "Agneau shahi korma",
        description: "Curry aux amandes, noix de cajou et crème fraiche",
        price: 14.50,
      },
      {
        name: "Agneau Palak",
        description: "Curry aux épinards hachés",
        price: 13.50,
      },
      {
        name: "Agneau Vindaloo",
        description: "Curry aux pommes de terre",
        price: 13.50,
      },
      {
        name: "Agneau Punjabi",
        description: "Curry type Punjabi très épicé",
        price: 13.50,
      },
      {
        name: "Agneau Matar Keema",
        description: "Agneau haché, petit pois, sauce curry",
        price: 13.00,
      },
      {
        name: "Agneau Tikka Masala",
        description: "Agneau grillé cuit au tandoor, sauce masala",
        price: 14.50,
      },
    ],
  },

  {
    category: "Poisson / Fish",
    description: "Des plats à base de poisson, cuisinés dans des sauces riches et parfumées.",
    items: [
      {
        name: "Poisson Curry",
        description: "Curry traditionnel au poisson",
        price: 11.00,
      },
      {
        name: "Poisson Punjabi",
        description: "Poisson cuit au tandoor sauce punjabi",
        price: 11.50,
      },
      {
        name: "Crevettes au curry",
        description: "Curry traditionnel de crevettes",
        price: 10.00,
      },
      {
        name: "Crevettes shahi korma",
        description: "Crevettes aux noix de cajou et crème fraîche",
        price: 12.50,
      },
      {
        name: "Crevettes Masala",
        description: "Crevettes décortiquées, sauce relevée",
        price: 12.00,
      },
      {
        name: "Crevettes Madras",
        description: "Crevettes parfumées aux épices indiennes",
        price: 13.00,
      },
      {
        name: "Gambas Masala",
        description: "Gambas décortiquées marinées, cuites au tandoor",
        price: 20.50,
      },
      {
        name: "Gambas Kashmir",
        description: "Gambas marinées, noix de cajou et crème fraîche",
        price: 21.50,
      },
    ],
  },

  {
    category: "Curry de Légumes / Vegetables",
    description: "Des plats végétariens aux légumes frais, cuisinés dans des sauces savoureuses.",
    items: [
      {
        name: "Aloo Gobi",
        description: "Chou-fleur, pommes de terre au curry",
        price: 9.50,
      },
      {
        name: "Aloo Palak",
        description: "Pommes de terre et épinards hachés",
        price: 9.50,
      },
      {
        name: "Mix Sabzi",
        description: "Assortiment de légumes peu épicés",
        price: 9.50,
      },
      {
        name: "Palak Paneer",
        description: "Épinards hachés, fromage blanc",
        price: 9.50,
      },
      {
        name: "Mater Paneer",
        description: "Petits pois au fromage blanc",
        price: 9.50,
      },
      {
        name: "Bartha",
        description: "Aubergines hachées peu épicées",
        price: 9.50,
      },
      {
        name: "Dall",
        description: "Curry de lentilles peu épicé",
        price: 9.50,
      },
      {
        name: "Punjabi Aloo",
        description: "Curry de pommes de terre peu épicé",
        price: 9.50,
      },
    ],
  },

  {
    category: "Biryanis",
    description: "Des biryanis parfumés, mijotés avec du riz et des épices aromatiques.",
    items: [
      {
        name: "Biryani Agneau",
        description: "Agneau désossé mijoté avec riz",
        price: 16.50,
      },
      {
        name: "Biryani Poulet",
        description: "Poulet désossé mijoté avec riz",
        price: 14.50,
      },
      {
        name: "Biryani Légumes",
        description: "Légumes mix mijotés avec riz",
        price: 12.50,
      },
      {
        name: "Biryani Crevettes",
        description: "Crevettes décortiquées mijotées avec riz",
        price: 15.50,
      },
      {
        name: "Biryani du Shahi",
        description: "Mixte biryani mijoté par le Chef",
        price: 18.50,
      },
    ],
  },

  {
    category: "Pains / Bread",
    description: "Des pains frais et savoureux pour accompagner vos plats.",
    items: [
      {
        name: "Cheese Nann",
        description: "Pain au fromage à pâte blanche non levée",
        price: 4.20,
      },
      {
        name: "Nann",
        description: "Pain à pâte levée farine blanche",
        price: 2.00,
      },
      {
        name: "Garlic Nann",
        description: "Pain à l'ail pâte levée",
        price: 2.50,
      },
      {
        name: "Chapati",
        description: "Pain en pâte non levée",
        price: 1.50,
      },
      {
        name: "Paratha",
        description: "Pain beurré farine complète non levée",
        price: 2.00,
      },
      {
        name: "Shahi Paratha",
        description: "Pain fourré petits pois pommes de terre",
        price: 3.50,
      },
      {
        name: "Keema Nann",
        description: "Pain fourré d'agneau haché pâte levée",
        price: 4.50,
      },
      {
        name: "Nann Légumes",
        description: "Pain au mix légumes",
        price: 4.00,
      },
    ],
  },

  {
    category: "Riz Basmati / Rice",
    description: "Du riz basmati parfumé, idéal pour accompagner vos plats.",
    items: [
      {
        name: "Riz Safran",
        description: "Riz nature safrané",
        price: 3.50,
      },
      {
        name: "Riz Shahi",
        description: "Fruits secs, noix de cajou",
        price: 4.50,
      },
      {
        name: "Riz Pulao",
        description: "Riz Basmati aux petits pois",
        price: 4.00,
      },
    ],
  },

 {
    category: "Boissons Chaudes / Hot Drinks",
    description:
      "Savourez nos boissons chaudes, parfaites pour débuter ou conclure votre repas, ou tout simplement pour vous détendre.",
    items: [
      {
        name: "Café crème",
        description:
          "Un café riche et crémeux, idéal pour les amateurs de café fort avec une touche douce.",
        price: 2.20,
      },
      {
        name: "Darjeeling cardamome",
        description:
          "Un thé Darjeeling parfumé à la cardamome, offrant une expérience de saveurs exquises.",
        price: 3.00,
      },
      {
        name: "Thé menthe fraiche",
        description:
          "Un thé rafraîchissant à la menthe fraîche, parfait pour apaiser et revitaliser.",
        price: 3.00,
      },
      {
        name: "Thé Punjab préparé au lait",
        description:
          "Un thé épicé de la région du Punjab, préparé au lait pour une douceur et une richesse uniques.",
        price: 3.50,
      },
      {
        name: "Thé au jasmin",
        description:
          "Un thé délicat infusé avec des fleurs de jasmin pour une expérience florale et parfumée.",
        price: 3.00,
      },
      {
        name: "Café",
        description:
          "Un café classique, simple et énergisant, pour une expérience de café pur.",
        price: 3.00,
      },
    ],
  },

  {
    category: "Desserts",
    description:
      "Terminez votre repas avec nos desserts Réservation, une fusion de saveurs indiennes traditionnelles et modernes.",
    items: [
      {
        name: "Kulfi",
        description:
          "Glace indienne crémeuse au lait, garnie de noix de cajou et d'amandes grillées pour une touche croquante.",
        price: 5.50,
      },
      {
        name: "Halwa",
        description:
          "Un gâteau de semoule doux et parfumé, un classique indien fait Réservation.",
        price: 4.50,
      },
      {
        name: "Gulab Jamun",
        description:
          "De délicieux beignets au lait trempés dans un sirop de safran sucré, une douceur indienne par excellence.",
        price: 4.50,
      },
      {
        name: "Gajor Halwa",
        description:
          "Un gâteau de carottes épicé aux pistaches et amandes, une explosion de saveurs riches et sucrées.",
        price: 4.50,
      },
      {
        name: "Sorbets et glaces",
        description:
          "Sorbets et glaces faits Réservation dans une variété de saveurs : vanille, mangue, citron-vert, coco, passion, pistache, chocolat, rose, fraise.",
        price: 4.50,
      },
    ],
  },
];
export default menu;
export const specialMenu = [
    {
      name: "MENU ENFANT 12,00",
      description:
        "Poulet Tikka sans épices avec riz kashmir & Glace ou Halwa Gâteau de semoule/semolina cake",
      price: 12.00,
    },
]