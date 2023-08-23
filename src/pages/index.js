
import ProductCard from '@/components/card/ProductCard';
import RootLayouts from '../components/Layouts/RootLayouts'
import Banner from '@/components/card/Banner';



export default function HomePage({ data }) {
  // console.log(data);



  return (
    <div >
      <div  style={{border:'1px solid red'}} className='container mx-auto mt-8'>
        <Banner />
      </div>
      <div className='max-w-5xl grid grid-cols-3 gap-2 mx-auto my-24'>
        {
          data?.map(c => <ProductCard key={c.id} data={c} />)
        }

      </div>
    </div>
  )
}


export const getStaticProps = async () => {

  const res = await fetch("https://test-server-coral-kappa.vercel.app/getdata");
  const data = await res.json();
  return {
    props: {
      data: data
    }
  }
}

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayouts>
      {page}
    </RootLayouts>
  );
}