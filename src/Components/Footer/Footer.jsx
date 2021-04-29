import React from "react"
import styles from "../Footer/Footer.module.css"
import Form from "../Form/Form"
import { FaEnvelope } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"

function Footer() {
	return (
		<footer
			tabIndex='2'
			aria-label='Sección de Contacto'
			className={styles.footer}
		>
			<h2>Contacto</h2>

			<div className={styles.contact_wrap}>
				<address>
					<FaEnvelope />
					<a href='mailto:info@airhitect.com'>info@airhitect.com</a>
					<br />
					<div className={styles.tel_wrap}>
						<FaPhoneAlt></FaPhoneAlt>
						<a href='tel:+12 34567 890'>+12 34567 890</a>

						<a href='tel:+09 87 654 321'>+09 87 654 321</a>
					</div>
					<FaMapMarkerAlt /> <br />
					1012 Ciudad de Mexico <br />
					Marvani uta 16
				</address>
				<div className={styles.more_wrap}>
					<span>Lorem ipsum dolor </span>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
						porro minima quaerat labore, similique nulla voluptates odio
						perferendis saepe ut, accusamus placeat reprehenderit aliquam
						adipisci dignissimos dicta hic fugit molestias.
					</span>
				</div>
				<Form />
			</div>

			<div className={styles.map}>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7527.727349926121!2d-99.16849220566006!3d19.375054650171773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2zQ2l1ZGFkIGRlIE3DqXhpY28sIENETVgsIE3DqXhpY28!5e0!3m2!1ses!2sar!4v1619595699807!5m2!1ses!2sar'
					loading='lazy'
					title='Google maps situado en la Ciudad de México'
				></iframe>
			</div>
		</footer>
	)
}

export default Footer
