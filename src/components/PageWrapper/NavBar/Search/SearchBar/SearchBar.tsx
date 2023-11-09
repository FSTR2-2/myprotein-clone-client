import { BiSearchAlt2 } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import styles from "./SearchBar.module.css";
import Button from "../../../../Button/Button";
import MobileUnderlay from "../../MobileUnderlay/MobileUnderlay";

type SearchBarPropType = {
	deactivate: () => void;
};

const SearchBar = ({ deactivate }: SearchBarPropType) => {
	return (
		<>
			<div className={styles.crossIconBox}>
				<Button handleClick={deactivate}>
					<RxCross2 className={styles.crossIcon} />
				</Button>
			</div>
			<div className={styles.container}>
				<form action="">
					<div className={styles.inputBox}>
						<input
							type="text"
							name="searchBar"
							className={styles.input}
							placeholder="Search for a product"
						/>
						<BiSearchAlt2 className={styles.icon} />
					</div>
				</form>
			</div>
			<MobileUnderlay deactivate={deactivate} />
		</>
	);
};
export default SearchBar;
