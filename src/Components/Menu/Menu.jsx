import React, { useState } from "react"

import { MenuContainer, IconBars, IconTimes } from "../Menu/Styles"

function Menu() {
	const [isActive, setIsActive] = useState(false)

	const handleClick = () => {
		setIsActive(!isActive)
	}

	return (
		<div>
			{isActive ? (
				<IconTimes onClick={handleClick} />
			) : (
				<IconBars onClick={handleClick} />
			)}

			<MenuContainer active={isActive}>
				<ul>
					<li>Proyectos</li>
					<li>Nuestro Equipo</li>
					<li>Contacto</li>
				</ul>
			</MenuContainer>
		</div>
	)
}

export default Menu
