import styles from './Button.module.css'

type ButtonPropsType = {
	children: React.ReactNode;
	handleClick?: () => void;
};

const Button = ({ children, handleClick }: ButtonPropsType) => {
	return <button className={styles.button} onClick={handleClick}>{children}</button>;
};
export default Button;
