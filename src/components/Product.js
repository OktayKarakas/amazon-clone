import React from "react";
import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { uuid } from "uuidv4";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlice";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch();
  const [hasPrime] = useState(Math.random() < 0.5);

  function addItemToBasket() {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    dispatch(addToBasket(product));
  }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-lg">
      <p className="absolute top-2 right-2 text-xs italic">{category}</p>
      <Image
        src={image}
        height={200}
        width={200}
        alt={"product"}
        className="object-contain mx-auto"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(Math.round(rating.rate))
          .fill()
          .map((_, i) => {
            return <StarIcon key={uuid()} className="h-5 text-yellow-500" />;
          })}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>

      <div
        className={!hasPrime ? "hidden" : "flex items-center space-x-2 -mt-5"}
      >
        <Image
          src="https://links.papareact.com/fdw"
          width={200}
          height={200}
          alt="has prime"
          className="w-12"
        />
        <p className="text-xs text-gray-500">Free Next-day Delivery</p>
      </div>
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
