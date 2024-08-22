//Define Link Component

import './Link.scss';

const Link = ({ href, children }) => (
  <a href={href} className="link">
    {children}
  </a>
);

export default Link;