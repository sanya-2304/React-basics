function customRender(ReactElement, container){
    // const domel=document.createElement(ReactElement.type);
    // domel.innerHTML=ReactElement.children
    // domel.setAttribute('href', ReactElement.props.href)
    // domel.setAttribute('target', ReactElement.props.target)
    // container.appendChild(domel)

    const domEl=document.createElement(ReactElement.type);
    domEl.innerHTML=ReactElement.children;
    for(const prop in ReactElement.props){
        if(prop=='children')continue;
        domEl.setAttribute(prop, ReactElement.props[prop]);
    }
    container.appendChild(domEl)
}

const ReactElement={
    type:'a',
    props:{
        href:"https://gooogle.com",
        target:'_blank',
    },
    children:"Click here to visit google"

}

const mainComp=document.getElementById('root')

customRender(ReactElement, mainComp);