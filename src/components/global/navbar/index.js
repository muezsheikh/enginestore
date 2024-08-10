import Header from './Header'
import { useParams } from 'react-router-dom'
import Menus from './Menus'
import News from './News'
import MobNav from './MobNav'

const Navbar = () => {
  const { collection } = useParams()
  return (
    <div className='MainNavCon'>
      <News />
      <Header collection={collection} />
      <div className='largeScreen'>
        <Menus collection={collection} />
      </div>
      <div className='mobScreen'>
        <MobNav collection={collection} />
      </div>
    </div>
  )
}

export default Navbar
