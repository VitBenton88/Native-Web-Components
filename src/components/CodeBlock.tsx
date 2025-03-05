import React from 'react';

type CodeBlockProps = {
	code: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code }): React.ReactNode => {
	return (
		<pre>
			<code>{code}</code>
		</pre>
	);
};

export default CodeBlock;