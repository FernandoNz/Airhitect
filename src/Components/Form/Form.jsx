import React from "react"
import styles from "../Form/Form.module.css"
function Form() {
	const handleSubmit = e => {
		e.preventDefault()

		alert("Enviando formulario ...")
	}

	return (
		<form
			aria-label='formulario de  contacto'
			className={styles.form}
			onSubmit={handleSubmit}
		>
			<input
				aria-label='Nombre'
				className={styles.form_name}
				type='text'
				name='name'
				placeholder='Nombre'
			/>
			<input
				aria-label='Email'
				className={styles.form_email}
				type='email'
				name='email'
				placeholder='Email'
			/>
			<textarea
				aria-label='Mensaje'
				className={styles.form_message}
				name='message'
				placeholder='Mensaje'
			></textarea>
			<button
				aria-label='Boton para enviar mensaje'
				className={styles.form_btn}
				type='submit'
			>
				Enviar
			</button>
		</form>
	)
}

export default Form
