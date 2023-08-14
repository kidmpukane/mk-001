const productsAPI = [
  {
    id: 1,
    store_owner: "Givenchy",
    store_profile_picture:
      "https://www.freesvgdownload.com/wp-content/uploads/2021/04/givenchy-free-svg-2.jpg",
    product_name: "Sweater",
    product_secondary_name: "Open back sweater in ribbed silk",
    product_image:
      "https://assets.givenchy.com/m/4b34bcb8ce112b34/High_Resolution_JPG-BW90K44ZFJ001-03-01.jpg?imwidth=1024",
    product_price: 250000.0,
    product_description:
      "Combining the 3 categories of horological complications represented by short-time measurement, striking mechanisms and astronomical indications, this model driven by in-house calibre 2885 was hand-crafted by a single master-watchmaker in the Audemars Piguet grande complication workshop.",
  },
  {
    id: 2,
    store_owner: "Givenchy",
    store_profile_picture:
      "https://www.freesvgdownload.com/wp-content/uploads/2021/04/givenchy-free-svg-2.jpg",

    product_name: "Cardigan",
    product_secondary_name: "Cardigan in GIVENCHY 4G brushed mohair",
    product_image:
      "https://assets.givenchy.com/m/b8802fab258125c/High_Resolution_JPG-BW90K04ZEW050-03-01.jpg?imwidth=1024",
    product_price: 520000.0,
    product_description:
      "The Royal Oak Minute Repeater Supersonnerie offers an elegant contrast with its titanium case and bracelet enhanced with a smoked grey “Grande Tapisserie” dial.",
  },
  {
    id: 3,
    store_owner: "Givenchy",
    store_profile_picture:
      "https://www.freesvgdownload.com/wp-content/uploads/2021/04/givenchy-free-svg-2.jpg",

    product_name: "Hoodie",
    product_secondary_name: "Hoodie in 4G cashmere",
    product_image:
      "https://assets.givenchy.com/m/4671d6e01271dc67/High_Resolution_JPG-BW90G04ZD8105-03-01.jpg?imwidth=1024",
    product_price: 250000.0,
    product_description:
      "The Selfwinding Flying Tourbillon presents the new RO design evolution as well as the “50-years” oscillating weight. The smoked blue “Grande Tapisserie” dial enhances the 18-carat pink gold case and bracelet.",
  },
  {
    id: 4,
    store_owner: "Givenchy",
    store_profile_picture:
      "https://www.freesvgdownload.com/wp-content/uploads/2021/04/givenchy-free-svg-2.jpg",

    product_name: "Bag",
    product_secondary_name: "Mini Antigona bag in 4G embroidered canvas",
    product_image:
      "https://assets.givenchy.com/m/55570006f9fd809e/High_Resolution_JPG-BB500JB18Z099-03-01.jpg?imwidth=1024",
    product_price: 350000.0,
    product_description:
      "This limited edition of 50 pieces combines a titanium case with a vibrant smoked blue-green dial toying with light.",
  },
  {
    id: 5,
    store_owner: "Givenchy",
    store_profile_picture:
      "https://www.freesvgdownload.com/wp-content/uploads/2021/04/givenchy-free-svg-2.jpg",

    product_name: "Ankle Boots",
    product_secondary_name: "Shark Lock ankle boots in leather",
    product_image:
      "https://assets.givenchy.com/m/302c25d1ad685ac6/High_Resolution_JPG-BE602RE147001-03-04.jpg?imwidth=1024",
    product_price: 250000.0,
    product_description:
      "This Japan-dedicated 41 mm Chronograph marries an 18-carat yellow gold case shimmering with Frosted Gold with a yellow-gold-toned 'Grande Tapisserie' dial accented by black counters.",
  },
  {
    id: 6,
    store_owner: "Givenchy",
    store_profile_picture:
      "https://www.freesvgdownload.com/wp-content/uploads/2021/04/givenchy-free-svg-2.jpg",

    product_name: "Ankle Boots",
    product_secondary_name:
      "Terra ankle boots in 4G embroidered canvas and leather",
    product_image:
      "https://assets.givenchy.com/m/8f205e85e0416bc/High_Resolution_JPG-BE603QE1K0001-03-04.jpg?imwidth=1024",
    product_price: 120000.0,
    product_description:
      "The blue shades of the Royal Oak Perpetual Calendar’s dial provide a powerful contrast with the 18-carat pink gold case and bracelet. The subdials and inner bezel adorn the iconic “Night Blue, Cloud 50” hue of the original Royal Oak.",
  },
  {
    id: 7,
    store_owner: "Givenchy",
    store_profile_picture:
      "https://www.freesvgdownload.com/wp-content/uploads/2021/04/givenchy-free-svg-2.jpg",

    product_name: "Chain",
    product_secondary_name: "G Chain cuff in metal",
    product_image:
      "https://assets.givenchy.com/m/45965881a3a72245/High_Resolution_JPG-BF20CWF003040-03-01.jpg?imwidth=1024",
    product_price: 250000.0,
    product_description:
      "The unique Royal Oak Selfwinding Chronograph dedicated to the “One Drop” 2022 auction combines black ceramic with a bright blue dial adorned with a satin-finished base and matching snailed counters. The titanium sapphire caseback is engraved with “Unique Piece.” ",
  },
  {
    id: 8,
    store_owner: "Givenchy",
    store_profile_picture:
      "https://www.freesvgdownload.com/wp-content/uploads/2021/04/givenchy-free-svg-2.jpg",

    product_name: "Oversized Jeans",
    product_secondary_name: "Oversized jeans in destroyed denim",
    product_image:
      "https://assets.givenchy.com/m/3898c752c21ab95a/High_Resolution_JPG-BW50WT50TU452-03-01.jpg?imwidth=1024",
    product_price: 550000.0,
    product_description:
      "The Royal Oak Double Balance wheel Openworked tackles these stabilising issues by fixing a second balance wheel and balance-spring assembly on the same axis. The new patented geometry involves a very complex manufacturing procedure, but the payoff is huge: greatly improved precision and stability.",
  },

  {
    id: 11,
    store_owner: "Givenchy",
    store_profile_picture:
      "https://www.freesvgdownload.com/wp-content/uploads/2021/04/givenchy-free-svg-2.jpg",

    product_name: "T-shirt with Hood",
    product_secondary_name: "T-shirt with hood in printed jersey",
    product_image:
      "https://assets.givenchy.com/m/33c45152a065f69a/High_Resolution_JPG-BM71F73Y6B001-03-01.jpg?imwidth=1024",
    product_price: 120000.0,
    product_description:
      "The hand-finished tourbillon openworked movement adorning different shades of grey is housed in a two-tone case interweaving 18-carat white and pink gold, highlighting the watch’s multifaceted geometry.",
  },
  {
    id: 12,
    store_owner: "Givenchy",
    store_profile_picture:
      "https://www.freesvgdownload.com/wp-content/uploads/2021/04/givenchy-free-svg-2.jpg",

    product_name: "Sneakers",
    product_secondary_name: "TK-360 sneakers in knit",
    product_image:
      "https://assets.givenchy.com/m/59216211cb3f55dc/High_Resolution_JPG-BH006KH1AV001-03-03.jpg?imwidth=1024",
    product_price: 100000.0,
    product_description:
      "The new timepiece encompasses a stylised two-tone case design interweaving black ceramic with 18-carat white gold. A first in the collection, the black onyx dial, enriched with subtle pink gold accents, adds an elegant touch.",
  },
  {
    id: 13,
    store_owner: "Givenchy",
    store_profile_picture:
      "https://www.freesvgdownload.com/wp-content/uploads/2021/04/givenchy-free-svg-2.jpg",

    product_name: "Flask",
    product_secondary_name: "GIVENCHY 4G flask with strap",
    product_image:
      "https://assets.givenchy.com/m/59d9539fb08cda51/High_Resolution_JPG-BK609VK15M040-03-01.jpg?imwidth=1024",
    product_price: 120000.0,
    product_description:
      "An astronomical watch par excellence, this Perpetual Calendar features a blue aventurine dial and subdials recalling a star-lit sky, and an 18-carat pink gold case.",
  },
  {
    id: 16,
    store_owner: "Givenchy",
    store_profile_picture:
      "https://www.freesvgdownload.com/wp-content/uploads/2021/04/givenchy-free-svg-2.jpg",

    product_name: "Bum Bag",
    product_secondary_name: "G-Zip bum bag in nylon",
    product_image:
      "https://assets.givenchy.com/m/38dac088fe8f980d/High_Resolution_JPG-BKU038K1JE001-03-01.jpg?imwidth=1024",
    product_price: 52000.0,
    product_description:
      "Part of a trilogy of Code 11.59 by Audemars Piguet Grande Sonnerie Supersonnerie, this one-of-a-kind timepiece blends age-old techniques with contemporary design. The 18-The Code 11.59 by Audemars Piguet Starwheel offers a contemporary take on the wandering hours complication. Its two-tone case combines black ceramic with white gold, while its blue aventurine dial serves as backdrop to the three black PVD-coated aluminium wandering hours discs making their rotation in the centre.",
  },
];
export default productsAPI;
