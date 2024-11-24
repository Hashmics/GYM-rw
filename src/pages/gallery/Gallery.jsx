import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'



const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }



  return (
    <>
    <Header title="Gallery" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, facere nostrum tenetur repudiandae eos aliquid harum delectus necessitatibus dolores perferendis. Corrupti beatae nostrum facilis iusto pariatur provident non sint eveniet.
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index) => {
            return <article  key={index}>
              <img src={image} alt={`Gallery pic ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>    
    </>
  )
}

export default Gallery