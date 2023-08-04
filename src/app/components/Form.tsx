"use client"

import React from "react"

interface FormProps {}

function Form({}: FormProps) {
	const [amount, setAmount] = React.useState(1)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = Number(event.target.value)

		setAmount(inputValue)
	}

	return (
		<form className="w-full">
			<label>
				Monto en ARS:
				<input
					className="p-2 text-right"
					type="number"
					value={amount}
					onChange={handleInputChange}
				/>
			</label>
		</form>
	)
}

export default Form
