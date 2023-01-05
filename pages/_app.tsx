import '../styles/globals.css';
import '../styles/imageCarouselStyles.css';
import '../styles/slider-animations.css';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
