import { useStaticQuery, graphql } from "gatsby"

export const useShowcaseImages = () => {
  const data = useStaticQuery(graphql`
    query ShowcaseQuery {
      allFile(filter: { relativeDirectory: { eq: "showcase" } }) {
        edges {
          node {
            absolutePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return data
}
