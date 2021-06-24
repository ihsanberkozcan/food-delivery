import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
