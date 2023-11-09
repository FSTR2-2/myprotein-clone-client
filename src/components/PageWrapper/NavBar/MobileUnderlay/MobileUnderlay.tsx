import styles from "./MobileUnderlay.module.css";

type MobileUnderlayPropsType = {
	deactivate?: () => void;
};

const MobileUnderlay = ({ deactivate }: MobileUnderlayPropsType) => {
	return (
		<div className={styles.mobileUnderlay} onClick={deactivate}></div>
	);
};
export default MobileUnderlay;
