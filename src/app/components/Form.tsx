"use client"

import React from "react"

interface FormProps {
	value: number
	onChange: (amount: number) => void
}

function Form({ value, onChange }: FormProps) {
	const [amount, setAmount] = React.useState(1)

	return (
		<form className="w-full">
			<label>
				Monto en ARS:
				<input
					className="ml-2 p-2 text-right bg-white border-solid border-2 rounded-xl"
					type="number"
					value={value}
					onChange={(e) => onChange(Number(e.target.value))}
				/>
			</label>
		</form>
	)
}

export default Form
