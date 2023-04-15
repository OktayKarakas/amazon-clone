import Image from "next/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 ml-3 mr-4 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            alt="image"
            width={150}
            height={40}
            className="object-contain cursor-pointer"
          />
        </div>

        <div className="hidden sm:flex sm:flex-grow items-center h-10 rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="flex-grow p-2 h-full w-6 flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Oktay K.</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 w-4 h-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className="flex link items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">{"Today's"} Deals</p>
        <p className="hidden link lg:inline-flex">Electronics</p>
        <p className="hidden link lg:inline-flex">Food & Grocery</p>
        <p className="hidden link lg:inline-flex">Prime</p>
        <p className="hidden link lg:inline-flex">Buy Again</p>
        <p className="hidden link lg:inline-flex">Shopper Toolkit</p>
        <p className="hidden link lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
