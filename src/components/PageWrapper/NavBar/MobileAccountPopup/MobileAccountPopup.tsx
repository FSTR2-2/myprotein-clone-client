import { useState } from "react";
import { Link } from 'react-router-dom';

import { GoPerson } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

import Button from "../../../Button/Button";
import MobileUnderlay from "../MobileUnderlay/MobileUnderlay";
import styles from "./MobileAccountPopup.module.css";

const MobileAccountPopup = () => {
	const [isActive, setIsActive] = useState(false);

	function handleActivatePopup() {
		setIsActive((prevIsActive) => !prevIsActive);
	}

	return (
		<>
			{!isActive ? (
				<button onClick={handleActivatePopup} className={styles.button}>
					<GoPerson className={styles.icon} />
				</button>
			) : (
				<div className={styles.popupContainer}>
					<div className={styles.crossIconBox}>
						<Button handleClick={handleActivatePopup}>
							<RxCross2 className={styles.crossIcon} />
						</Button>
					</div>
          <div className={styles.innerContainer}>
            <div className={styles.buttons}>
              <button className={styles.loginButton}>login</button>
              <button className={styles.registerButton}>register</button>
            </div>
            <div className={styles.links}>
              <Link to='#' className={styles.link}>Your Wishlist</Link>
              <Link to='#' className={styles.link}>Your Orders</Link>
            </div>
          </div>
					<MobileUnderlay deactivate={handleActivatePopup} />
				</div>
			)}
		</>
	);
};

export default MobileAccountPopup;
