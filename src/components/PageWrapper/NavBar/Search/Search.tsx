import { useState } from "react";

import { BiSearchAlt2 } from "react-icons/bi";


import Button from "../../../Button/Button";

import SearchBar from './SearchBar/SearchBar'

import styles from "./Search.module.css";

const Search = () => {
	const [isActive, setIsActive] = useState(false);

	function activateSearch() {
		setIsActive(true);
	}

  function deactivateSearch() {
    setIsActive(false)
  }


	return (
		<>
			{!isActive ? (
				<Button handleClick={activateSearch}> 
					<BiSearchAlt2 className={styles.icon} />
				</Button>
			) : (
				<>
          <SearchBar deactivate={deactivateSearch} />
				</>
			)}
		</>
	);
};
export default Search;
