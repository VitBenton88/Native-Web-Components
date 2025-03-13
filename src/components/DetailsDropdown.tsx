import React from 'react';

type DetailsProps = {
	body: string;
	title: string;
};

const DetailsDropdown: React.FC<DetailsProps> = ({ body, title }) => {
	return (
		<details data-testid='details'>
			<summary data-testid='summary'>{title}</summary>
			{body}
		</details>
	);
};

export default DetailsDropdown;
