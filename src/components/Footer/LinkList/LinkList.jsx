import Link from '../../common/Link/Link';
import Typography from '../../common/Typography/Typography';

//Define a LinkList component that renders a list of links.
const LinkList = ({ links }) => (
  <ul className="link-list">
    {links.map((link, index) => (
      <li key={index}>
        <Link href={link.href}>
          <Typography variant="body1">{link.text}</Typography>
        </Link>
      </li>
    ))}
  </ul>
);

export default LinkList;