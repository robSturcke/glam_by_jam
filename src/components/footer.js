import React from "react"

const Footer = () => (
  <footer>
    <div className="text-center footer_txt">
      <p>
        © All Rights Preserved {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.robsturcke.dev">robSturcke</a>, Graphic Design by
        Kathryn Canize
      </p>
    </div>
  </footer>
)

export default Footer
