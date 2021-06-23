import React from 'react'

export default function Restorant() {
    return (
        <div>
            
        </div>
    )
}
Restorant.getInitialProps = async ctx => {
    try {
      const res = await axios.get('http://localhost:1337/restaurants');
      const restaurants = res.data;
      return { restaurants };
    } catch (error) {
      return { error };
    }
  };