interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='mb-16'>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
