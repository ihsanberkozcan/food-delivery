import React from 'react'
import Link from "next/link";
import axios from 'axios';
export default function RestaurantList({ restaurants, error }) {
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
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </>
  );

}

RestaurantList.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/restaurants');
    const restaurants = res.data;
    return { restaurants };
  } catch (error) {
    return { error };
  }
};