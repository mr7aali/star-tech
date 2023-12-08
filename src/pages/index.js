
import RootLayouts from '../components/Layouts/RootLayouts'
import Banner from '@/components/HomePage/Banner';
import FeaturedCategory from '@/components/HomePage/FeaturedCategory';
import FeaturedProducts from '@/components/HomePage/FeaturedProducts';


// const Banner = dynamic(() => import('@/components/HomePage/Banner'), { ssr: false });


export default function HomePage({ data }) {
 
  return (
    <div >
      <Banner />
      <FeaturedCategory />

      <section>
        <FeaturedProducts products={data?.data} />
      </section>


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


export async function getStaticProps() {
  const baseURL = process.env.BASE_URL
  // const res = await fetch("https://tec-services-backend.vercel.app/api/v1/service/get");
  const res = await fetch(`${baseURL}/api/v1/product`);
  const data = await res.json();


  return { props: { data } }
}