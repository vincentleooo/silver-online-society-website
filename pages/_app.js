import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className='bigContainer'>
      <Header />
      <Component {...pageProps} />
      <Footer /> 
    </div>
  );
}

export default MyApp;
