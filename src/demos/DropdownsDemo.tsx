import DetailsDropdown from "../components/DetailsDropdown";

const DropdownsDemo: React.FC = (): React.ReactNode => {

	return (
		<article>
			<h2>Dropdowns</h2>
			<DetailsDropdown
				body="Something small enough to escape casual notice."
				title="Dropdown title"
			/>
		</article>

	)
}

export default DropdownsDemo