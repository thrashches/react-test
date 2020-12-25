import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDom from "react-dom";
import './index.css';

var value = ""

function inputType (arg) {
    value = arg
}



const inputForm = (
    <div>
    <input class="form-control" type="text"/>
    <h3>{value}</h3>
    </div>
);


function ActionLink() {
    let stat = 0
    function handleClick(){
        console.log(stat);
        stat += 1;
        document.getElementById('stat').textContent = stat
    }
    return (
        <a href="#" onClick={handleClick} >press me</a>
        
    );
}


class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};

    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState(
            {date : new Date()}
        );
    }

    render() {
    return (
        <h2 id={this.props.id}>Now is: {this.state.date.toLocaleTimeString()}.</h2>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome Back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please Login!</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
    
}



class Toggle extends React.Component {
    constructor (props){
        super(props);
        this.state = {isToggleOn: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        })); 
        Greeting.props.isLoggedIn=true;
    }

    render() {
        return (
            <button class= {this.state.isToggleOn  ? "btn btn-success": "btn btn-danger"} onClick={this.handleClick}>
                {this.state.isToggleOn ? "On": "Off"}
                </button>
        );
    }
        
    
}

//----------------------------------------


function LoginButton (props) {
    return <button class='btn btn-success' onClick={props.onClick}>Login</button>;
}

function LogoutButton (props) {
    return <button class='btn btn-success' onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render (){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (!isLoggedIn) {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        else {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        return (
            <div class='container'>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );  
    }
}

//-----------------------------------------


function Mailbox (props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div class='container'>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    )
}

//-----------------------------------------

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning! Ahtung! Alarm souqquuua!!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button class="btn btn-warning" onClick={this.handleToggleClick}>
                    {this.state.showWarning ? "Hide":"Show"}
                </button>
            </div>
        );
    }
}

//-----------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = numbers.map((number) => number * 2);
const listItems = doubled.map((number) => 
    <li>{number}</li>
);



const messages = ['one', 'two', 'three', 'four'];
const nomessages = [];

//------------------------------------------------

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            select: [],
            text: 'Some text for example'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSelect(event) {
        this.setState({select: event.target.values});
    }

    handleText(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit(event) {
        alert('Send name: ' + this.state.value);
        alert('Selected values:\n' + this.state.select);
        console.log(this.state.text);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                <label>
                    Name:
                    <input type="text" class="form-control" onChange={this.handleChange} value={this.state.value}/>
                </label>
                </div>
                <div class="form-group">
                <select  class="form-control" multiple = {true} value={this.state.select} onChange={this.handleSelect} >
                    <option value="value #1">Value #1</option>
                    <option value="vlaue #2">Value #2</option>
                    <option value="value #3">Value #3</option>
                </select>
                </div>
                <div class="form-group">
                <textarea class="form-control" value={this.state.text} onChange={this.handleText}></textarea>
                <input type="submit" class="btn btn-success" value="Send"/>
                </div>
            </form>
            );
    }
}

//------------------------------------------------------------

const scaleNames = {
    c: "Цельсия",
    f: "Фаренгейта"
};

class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(e){
        //this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        // Ранее было так: const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
                <input value={temperature}
                onChange={this.handleChange} />
            </fieldset>
        );
    }
}

function toCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit (celsius) {
    return (celsius * 9) /5 + 32;
}

function tryConvert (temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    // округление до 3 цифр после запятой
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict (props) {
    if (props.celsius >= 100) {
        return <p>Zakipit.</p>;
    
    }
    return <p>Not Zakipit.</p>;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange (temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange (temperature) {
        this.setState({scale: 'f', temperature});
    }

    render () {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ?tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div class="container">
                <TemperatureInput 
                scale='c'
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange} />
                
                <TemperatureInput 
                scale='f'
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange} />
                
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}


function App() {
    return (
        <div class="container">
            <Calculator />
            
        </div>     
    );
}


ReactDom.render(
    <App />,
    document.getElementById('root'),
)