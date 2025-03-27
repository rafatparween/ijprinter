"use client"
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function HeaderSection() {
  const [slide, setSlide] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);

  const [categories] = useState([
    { name: "Visiting Cards", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/visiting-cards/Velvet%20Touch%20Visiting%20Cards/IN_Velvet-Touch-Visiting-Cards_Overview" },
    { name: "Personalised Pens", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Pens/Parker%20Lac%20Black%20Ball%20Pens/IN_Parker-Lac-Black-Ball-Pens_Overview" },
    { name: "Custom T-shirts", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Clothing%20and%20Bags/Dutees%20Combo%20Polo%20T-Shirts/IN_Dutees-Combo-Polo-T-Shirts_Overview" },
    { name: "Labels, Stickers & Packaging", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/label%20and%20sticker/Custom%20Shape%20Stickers/New/IN_Custom-Shape-Stickers_Overview-2" },
    { name: "Photo Gifts", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Photo%20Gifts/Acrylic%20Photo%20Blocks/IN_Acrylic-Photo-Blocks_Overview" },
    { name: "Custom Bags", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Clothing%20and%20Bags/Bags-%20Wildcraft%20Laptop%20Bag/IN_Wildcraft-Laptop-Bag_Overview" },
    { name: "Custom Drinkware", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Drinkware/Frosted%20Beer%20Mugs/IN_Frosted-Beer-Mugs_Overview" },
    { name: "Custom Stationery", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/marketing%20Materials/Wooden-LED-keychain/IN_Wooden-LED-keychain_Overview" },
    { name: "Custom Stamps & Ink", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Stamps/Professional%20Stamps/IN_Professional-Stamps_Overview" },
  ]);

  // Calculate the item width and visible items based on the viewport width

  useEffect(() => {
    const updateItemWidth = () => {
      const containerWidth = window.innerWidth;
      const gap = 16; 
      const calculatedItemWidth = (containerWidth - (gap * (8 - 1))) / 8; // Adjust for the gap between items
      setItemWidth(calculatedItemWidth);
      setVisibleItems(Math.floor(containerWidth / calculatedItemWidth));
    };

    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);

    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  const nextSlide = () => {
    if (slide < categories.length - visibleItems) {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  return (
    <div className="w-full mt-10">
      <h1 className="text-2xl font-semibold mb-4 text-center h-[38px]">Explore all categories</h1>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
          disabled={slide === 0}
        >
          <FaArrowLeft />
        </button>

        {/* Categories Carousel */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform ease-out duration-300"
            style={{ transform: `translateX(-${slide * (itemWidth + 16)}px)` }} // Adjust translation to account for gap
          >
            {categories.map((cat, index) => (
              <div
                key={index}
                className="shrink-0 text-center mx-2"
                style={{ width: itemWidth }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-auto rounded-full"
                />
                <div className="mt-2">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
          disabled={slide === categories.length - visibleItems}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default HeaderSection;