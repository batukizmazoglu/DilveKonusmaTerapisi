'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  const breadcrumbVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      className="py-4 px-4 mb-6 bg-white rounded-lg shadow-sm"
      initial="hidden"
      animate="visible"
      variants={breadcrumbVariants}
    >
      <ol className="flex items-center space-x-2 text-gray-600">
        <li>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Ana Sayfa
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">/</span>
            <Link
              href={`/${pathSegments.slice(0, index + 1).join('/')}`}
              className="hover:text-blue-600 transition-colors capitalize"
            >
              {segment.replace(/-/g, ' ')}
            </Link>
          </li>
        ))}
      </ol>
    </motion.nav>
  );
};

export default Breadcrumb; 