
import RootLayouts from '../components/Layouts/RootLayouts'
import Banner from '@/components/HomePage/Banner';
import FeaturedCategory from '@/components/HomePage/FeaturedCategory';
import FeaturedProducts from '@/components/HomePage/FeaturedProducts';


// const Banner = dynamic(() => import('@/components/HomePage/Banner'), { ssr: false });


export default function HomePage() {

  return (
    <div >
      <Banner />
      <FeaturedCategory />
      <FeaturedProducts/>


      <div className='mt-[100px]'></div>
    </div>
  )
}
HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayouts>
      {page}
    </RootLayouts>
  );
}