import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { uuid } from "uuidv4";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  const product = {
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
  };
  const dispatch = useDispatch();
  function addItemToBasket() {
    dispatch(addToBasket(product));
  }
  function removeItemFromBasket() {
    dispatch(removeFromBasket(product));
  }
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} className="object-contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <StarIcon key={uuid()} className="h-5 text-yellow-500" />;
            })}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="USD" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <Image
              src="https://links.papareact.com/fdw"
              className="w-12"
              alt=""
              width={20}
              height={20}
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
