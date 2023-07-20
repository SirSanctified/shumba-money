import React from "react";
import "./Gallery.css";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { galleryImages } from "../../constants";
import { FaArrowRight } from "react-icons/fa";

const Photo = ({ image }) => (
  <div className="photo">
    <a
      className="overlay__div"
      href="https://instagram.com/_shumba_money_official_/"
      target="blank"
    >
      <div className="icon">
        <BsInstagram size={30} color="#d9d9d9" />
      </div>
    </a>
    <img src={image.img} alt={image.alt} />
  </div>
);

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 450;
    } else {
      current.scrollLeft += 450;
    }
  };
  return (
    <section className="Gallery" id="Gallery">
      <div className="gallery-content">
        <div className="heading">
          <h1>Gallery</h1>
          <hr />
          <p style={{ textTransform: "capitalize" }}>
            Take a visual journey through our gallery.
          </p>
        </div>
        <p
          style={{
            marginTop: "2rem",
          }}
        >
          To view more, visit our instagram handle and follow us so that you
          won&#39;t miss any updates.
        </p>
        <a
          href="https://instagram.com/_shumba_money_official_/"
          target="blank"
          className="btn"
          style={{
            marginTop: "2rem",
          }}
        >
          Follow us <FaArrowRight />
        </a>
      </div>
      <article className="images">
        <div className="leftArrow">
          <MdOutlineChevronLeft
            size={40}
            className="arrow"
            onClick={() => scroll("left")}
          />
        </div>
        <div className="rightArrow">
          <MdOutlineChevronRight
            size={40}
            className="arrow"
            onClick={() => scroll("right")}
          />
        </div>
        <div className="photos" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <Photo image={image} key={`gallery-image-${index + 1}`} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Gallery;
