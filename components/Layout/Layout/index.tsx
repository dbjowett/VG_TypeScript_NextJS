import Head from 'next/head';
import Footer from '../Footer';
import Navigation from '../Navigation';

interface LayoutProps {
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
