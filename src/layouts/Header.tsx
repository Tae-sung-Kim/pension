import HamburgerMenu from './components/HamburgerMenu';
import Menu from './components/Menu';

export default function Header() {
  // 메뉴 이동
  const handleOpenUrl = (url?: string) => {
    if (url) {
      window.open(url);
    }
  };

  return (
    <div className="fixed top-1 left-0 w-full z-50">
      <header className="container">
        {/* PC 메뉴 */}
        <Menu onClick={handleOpenUrl} />

        {/* 모바일 메뉴 */}
        <HamburgerMenu onClick={handleOpenUrl} />
      </header>
    </div>
  );
}
