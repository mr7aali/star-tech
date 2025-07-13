import { ShoppingCart } from "lucide-react"; // Modern icon
import { useRef, useEffect } from "react";

const ShopingCardButton = ({ length }) => {
  const badgeRef = useRef();

  // Animate badge on count change
  useEffect(() => {
    if (badgeRef.current) {
      badgeRef.current.classList.remove("animate-bounce");
      void badgeRef.current.offsetWidth; // trigger reflow
      badgeRef.current.classList.add("animate-bounce");
    }
  }, [length]);

  return (
    <div className="fixed right-8 bottom-8 z-30 md:right-10 md:bottom-10 xl:right-12 xl:bottom-12">
      <button
        aria-label="View Cart"
        title="View Cart"
        className="relative flex items-center justify-center h-[68px] w-[68px] md:h-[76px] md:w-[76px] rounded-full bg-white/20 backdrop-blur-md shadow-2xl border border-white/30 cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(55,73,187,0.18)] group focus:outline-none"
        style={{ boxShadow: "0 4px 24px 0 rgba(55,73,187,0.15)" }}
      >
        <span className="text-[#3749bb] text-[34px] md:text-[40px] flex items-center justify-center">
          <ShoppingCart strokeWidth={2.2} />
        </span>
        {/* Badge */}
        <span
          ref={badgeRef}
          className="absolute -top-2 -right-2 flex items-center justify-center h-7 w-7 bg-[#ef4a23] text-white text-sm font-bold rounded-full border-2 border-white shadow-md animate-bounce"
        >
          {length}
        </span>
        {/* Hover ring */}
        <span className="absolute inset-0 rounded-full ring-2 ring-[#3749bb] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></span>
      </button>
    </div>
  );
};

export default ShopingCardButton;
