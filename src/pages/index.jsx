import * as React from "react"

import Seo from "../components/seo"

const Index = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal")

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = typeof window !== "undefined" ? window.innerHeight : 0
      var elementTop = reveals[i].getBoundingClientRect().top
      var elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active")
      } else {
        reveals[i].classList.remove("active")
      }
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", reveal)
  }

  return (
    <>
      <Seo title="Homepage" />
      <section>
        <h1>Scroll Down to Reveal Elements &#8595;</h1>
      </section>
      <section>
        <div class="container reveal">
          <h2>Section 1</h2>
        </div>
      </section>

      <section>
        <div class="container reveal">
          <h2>Caption</h2>
          <div class="text-container">
            <div class="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            <div class="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            <div class="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
