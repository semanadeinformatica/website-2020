import React from "react"
import { FaInfo, FaTimes } from "react-icons/fa"

import eventsStyles from "../../styles/program/events.module.css"

const DescriptionToggler = ({ id, showAll, setShowAll, backgroundColor }) => (
  <div className={eventsStyles.toggler}>
    <input
      type="checkbox"
      checked={showAll}
      onChange={e => setShowAll(e.target.checked)}
      id={id}
    />
    <label htmlFor={id} style={{ backgroundColor }}>
      {showAll ? (
        <FaTimes color="white" size="1.5rem" />
      ) : (
        <FaInfo color="white" size="1.5rem" />
      )}
    </label>
  </div>
)

export default DescriptionToggler
