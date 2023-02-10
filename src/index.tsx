import { title } from 'process'
import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello App.js</h1>
}

const Content = () => {
    return <React.Fragment>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            nulla labore nihil dolore eaque ea explicabo sapiente culpa eos
            voluptate, numquam sequi omnis cum! Sint delectus quibusdam fugiat
            vitae pariatur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            ratione, quidem labore eius iste cupiditate distinctio voluptates
            autem quaerat dolore, consectetur quas doloribus sunt, nulla
            tenetur. Minima voluptates veniam odio.
        </p>
    </React.Fragment>
}

function App() {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
