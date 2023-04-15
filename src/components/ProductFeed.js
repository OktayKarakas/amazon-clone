import React from "react";
import Product from "./Product";
import Image from "next/image";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={"product" + id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
      <div className="md:col-span-full overflow-hidden rounded-md mx-4">
        <Image
          className="rounded-md hover:scale-105 transition transform duration-300 ease-out mx-auto h-28 sm:h-full"
          src="https://links.papareact.com/dyz"
          width="1600"
          height="800"
        />
      </div>
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={"product" + id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}
      </div>
      {products
        .slice(5)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={"product" + id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
