import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* SNS 링크 */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-400 transition-colors"
            >
              <FaXTwitter size={24} />
            </a>
          </div>

          {/* 연락처 및 주소 */}
          <div className="text-center text-gray-600">
            <p>{`${import.meta.env.VITE_PENSION_NAME}`}</p>
            <p>문의: {`${import.meta.env.VITE_PENSION_PHONE}`}</p>
            <p>주소: {`${import.meta.env.VITE_PENSION_ADDRESS}`}</p>
          </div>

          {/* 저작권 정보 */}
          <p className="text-sm text-gray-500">
            &copy; 2025 펜션 소개 사이트. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
