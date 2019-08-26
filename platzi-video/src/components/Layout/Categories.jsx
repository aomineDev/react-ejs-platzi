import React from 'react'

import '../../assets/scss/components/Layout/Categories.scss'

const Categories = ({ children, title }) => (
  <React.Fragment>
    <h3 className="categories__title">{ title }</h3>
    { children }
  </React.Fragment>
)

export default Categories