import React from "react";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";
export default function Restorant({ restaurant }) {
  if (restaurant.dishes) {
    return (
      <>
        <Header />
        <ul className="flex flex-wrap px-5 md:px-20">
          {restaurant.dishes.map((dish) => (
            <div
              key={dish.id}
              className="relative transition hover:scale-105 duration-300 ease-in-out rounded-md w-full md:w-64 p-5 shadow-xl border-2 m-1.5 mb-5 md:mb-2 bg-white"
            >
              <img
                className="object-cover h-80 md:h-48 w-full"
                src={`${process.env.NEXT_PUBLIC_API_URL}${dish.image[0].url}`}
              />
              <li className="mt-3">{dish.name}</li>
              <li className="pb-5">{dish.description}</li>
            </div>
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
