const Button = (prop) => {
    return <button onClick={prop.func}> {prop.text} </button>;
};

export default Button;