import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div className="tile">
            <figure className="image is-64x64">
              <Image
                className="is-rounded"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                imgStyle={{ borderRadius: "50%" }}
              />
            </figure>
            <p>
              Scritto da <strong>{author}</strong> nelle vicinanze di Roma.
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
