import React from "react";

const ScrollIndicator = () => {
  window.addEventListener("scroll", moveScrollIndicator);

  function moveScrollIndicator() {
    const scrollIndicatorElt = document.querySelector(".scroll-indicator-line");
    const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;
    const percentage = (window.scrollY / maxScrollableHeight) * 100;
    scrollIndicatorElt.style.width = percentage + "%";
  }
  return <div className='scroll-indicator-line' style={style}></div>;
};

const style = {
  height: "2px",
  background: "#64ffda",
  zIndex: "51",
  position: "fixed",
  marginBottom: "-2px",
};

export default ScrollIndicator;
