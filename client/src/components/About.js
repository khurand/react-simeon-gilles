import React from "react";

const About = () => {
  return (
    <div className='about-container' id='about'>
      <h3 className='container-title'>A Propos</h3>
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
            <h1 className='heading'>Heading Bio</h1>
          </div>
          <div
            className='bio-text'
            data-aos='fade-left'
            data-aos-duration='700'
            data-aos-delay='400'
            data-aos-offset='200'
          >
            <p className='text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              dolor ipsa placeat aspernatur in. Laborum reiciendis ex alias ipsa
              animi dolorum architecto quod nihil reprehenderit. Aut, veniam
              expedita beatae sunt doloribus quibusdam hic ea maxime obcaecati,
              repellat placeat dolorum vitae laudantium architecto consequatur,
              id facilis laborum iste eius. Atque maiores possimus sapiente
              molestias fugit voluptatum beatae corrupti! Vel iusto inventore,
              voluptas, corporis vero nisi eligendi ab nemo vitae, veniam omnis
              dolorem provident. Recusandae iusto neque doloremque, dolor
              debitis possimus animi laudantium quam autem rerum, consectetur
              dolore inventore omnis perspiciatis alias, unde nulla ipsum beatae
              fugit! Aspernatur, iste. Blanditiis, reiciendis? Consectetur
              perferendis illo reiciendis voluptate exercitationem deserunt.
              Vitae maxime, placeat asperiores tenetur, eos, vero veritatis
              minus similique possimus cupiditate sint repudiandae sapiente in?
              Debitis, reiciendis laudantium! Dicta pariatur ut provident
              temporibus facere, ratione ipsa accusamus porro corporis!
              Dignissimos molestias magnam quis repellendus provident. Fuga
              porro ipsum eveniet quidem fugiat nesciunt accusamus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// import { useIntersection } from "react-use";
// import gsap from "gsap";

// // Creation d'une ref pour notre élément à animer
// let elementRef = useRef(null);

// // Observation des refs, seuil à 50% de l'élément
// const intersection = useIntersection(elementRef, {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.5,
// });

// console.log(elementRef);

// const fadeIn = (elementRef) => {
//   gsap.to(elementRef, 1.5, {
//     opacity: 1,
//     y: -20,
//     ease: "power4.out",
//     stagger: {
//       amount: 0.3,
//     },
//   });
// };
// const fadeOut = (elementRef) => {
//   gsap.to(elementRef, 1, {
//     opacity: 0,
//     y: 0,
//     ease: "power4.out",
//   });
// };

// intersection && intersection.intersectionRatio < 0.5
//   ? fadeOut(".fadeIn")
//   : fadeIn(".fadeIn");
