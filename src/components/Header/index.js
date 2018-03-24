import React from 'react'
import Link from 'gatsby-link'

export default () => <div>
    <div className="header">
      <h1 className="headerLink mainLink">
        <Link to="/">The Colby Family Association</Link>
      </h1>
        <div className="headerLinks">
            <span className="headerLink">[<Link to="/">Home</Link>]</span>
            <span className="headerLink">[<Link to="/basic/">Basic Info</Link>]</span>
            <span className="headerLink">[<Link to="/famous/">Famous Colbys</Link>]</span>
            <span className="headerLink">[<Link to="/politicians/">Politicians</Link>]</span>
            <span className="headerLink">[<Link to="/membership/">Membership</Link>]</span>
            <span className="headerLink">[<Link to="/links/">Links</Link>]</span>
        </div>
  </div>
</div>
