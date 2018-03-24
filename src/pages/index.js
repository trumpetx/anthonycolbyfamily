import React from 'react'
import { withPrefix } from 'gatsby-link'

export default () => <div className="mainPage">
    <h1>Welcome</h1>
    <p>We are descendants of Anthony Colby and Susannah Haddon who met and married in Boston, probably in 1631 or 1632. We honor and revere their memory. We strive to continue the feeling of family among the many cousins. And we take pride in the continuance of the Macy-Colby House in Amesbury.</p>
    <div style={{textAlign:'center'}}>
        <img src={withPrefix('/static/house.gif')} alt="Colby House"/>
        <img src={withPrefix('/static/colby house cert.gif')} alt="Colby House Certificate"/>
    </div>
  </div>
