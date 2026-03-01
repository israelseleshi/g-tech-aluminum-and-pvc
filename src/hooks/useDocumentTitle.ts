import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/about': 'About Us',
  '/solutions': 'Products',
  '/portfolio': 'Projects',
  '/contact-us': 'Contact Us',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
};

export function useDocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    // Check if it's a project detail page
    if (location.pathname.startsWith('/projects/')) {
      document.title = `Project Details | G-Tech PVC Production PLC`;
      return;
    }
    
    const pageTitle = pageTitles[location.pathname] || 'G-Tech';
    document.title = `${pageTitle} | G-Tech PVC Production PLC`;
  }, [location.pathname]);
}
