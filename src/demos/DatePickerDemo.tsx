import { useMemo, useState } from 'react'
import DatePicker from '../components/DatePicker'

const DatePickerDemo: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState('')
	const selectedDateToPrint = useMemo(() => {
		const parts = selectedDate.split('-')

		return new Date(
			parseInt(parts[0]),
			parseInt(parts[1]) - 1, // Add 1 to compensate for the timezone issue
			parseInt(parts[2]),
		).toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		})
	}, [selectedDate])

	const handleDateChange = (value: string): void => {
		setSelectedDate(value)
	}

	return (
		<article>
			<h2>Date selection input</h2>

			<DatePicker
				label='Pick a Date'
				min='2023-01-01'
				max='2025-12-31'
				value={selectedDate}
				required
				onChange={handleDateChange}
			/>

			{selectedDate && (
				<>
					<br />
					<span>Selected date:&nbsp;
						<time dateTime={selectedDate}>{selectedDateToPrint}</time>
					</span>
				</>
			)}
		</article>
	)
}

export default DatePickerDemo