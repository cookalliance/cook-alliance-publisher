/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "Home Cooking Framework",
        titleTemplate: "%s · COOK Alliance",
        description:
            "A framework for legalizing and regulating home cooking businesses.",
        url: "https://policy.cookalliance.org", // No trailing slash allowed!
        image: "/images/social-sharing.jpg", // Path to your image you placed in the 'static' folder
        twitterUsername: "@AllianceCook",
        author: `COOK Alliance`,
        menuLinks: [
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Model Code",
                link: "/model-code"
            },
            {
                name: "Model Legislation",
                link: "/model-legislation"
            }
        ]
    },
    plugins: [{
        resolve: `gatsby-plugin-styled-components`
    }, {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `chapters`,
            path: `${__dirname}/src/chapters/`,
        }
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            // Footnotes mode (default: true)
            footnotes: true,
            // GitHub Flavored Markdown mode (default: true)
            gfm: true,
            // Plugins configs
            plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-tufte`],
        },
    },
    {
        resolve: `gatsby-plugin-typography`,
        options: {
            pathToConfigModule: `src/utils/typography`
        }
    }, `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`

    ]
}