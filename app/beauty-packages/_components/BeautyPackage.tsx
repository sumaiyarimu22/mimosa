'use client';

import SectionTitle from '@/components/ui/SectionTitle';
import useFetch from '@/hooks/useFetch';

import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import { beautyPackageType } from '@/types/beautyPackage';
import BeautyPackageCard from './BeautyPackageCard';
import { cn } from '@/libs/utils';
import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';

interface BeautyPackageProps {
  native?: boolean;
}

const BeautyPackage: React.FC<BeautyPackageProps> = ({ native }) => {
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

      <>
        {beautyPackages && (
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-20'>
            {/* BEAUTY PACKAGES */}
            {native &&
              beautyPackages
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .map((item: beautyPackageType) => (
                  <BeautyPackageCard item={item} key={item._id} />
                ))}
            {!native &&
              beautyPackages
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .slice(0, 6)
                .map((item: beautyPackageType) => (
                  <BeautyPackageCard item={item} key={item._id} />
                ))}
          </div>
        )}
        {!native && (
          <div className='mt-10 flex justify-center'>
            <Link
              href='/beauty-packages'
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              See More Packages
            </Link>
          </div>
        )}
      </>
    </section>
  );
};

export default BeautyPackage;
