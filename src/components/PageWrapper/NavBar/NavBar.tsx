import { useState } from "react";
import { Link } from "react-router-dom";

import { BiChevronRight } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";
import { BsBasket3 } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import Button from "../../Button/Button";
import MobileSearchPopup from './MobileSearchPopup/MobileSearchPopup'
import MobileUnderlay from './MobileUnderlay/MobileUnderlay';
import MobileAccountPopup from './MobileAccountPopup/MobileAccountPopup';

import { images } from "../../../assets/index";
import { type Pages } from "../../../lib/types";

import styles from "./NavBar.module.css";

const NavBar = () => {
	const [isMenuActive, setIsMenuActive] = useState(false);
	const pages: Pages = [
		"protein",
		"nutrition",
		"vitamins",
		"snacks",
		"vegan",
	];

	const activateMenu = (): void => {
		setIsMenuActive(true);
	};

	const deactivateMenu = (): void => {
		setIsMenuActive(false)
	}

	const navLinks = pages.map((page) => (
		<li key={page}>
			<Link to={`/${page}`}>
				{page}
				<BiChevronRight className={styles.icon} />
			</Link>
		</li>
	));

	return (
		<header className={styles.header}>
			<div className={styles.topContainer}>
				<div className={styles.iconContainer}>
					<Button handleClick={activateMenu}>
						<GrMenu className={styles.icon} />
					</Button>
					<MobileSearchPopup />
				</div>
				<Link to="/" className={styles.logoBox}>
					<img src={images.logo} alt="logo" className={styles.logo} />
				</Link>
				<div className={styles.iconContainer}>
					<MobileAccountPopup />
					<Button>
						<BsBasket3 className={styles.icon} />
					</Button>
				</div>
			</div>
			{isMenuActive && (
				<>
					<div className={styles.mobileMenu}>
						<div className={styles.navIcons}>
							<Link to='/' onClick={deactivateMenu}>
								<MdHome className={styles.icon} />
							</Link>
							<Button handleClick={deactivateMenu}>
								<RxCross2 className={styles.icon} />
							</Button>
						</div>
						<nav className={styles.navContainer}>
							<ul className={styles.navLinks}>{navLinks}</ul>

							<div className={styles.staticLinks}>
								<Link to="/contact">Contact us</Link>
								<Link to="/quickReturns">Quick Returns</Link>
							</div>
						</nav>
					</div>
					<MobileUnderlay deactivate={deactivateMenu}/>
				</>
			)}
		</header>
	);
};

export default NavBar;
