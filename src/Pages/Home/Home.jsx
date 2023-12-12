import { useLoaderData } from "react-router-dom"
import Banner from "../../component/Banner/Banner"
import Card from "../../component/Card/Card"
import Experience from "./Experience"
import Quelification from "./Quelification"


const Home = () => {
const data = useLoaderData()
console.log(data)
  return (
    <div>

      <Banner></Banner>

      <div className='flex justify-around items-center my-12'>
        <div className='h-2  bg-purple-500 w-[300px]'>
        </div>
        <h2 className='text-3xl font-bold'>
      Skill
        </h2>
        <div className='h-2  bg-purple-500 w-[300px]'>
        </div>
      </div>
      <div className='mt-12 grid grid-cols-4   gap-4'>
      {
        data?.map(data=> <Card key={data.id} data={data}></Card>)
      }
      </div>
     <div className='my-12'>
      <h2 className='text-2xl font-medium my-4'> Some Project Demo</h2>
     <Experience></Experience>
     </div>
     <div>
      <Quelification></Quelification>
     </div>
    </div>
  )
}

export default Home