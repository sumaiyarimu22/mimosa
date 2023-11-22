import BeautyPackage from '../beauty-packages/_components/BeautyPackage';
import Specialists from '../specialists/_components/Specialists';
import Slider from './_components/Slider';

const HomePage = () => {
  return (
    <main>
      <Slider />
      <BeautyPackage />
      <Specialists />
    </main>
  );
};

export default HomePage;
