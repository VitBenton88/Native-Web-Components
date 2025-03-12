import { useMemo, useState } from 'react'
import DatePicker from '../components/DatePicker'

const DatePickerDemo: React.FC = (): React.ReactNode => {
	const [selectedDate, setSelectedDate] = useState('')
	const selectedDateToPrint = useMemo(() => selectedDate, [selectedDate])

	const handleDateChange = (value: string): void => {
		if (value) { // 'YYYY-MM-DD' format
			const formattedDate = new Date(value).toLocaleDateString('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric',
			})
			setSelectedDate(formattedDate)
		} else {
			setSelectedDate('');
		}
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