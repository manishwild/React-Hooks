import React from 'react'
import PropTypes from 'prop-types'

const testing = props => {
  return (
    <div>testing</div>
  )
}

testing.propTypes = {
  name:PropTypes.array.isRequired,//pt and value
}

export default testing