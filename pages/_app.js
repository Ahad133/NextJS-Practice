import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { serverTimestamp } from 'firebase/firestore';
import { firestore } from '../firebase/firebaseConfig';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
