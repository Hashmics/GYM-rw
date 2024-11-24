import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'




const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dolorum. Rem saepe ipsam facere asperiores quia pariatur earum excepturi eligendi?
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Img"/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex odit amet eaque architecto? Sit non eos at esse magni.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, sed totam! Facilis quos sunt rerum molestias ipsa totam nisi minus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aspernatur modi, a blanditiis maxime animi, ipsum possimus amet dolores aperiam quas iure aliquid quaerat ex incidunt reiciendis, illo molestias. Sint!
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex odit amet eaque architecto? Sit non eos at esse magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam reiciendis officia adipisci nesciunt saepe ullam voluptate! Exercitationem corporis amet quidem. Voluptatem enim dolorem sint repellat doloribus architecto nam reiciendis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, sed totam! Facilis quos sunt rerum molestias ipsa totam nisi minus!
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Out Story Img"/>
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Img"/>
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex odit amet eaque architecto? Sit non eos at esse magni.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, sed totam! Facilis quos sunt rerum molestias ipsa totam nisi minus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aspernatur modi, a blanditiis maxime animi, ipsum possimus amet dolores aperiam quas iure aliquid quaerat ex incidunt reiciendis, illo molestias. Sint!
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About