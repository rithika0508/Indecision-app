console.log('app.js is running!');

// // JSX - javascript XML
const app = {
    title: 'Indecision-App',
    subTitle: 'Leave your life in the hands of a computer',
    options: []
}
let decision;
const takeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(app.options[randomNum])
    decision = app.options[randomNum]
    renderTemplate()
}
const removeAll = () => {
    app.options=[]
    decision=''
    return renderTemplate()
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    option && option.trim()!=='' && app.options.push(option)
    e.target.elements.option.value=''
    renderTemplate()
    e.target.elements.option.focus()
}
const appRoot = document.getElementById('app');     //created a div with id 'app' in index.html
const numbers = [22, 23, 24]


const renderTemplate = () => {
    const template = //es6/es7 syntax- babel is used to convert to es5
        (<div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length==0} onClick={takeDecision}>What should I do</button>
            <button onClick={removeAll}>Remove All</button>
            {decision && <p>{decision}</p>}
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add</button>
            </form>
        </div>);  //we used terenary operators here inside of jsx
    

    ReactDOM.render(template, appRoot)
}


renderTemplate()