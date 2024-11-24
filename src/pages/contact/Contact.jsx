import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get in Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente beatae aspernatur quis itaque consequatur ut, ipsam minus repellendus magni fugit. Cum quidem dolores asperiores excepturi aut aliquid a minima quisquam.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:rehmanhashmirehman123@gmail.com" target="_blank" rel=" noreferrer noopener"><MdEmail/></a>
          <a href="https://m.me/100005083429407" target="_blank" rel=" noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+923117947466" target="_blank" rel=" noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact