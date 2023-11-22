import { specialistType } from '@/types/specialist';
import React from 'react';

interface SpecialistDetailsProps {
  specialist: specialistType;
}

const SpecialistDetailsItem: React.FC<SpecialistDetailsProps> = ({
  specialist,
}) => {
  return <section className='sp container'>{specialist.name}</section>;
};

export default SpecialistDetailsItem;
