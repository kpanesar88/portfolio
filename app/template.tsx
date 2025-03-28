'use client'
import { useState, useEffect } from 'react'; // Added useEffect import
import { usePathname, useSearchParams } from 'next/navigation';
import Loading from 'app/loading/loading';

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
}