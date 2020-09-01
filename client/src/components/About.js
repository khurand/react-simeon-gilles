import React from "react";
import PropTypes from "prop-types";

const About = ({ description, heading, title }) => {
  return (
    <div className='about-container section' id='about'>
      <h3 className='container-title'>{title}</h3>
      <div className='container'>
        <div
          className='portrait'
          data-aos='fade-right'
          data-aos-duration='700'
          data-aos-delay='300'
          data-aos-offset='200'
        ></div>
        <div className='bio'>
          <div
            className='bio-heading'
            data-aos='fade-down'
            data-aos-duration='700'
            data-aos-offset='300'
          >
            <h4 className='heading'>{heading}</h4>
          </div>
          <div
            className='bio-text'
            data-aos='fade-left'
            data-aos-duration='700'
            data-aos-delay='400'
            data-aos-offset='200'
          >
            <p className='text'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

About.defaultProps = {
  title: "A Propos",
  heading: "Gilles Simeon",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque fugiat, corporis accusantium vero eius sequi tempora provident blanditiis ut iusto nihil at. Dicta quibusdam quae delectus nobis corporis aspernatur facere eum enim sunt omnis autem provident excepturi, ab, eos consequatur dolores porro odit ipsum reiciendis molestiae id! Beatae consequatur assumenda, iusto sapiente, quisquam enim modi, quae vitae laboriosam dolorem aspernatur. Quos necessitatibus eum porro aut, maiores adipisci ut impedit dolores dolorum, id sunt laboriosam esse est similique autem natus aliquam iusto tempore animi atque reiciendis veritatis, provident quam assumenda. Quasi quas culpa quos libero in recusandae tenetur omnis rem animi. Tenetur accusamus hic libero omnis consequuntur corrupti inventore! Molestias excepturi minima, dignissimos mollitia quidem alias modi aspernatur necessitatibus assumenda possimus nihil laborum adipisci repellat distinctio fuga totam. Ullam id quisquam ratione non sed. Iste dicta illo sunt impedit amet corrupti ipsam deserunt consequuntur voluptas ducimus? Sunt optio sit quia earum, exercitationem labore eveniet fuga neque id libero nesciunt possimus soluta ipsa odio blanditiis veniam debitis incidunt alias ipsam vitae molestias voluptate! Dignissimos vel quis nemo! Itaque illo consequatur amet animi odio labore nostrum, quod harum sint commodi, doloremque saepe. Aspernatur suscipit deserunt ratione sunt, vel recusandae rerum nobis voluptates.",
};

About.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default About;
