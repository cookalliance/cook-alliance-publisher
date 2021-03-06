import Typography from "typography"

const typography = new Typography(
    {
        baseFontSize: "16px",
        baseLineHeight: 1.61,
        headerFontFamily: [
            "Tiempos-Text"
        ],
        bodyFontFamily: ["Tiempos-Text"],
        overrideStyles: ({ rhythm, scale }, options) => {
            return {
                h1: { marginTop: rhythm(4) },
                h2: {
                    marginTop: rhythm(2)
                },
                'ol': {
                    marginLeft: "0px"
                },
                a: {
                    color: "#AF4B5A"
                },
                'ol li': {
                    // marginLeft: `-${rhythm(1)}`,
                    // paddingLeft: rhythm(1)

                },
                'ol li ol': {
                    paddingBottom: rhythm(1 / 2)
                },
                'li::before': {
                    width: rhythm(1),
                    marginLeft: `-${rhythm(1)}`,
                    display: 'inline-block',
                    lineHeight: rhythm(1),
                    fontSize: "8pt",
                    verticalAlign: "middle"
                },
                '.sidenote': {
                    fontSize: '10pt',
                    lineHeight: 1.61
                },
                '@media only screen and (max-width:480px)': {
                    html: {
                        fontSize: "14px"
                    }
                },
                "@media only print": {
                    html: {
                        fontSize: "9.5pt"
                    },
                    '.sidenote': {
                        fontSize: '7pt',
                        lineHeight: 1.61
                    }
                }
            }
        }
    }
)
const { scale, rhythm } = typography;
export default typography