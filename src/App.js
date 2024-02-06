// CalculateScreen Component
const CalculateScreen = () => {
    return (
        <div className="calulator">
            <div className="formulaScreen"></div>
            <div className="outputScreen" id="display">0</div>
        </div>
    );
};

// Button Component
const Button = ({className, id, value}) => {
    return (
        <button className={className} id={id} value={value}>
            {value}
        </button>
    )
}

// ButtonSet Component
const ButtonSet = () => {
    const buttons = [
        {value: 'AC', className: 'jumbo', id: 'clear'},
        {value: '/', id: 'divide'},
        {value: 'x', id: 'multiply'},
        {value: '7', id: 'seven'},
        {value: '8', id: 'eight'},
        {value: '9', id: 'nine'},
        {value: '-', id: 'subtract'},
        {value: '4', id: 'four'},
        {value: '5', id: 'five'},
        {value: '6', id: 'six'},
        {value: '+', id: 'add'},
        {value: '1', id: 'one'},
        {value: '2', id: 'two'},
        {value: '3', id: 'three'},
        {value: '0', id: 'zero', className: 'jumbo'},
        {value: '.', id: 'decimal'},
        {value: '=', id: 'equals'}
    ];

    return (
        <div>
            { buttons.map(button => (
                <Button
                    className={button.className}
                    id={button.id}
                    value={button.value}
                    key={button.id}
                />
            ))
            }
        </div>
    );
}

// Main App Component
function App() {
    return (
        <div className="app">
            Calculator Lives Here
            <CalculateScreen />
            <ButtonSet />
        </div>
    );
}

export default App;