import FAQs from '../../components/FAQs'
import { MainHeader } from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonial from '../../components/Testimonial'
import Values from '../../components/Values'
import './home.css'



const Home = () => {
  return (
    <>
    <MainHeader />
    <Programs />
    <Values />
    <FAQs />
    <Testimonial />
    </>
  )
}

export default Home