import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container h-screen">
      <Header />
      <div className="absolute top-10">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
