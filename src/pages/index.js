
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

      <section style={{ border: '1px solid red' }}>
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


export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/api/v1/product");
  const data = await res.json();


  return { props: { data } }
}