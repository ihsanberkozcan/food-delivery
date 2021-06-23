import Head from 'next/head'
import { Header } from '../components/Header'
import { RestaurantList } from '../components/RestaurantList'
import React, { useState } from "react";
import axios from 'axios';
import Search from '../components/Search';
import { Footer } from '../components/Footer';
export default function Home({ restaurants, error }) {
  const [query, updateQuery] = useState();

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Header />
      <Search/>
      <ul className="flex flex-wrap px-5 md:px-20">

        {restaurants.map(restaurant => (
          <>
            <div class="relative transition hover:scale-105 duration-300 ease-in-out rounded-md w-full md:w-64 p-5 shadow-xl border-2 m-1.5 mb-5 md:mb-2 bg-white">
              <img className="object-cover h-80 md:h-48 w-full" src={`${process.env.NEXT_PUBLIC_API_URL}${restaurant.image[0].url}`} />
              <li className="mt-3" key={restaurant.id}>{restaurant.name}</li>
              <li className="pb-5" key={restaurant.id}>{restaurant.description}</li>
              <li className="absolute bottom-3 right-6" key={restaurant.id}>{restaurant.province}</li>
            </div>

          </>
        ))}
      </ul>
        <Footer/>
    </>
  );

}

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/restaurants');
    const restaurants = res.data;
    return { restaurants };
  } catch (error) {
    return { error };
  }
};