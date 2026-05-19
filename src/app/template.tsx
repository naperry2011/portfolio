'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // pathname-keyed marker so React treats each route as a distinct subtree
  }, [pathname]);

  return <>{children}</>;
}
