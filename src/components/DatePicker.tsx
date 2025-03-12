import React, { useState } from 'react'

export interface DateInputProps {
  id?: string;
  name?: string;
  label?: string;
  value?: string; // Expected format: YYYY-MM-DD
  min?: string;   // Expected format: YYYY-MM-DD
  max?: string;   // Expected format: YYYY-MM-DD
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const DatePicker: React.FC<DateInputProps> = ({
  id = 'date-input',
  name = 'date',
  label,
  value = '',
  min,
  max,
  required = false,
  disabled = false,
  onChange,
}): React.ReactNode => {
  const [date, setDate] = useState(value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    setDate(newValue);
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <div>
      {
        label && (
          <>
            <label htmlFor={id} data-testid='label'>{label}</label>
            <br />
          </>
        )
      }
      <input
        type="date"
        id={id}
        name={name}
        value={date}
        min={min}
        max={max}
        required={required}
        disabled={disabled}
        onChange={handleChange}
        data-testid='dateInput'
      />
    </div>
  )
}

export default DatePicker