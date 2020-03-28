import React from "react";
import "../../content/assets/layout.scss";

class Layout extends React.Component {
  render() {
    const { title, children } = this.props;
    let header;

    header = (
      <nav className="level">
        <div className="level-left">
          <h1 className="has-text-primary is-size-1">{title}</h1>
          <figure className="image is-64x64">
            <img
              className="image is-marginless"
              src="../../images/circus-monkey.svg"
              alt="un simpatico primate"
            ></img>
          </figure>
        </div>
        <div className="level"></div>
        <div className="level-right"></div>
      </nav>
    );
    return (
      <div>
        <div className="container">
          <header className="navbar">{header}</header>
          <main className="content">
            <div class="columns">
              <div class="column is-three-quarters">{children}</div>
              <div class="column is-info">
                <small>
                  Da circa 20 anni mi occupo di sviluppo di applicazioni web,
                  principalmente in Java. Ho maturato negli anni esperienza sui
                  principali framework ( Struts, Spring, Grails) e di recente su
                  Angular e Ionic. La prima parte della carriera svolta nel
                  mondo TLC su sistemi gestionali e di monitoraggio legati al
                  mondo della telefonia pubblica e delle intercettazioni. Da un
                  decennio impiegato in Istat nello sviluppo di applicativi
                  legati alle rilevazioni.
                </small>
              </div>
            </div>
          </main>
          <footer className="footer is-paddingless">
            {" "}
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default Layout;
