import notfound from '../assets/notfound.jpg'
import Buttons from '../component/Buttons'

function NotFound() {
  return (
    <div>
    
      <img src={notfound} alt="404" className='w-screen'/>  
      <p>Page not found</p>
      <Buttons btnText='back home' linkUrl="/" btnStyle='bg-red-400' />
      <Buttons btnText='back home' linkUrl="/" btnStyle='underlin' />
    </div>
  )
}

export default NotFound