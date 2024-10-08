function customRender(reactElement, constainer) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    constainer.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://youtube.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer)