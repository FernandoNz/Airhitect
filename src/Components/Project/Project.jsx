import React from "react"
import styles from "../Project/Project.module.css"

function Project({ img }) {
	return (
		<div className={styles.project}>
			<div className={styles.project_img}>
				<img src={img} alt='' />
			</div>
			<div className={styles.infoWrap}>
				<h3 className={styles.infoWrap_title}>Nombre del Proyecto</h3>
				<p className={styles.infOWrap_description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
					delectus dolore temporibus dolorem mollitia impedit incidunt
				</p>
			</div>
		</div>
	)
}

export default Project
