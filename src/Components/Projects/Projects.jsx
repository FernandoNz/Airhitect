import React from "react"
import styles from "../Projects/Projects.module.css"
import Project from "../Project/Project"
import img_1 from "../../img/2.jpg"
import img_2 from "../../img/3.jpg"
import img_4 from "../../img/5.jpg"

function Projects() {
	return (
		<section
			tabIndex='1'
			aria-label='Sección de proyectos'
			className={styles.projects}
		>
			<h2>Proyectos</h2>
			<Project img={img_1} />
			<Project img={img_2} />
			<Project img={img_4} />
		</section>
	)
}

export default Projects
