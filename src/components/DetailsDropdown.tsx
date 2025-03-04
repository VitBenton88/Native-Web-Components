import React from 'react';

type DetailsProps = {
	body: string;
	title: string;
};

const DetailsDropdown: React.FC<DetailsProps> = ({ body, title }): React.ReactNode => {
	return (
		<details>
			<summary>{title}</summary>
			{body}
		</details>
	);
};

export default DetailsDropdown;
