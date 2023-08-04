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
			<label className="block space-y-4">
				<span>Monto en ARS:</span>
				<input
					className="block p-2 text-right w-full bg-gray-200 border-solid rounded-xl"
					type="number"
					value={value}
					onChange={(e) => onChange(Number(e.target.value))}
				/>
			</label>
		</form>
	)
}

export default Form
