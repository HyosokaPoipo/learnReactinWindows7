import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    render()
    {
        let myProps = this.props.test
        return (
         <div>
            <h1> Maen React Property </h1>
            <div>{myProps}</div>
            <div> Second Props : </div>
            <div>{this.props.hisoka}</div>
         </div>
         )
    }
}

//const App = () => <h1> Hellow Hisoka Poipo... :D... This is a stateless function in reactjs :D </h1>

export default App