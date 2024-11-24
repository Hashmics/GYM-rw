import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

export const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container" >
        <div class="main__header-left">
          <h4>#100DaysofWorkOut</h4>
          <h1>Join the Legends of the Fitness</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae accusantium tenetur et? Eius, accusamus.
          </p>
          <Link to="plans" className='btn lg'>Get Started </Link>
        </div>

        <div class="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header pic" />
          </div>
        </div>
      </div>

    </header>
  )
}

export default MainHeader