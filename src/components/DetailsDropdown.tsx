import React from 'react';

type DetailsProps = {
	body: string;
	title: string;
};

const DetailsDropdown: React.FC<DetailsProps> = ({ body, title }): React.ReactNode => {
	return (
		<details data-testid='details'>
			<summary data-testid='summary'>{title}</summary>
			{body}
		</details>
	);
};

export default DetailsDropdown;
