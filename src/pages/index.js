
import RootLayouts from '../components/Layouts/RootLayouts'



export default function HomePage() {
  return (
    <div>
      {/* <h1 className=''> this is my home page</h1> */}
    </div>
  )
}


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayouts>
      {page}
    </RootLayouts>
  )
}