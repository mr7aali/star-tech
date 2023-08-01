
import ProductCard from '@/components/card/ProductCard';
import RootLayouts from '../components/Layouts/RootLayouts'



export default function HomePage({ data }) {
  // console.log(data);
  return (
    <div className='max-w-5xl grid grid-cols-3 gap-2 mx-auto my-24'>
      {
        data?.map(c => <ProductCard key={c.id} data={c}/>)
      }
    </div>
  )
}
export const getStaticProps = async () => {

  const res = await fetch("http://localhost:500/data");
  const data = await res.json();
  // console.log(await data);
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