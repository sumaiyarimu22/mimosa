'use client';

import Error from '@/components/ui/Error';
import Loading from '@/components/ui/Loading';
import useFetch from '@/hooks/useFetch';
import { useRouter } from 'next/navigation';
import BeautyPackageItem from './_components/BeautyPackageItem';

const BeautyPackageDetails = ({ params }: { params: { id: string } }) => {
  const {
    data: beautyPackageItem,
    isLoading,
    error,
  } = useFetch(`/api/beauty_packages/${params.id}`);

  const router = useRouter();

  return (
    <main>
      {isLoading && (
        <div className='flex min-h-screen items-center justify-center'>
          <Loading isLoading={isLoading} />
        </div>
      )}
      {error && (
        <div className='flex min-h-screen flex-col items-center justify-center gap-2.5'>
          <Error error={error.message} />
          <button onClick={() => router.back()}>Go Back</button>
        </div>
      )}

      {beautyPackageItem && <BeautyPackageItem item={beautyPackageItem} />}
    </main>
  );
};

export default BeautyPackageDetails;
