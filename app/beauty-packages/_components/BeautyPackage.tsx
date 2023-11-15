'use client';

import SectionTitle from '@/components/ui/SectionTitle';
import useFetch from '@/hooks/useFetch';

import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import { beautyPackageType } from '@/types/beautyPackage';
import BeautyPackageCard from './BeautyPackageCard';

const BeautyPackage = () => {
  const {
    data: beautyPackages,
    isLoading,
    error,
  } = useFetch('/api/beauty_packages');
  console.log(beautyPackages);

  return (
    <section className='sp container'>
      <SectionTitle title='Beauty Packages' />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error.message} />}

      {beautyPackages && (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-20'>
          {/* BEAUTY PACKAGES */}
          {beautyPackages.map((item: beautyPackageType) => (
            <BeautyPackageCard item={item} key={item._id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BeautyPackage;
