import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';

interface LayoutProps {
  pageTitle: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
