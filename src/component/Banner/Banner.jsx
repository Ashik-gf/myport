import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import bnr1 from '../../../public/bnr1.png'
import bnr2 from '../../../public/banner.gif'


const Banner = () => {
  return (
    <div>
       <AwesomeSlider className='h-[80vh]'>
    
    <div className=''>
<img className='h-[470px] w-[1150px]' src={bnr2}></img>
    </div>
   <div className=''>
<img className='h-[600px] w-[1150px]' src={bnr1}></img>
    </div>
   
  </AwesomeSlider>
 
    </div>
  )
}

export default Banner