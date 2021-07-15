const Button = ({value, func}) => {
    return (
        <button onClick={() => func(value)}>{value}</button>
    );
};

export default Button;
