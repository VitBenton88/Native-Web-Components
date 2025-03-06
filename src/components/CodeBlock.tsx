import React from 'react';

export type Language =
  | "js"       // JavaScript
  | "ts"       // TypeScript
  | "html"     
  | "css"      
  | "json"     
  | "sh"       // Shell/Bash
  | "py"       // Python
  | "java"     
  | "cs"       // C#
  | "cpp"      // C++
  | "php"      
  | "rb"       // Ruby
  | "go"       
  | "swift"    
  | "kt"       // Kotlin
  | "sql"      
  | "yaml"     
  | "md";      // Markdown

type CodeBlockProps = {
	code: string;
	language: Language;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }): React.ReactNode => {
	return (
		<pre>
			<code data-testid='codeCanvas' className={`language-${language}`}>{code}</code>
		</pre>
	);
};

export default CodeBlock;