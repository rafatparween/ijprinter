const customProductData = [
    {
        id: 1,
        Rs: "550",
        strCategory: "Personalised Notebooks",
        img: "/personalisednotebook.webp",
        description: "Personalized and eco-friendly custom bags made from high-quality materials."
    },
    {
        id: 2,
        Rs: "1200",
        strCategory: "Standard Visiting Cards",
        img: "/card.webp",
        description: "Custom ink stamps for personalized branding, available in various sizes."
    },
    {
        id: 3,
        Rs: "950",
        strCategory: "Embroidered Caps",
        img: "/caps.webp",
        description: "Custom label stickers and packaging solutions for all your branding needs."
    },
    {
        id: 4,
        Rs: "1025",
        strCategory: "Parx Premium Polo T-shirt",
        img: "/branded.webp",
        description: "Personalized photo gifts like mugs, frames, and cushions, perfect for any occasion."
    },
    {
        id: 5,
        Rs: "1120",
        strCategory: "American Tourister Laptop Bag",
        img: "/bags.webp",
        description: "High-quality custom stationery including notebooks, pens, and planners."
    },
    {
        id: 6,
        Rs: "1400",
        strCategory:"Hoodies",
        img: "/tshirt.webp",
        description: "Customizable winter wear including hoodies, jackets, and scarves."
    },
    {
        id: 7,
        Rs: "1700",
        strCategory:"Fleece Jackets",
        img: "/fleece.webp",
        description: "Customizable winter wear including hoodies, jackets, and scarves."
    }
];

export const products = [
    {
      category: 'Our Most Popular Products',
      items: [
        { name: "Personalised Notebooks", price: '550', imgSrc: '/personalisednotebook.webp' },
        { name: 'Flyers', price: '200', imgSrc: '/flayers.webp' },
        { name: "Hoodies", price: '420', imgSrc: '/tshirt.webp' },
        { name: 'Personalised Mugs', price: '650', imgSrc: '/gift.webp' },
        { name: 'Standard Visiting Cards', price: '230', imgSrc: '/card.webp' },
      ],
    },
    {
      category: 'Trending Products',
      items: [
        { name: 'Embroidered Polos', price: '680', imgSrc: '/polos.webp' },
        { name: 'Fleece Jackets', price: '750', imgSrc: '/fleece.webp' },
        { name: "Embroidered Caps", price: '950', imgSrc: '/caps.webp' },
        { name: 'Custom Mouse Pads', price: '570', imgSrc: '/mouse.webp' },
        { name: 'Winter Jacket-Sleeveless', price: '320', imgSrc: '/winter.webp' },
      ],
    },
    {
        category: 'Branded Products',
        items: [
          { name: "Women's Scott Polo T-Shirt", price: '1250', imgSrc: '/womens.webp' },
          { name: "Men's Arrow Dress Shirts", price: '1100', imgSrc: '/white.webp' },
          { name: "American Tourister Laptop Bag", price: '1700', imgSrc: '/bags.webp' },
          { name: 'Polyester Polo T-Shirts', price: '920', imgSrc: '/polos.webp' },
          { name: 'Parx Premium Polo T-shirt', price: '2200', imgSrc: '/branded.webp' },
        ],
      },
  ];

export default customProductData;
