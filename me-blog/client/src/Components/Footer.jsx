import React from 'react'

const Footer = () => {
  return (
   <footer>
    <ul className="footer__categories">

<li> <link to="/posts/categories/:Agriculture">Agriculture</link></li>
<li> <link to="/posts/categories/:Information Technology">Information Technology</link></li>
<li><link to="/posts/categories/:Entertainment">Entertainment</link></li>
<li><link to="/posts/categories/:Education">Education</link></li>
<li><link to="/posts/categories/:Sport">Sport</link></li>
<li><link to="/posts/categories/:Art">Art</link></li>
<li> <link to="/posts/categories/:Investments">investments</link></li>
<li><link to="/posts/categories/:Weather">Weather</link></li>
<li><link to="/posts/categories/:Uncategorized">Uncategorized</link></li>

    </ul>
    <div className="footer__copyright">
      <small>All Right Reserverd &copy; Copyright, SANDISIWE MAYISELA.</small>
    </div>
   </footer>
  )
}

export default Footer