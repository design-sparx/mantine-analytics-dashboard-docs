import {useRouter} from "next/router";
import {useConfig} from 'nextra-theme-docs'

export default {
    useNextSeoProps() {
        const {asPath} = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s | DesignSparx'
            }
        }
    },
    head: () => {
        const {asPath, defaultLocale, locale} = useRouter()
        const {frontMatter} = useConfig()
        const url =
            'https://my-app.com' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

        return (
            <>
                <link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png"/>
                <link rel="icon" type="image/x-icon" href="/static/favicon.ico"/>
                <link rel="manifest" href="static/site.webmanifest"/>
                <meta property="og:url" content={url}/>
                <meta property="og:title" content={frontMatter.title || 'Design Sparx Docs'}/>
                <meta
                    property="og:description"
                    content={frontMatter.description || 'Explore our versatile dashboard website template featuring a stunning array of themes and meticulously crafted components. Elevate your web project with seamless integration, customizable themes, and a rich variety of components for a dynamic user experience. Effortlessly bring your data to life with our intuitive dashboard template, designed to streamline development and captivate users. Discover endless possibilities in design and functionality today!'}
                />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                <meta
                    name="description"
                    content="Explore our versatile dashboard website template featuring a stunning array of themes and meticulously crafted components. Elevate your web project with seamless integration, customizable themes, and a rich variety of components for a dynamic user experience. Effortlessly bring your data to life with our intuitive dashboard template, designed to streamline development and captivate users. Discover endless possibilities in design and functionality today!"/>
            </>
        )
    },
    project: {
        link: 'https://github.com/design-sparx/mantine-analytics-dashboard-docs'
    },
    logo: (
        <>
            <img src="static/logo.png" alt="Design Sparx Docs" height={16} width={16} style={{objectFit: 'contain'}}/>
            <span style={{marginLeft: '.4em', fontWeight: 800}}>
                Design Sparx
            </span>
        </>
    ),
    sidebar: {
        toggleButton: true,
        autoCollapse: true
    },
    editLink: false
}