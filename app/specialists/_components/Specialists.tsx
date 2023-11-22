'use client';
import Error from '@/components/ui/Error';
import Loading from '@/components/ui/Loading';
import SectionTitle from '@/components/ui/SectionTitle';
import useFetch from '@/hooks/useFetch';
import { specialistType } from '@/types/specialist';
import SpecialistsCard from './SpecialistsCard';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/libs/utils';
import { buttonVariants } from '@/components/ui/Button';

interface SpecialistsProps {
  native?: boolean;
}

const Specialists: React.FC<SpecialistsProps> = ({ native }) => {
  const { data: specialists, isLoading, error } = useFetch('/api/specialists');
  return (
    <section className='sp container'>
      <SectionTitle title='Specialists' />

      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}

      {specialists && (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-20'>
          {native &&
            specialists.map((specialist: specialistType) => (
              <SpecialistsCard specialist={specialist} key={specialist._id} />
            ))}
          {!native &&
            specialists
              .slice(0, 6)
              .map((specialist: specialistType) => (
                <SpecialistsCard specialist={specialist} key={specialist._id} />
              ))}
        </div>
      )}
      {!native && (
        <div className='mt-10 flex justify-center'>
          <Link
            href='/specialists'
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            See More specialist
          </Link>
        </div>
      )}
    </section>
  );
};

export default Specialists;
