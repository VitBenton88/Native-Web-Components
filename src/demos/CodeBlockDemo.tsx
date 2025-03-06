import CodeBlock from "../components/CodeBlock";

const CodeBlockDemo: React.FC = (): React.ReactNode => {
	const codeString = `
() => console.log("Hello, world!")
	`;

	return (
		<article>
			<h2>Code blocks</h2>
			<figure>
				<figcaption>JavaScript Example:</figcaption>
					<CodeBlock code={codeString} language="js" />
			</figure>
		</article>
	)
}

export default CodeBlockDemo
