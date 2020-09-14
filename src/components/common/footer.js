import React from "react"
import classnames from "classnames"

import FooterStyles from "../../styles/common/footer.module.css"

const Footer = ({ dark }) => (
  <div
    className={classnames(
      FooterStyles.footerContainer + " py-2 py-sm-3 text-center",
      dark && FooterStyles.dark
    )}
  >
    Copyright © 2020 niaefeup, todos os direitos reservados
  </div>
)

export default Footer
