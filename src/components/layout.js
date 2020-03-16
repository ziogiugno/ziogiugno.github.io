import React from "react";
import { Link } from "gatsby";
import "../../content/assets/layout.scss";

class Layout extends React.Component {
  render() {
    const { title, children } = this.props;
    let header;

    header = (
      <h1>
        <Link to={`/`}>
          {title}&nbsp;
          <img
            className="logo"
            src="../../images/circus-monkey.svg"
            width="70"
            height="70"
            alt="un simpatico primate"
          ></img>
        </Link>
      </h1>
    );
    return (
      <div className="container">
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
