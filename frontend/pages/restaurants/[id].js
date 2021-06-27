import React from "react";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";
var QRCode = require("qrcode.react");
export default function Restorant({ restaurant }) {
  if (restaurant.dishes) {
    return (
      <>
        <Header />
        <div className="flex w-full justify-between px-5 md:px-20">
          <div className="flex">
            <div className="p-5 rounded-md shadow-xl border-2 bg-white w-96">
              <img
                className="object-cover h-80 md:h-48 w-full"
                src={`${process.env.NEXT_PUBLIC_API_URL}${restaurant.image[0].url}`}
              />
            </div>
            <div className="w-full px-3 py-5">
              <h1 className="font-bold">{restaurant.name}</h1>
              <p className="font-medium">{restaurant.description}</p>
              <p className="font-light">{restaurant.province}</p>
            </div>
          </div>
          
          <QRCode className="mt-5"
            value={`${process.env.NEXT_PUBLIC_URL}/restaurants/${restaurant.id}`}
          />
        </div>
        <ul className="grid gap-x-4 gap-y-4 grid-cols-5 md:px-20 mt-5">
          {restaurant.dishes.map((dish) => (
            <li
              key={dish.id}
              className="relative transition hover:scale-105 duration-300 ease-in-out rounded-md w-full  p-5 shadow-xl border-2 bg-white"
            >
              <img
                className="object-cover h-80 md:h-48 w-full"
                src={`${process.env.NEXT_PUBLIC_API_URL}${dish.image[0].url}`}
              />
              <div className="mt-3">{dish.name}</div>
              <div className="pb-5">{dish.description}</div>
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
        <Header />
      </>
    );
  }
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/restaurants");
  const restaurants = await res.json();

  const paths = restaurants.map((restaurant) => ({
    params: { id: restaurant.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:1337/restaurants/${params.id}`);
  const restaurant = await res.json();

  return { props: { restaurant } };
}
