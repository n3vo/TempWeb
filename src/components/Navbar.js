import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            נבו רימר
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>עבודות</button>
            <button onClick={() => scrollTo("#about")}>מי אני?</button>
            <button onClick={() => scrollTo("#contact")}>צרו קשר</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
