import '../styles/globals.css'
import Applayout from '../components/Applayout'
// import 'swiper/css';
export default function App({ Component, pageProps }) {
  return<Applayout ><Component {...pageProps} /></Applayout>
}
 
 