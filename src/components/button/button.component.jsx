import './button.styles.scss';


const Button = ({ children, buttonType, inputOptions }) => {
	return (
		<button
			className="button"
			{...inputOptions}
		>
        <span className="button__title">{children}</span>
			
		</button>
	);
};

export default Button;