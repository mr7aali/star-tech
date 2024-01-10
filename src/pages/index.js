import RootLayouts from '../components/Layouts/RootLayouts'
import Banner from '@/components/HomePage/Banner';
import FeaturedCategory from '@/components/HomePage/FeaturedCategory';
import FeaturedProducts from '@/components/HomePage/FeaturedProducts';
import HeadTag from '@/components/sheared/HeaderTag';
import MainBlog from '@/components/HomePage/MainBlog';
import Blog from '@/components/HomePage/Blog';
import CardSIdeBar from '@/components/ui/CardSIdeBar';
import { useState } from 'react';

export default function HomePage({ data }) {
  const [open, setOpen] = useState(false);
  return (
    < >
      <HeadTag descriptionContent={"Star Tech HomePage"} title={"Star Tech"} />
      <Banner />
      <FeaturedCategory />
      <FeaturedProducts products={data?.data} />
      <MainBlog />
      <Blog/>
      <div className='mt-[100px]'></div>
      <CardSIdeBar open={open} setOpen={setOpen} /> 
    </>
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

  const baseURL = process.env.BASE_URL;
  const res = await fetch(`${baseURL}/api/v1/product`);
  const data = await res.json();
  return {
    props: {
      data
    },
  }
}