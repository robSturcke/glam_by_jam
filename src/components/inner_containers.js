import React from "react"
import PropTypes from "prop-types"

const InnerContainers = ({ children }) => {
  return (
    <div className="content_wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="spacer" />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

InnerContainers.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InnerContainers
