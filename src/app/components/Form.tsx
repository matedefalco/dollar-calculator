"use client"

import React from "react"

function Form({
	value,
	onChange,
}: {
	value: number
	onChange: (amount: number) => void
}) {
	return (
		<form className="w-full">
			<label className="block space-y-3 text-lg">
				<span className="text-black">Monto en ARS:</span>
				<input
					className="block w-full rounded-full bg-gray-300 p-2 text-right text-3xl"
					type="number"
					value={value}
					onChange={(e) => onChange(Number(e.target.value))}
				/>
			</label>
		</form>
	)
}

export default Form
