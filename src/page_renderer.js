import React from 'react'
import { BrowserRouter} from 'react-router-dom';


const generatePage = page => {
    try {
        const Component = require(`./pages/${page}`).default
        return <Component />;
    } catch (err) {
        console.warn(err)
        return 'Under Construction'
    }
}

const PageRenderer = () => {
    const {
        params: { page }
    } = BrowserRouter()

    return generatePage(page)
}

export default PageRenderer
