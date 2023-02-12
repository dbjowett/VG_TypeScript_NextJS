import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';

interface LayoutProps {
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }: { pageTitle: string; children: ReactNode }) => {
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
