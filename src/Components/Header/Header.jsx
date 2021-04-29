import React from "react"
import styles from "../Header/Header.module.css"
import Menu from "../Menu/Menu"

function Header() {
	return (
		<header className={styles.header}>
			<Menu />
			<h2 className={styles.title}>
				<span>dedicated </span>
				<span>to the </span>
				<span>future </span>
			</h2>
		</header>
	)
}

export default Header
