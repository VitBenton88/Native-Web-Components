import Picture, { type SourceType, type MediaQueryTypes, type ImageData } from "../components/Picture"

const PictureDemo: React.FC = (): React.ReactNode => {
	const fallbackImage: ImageData = {
		alt: 'Maine lighthouse during the day',
		loadingStrategy: 'lazy',
		src: './lighthouse-1x.jpg',
	};

	const resolutionSources = [
		{
			srcset: './lighthouse-1x.jpg 1x, ./lighthouse-2x.jpg 2x, ./lighthouse-3x.jpg 3x',
			type: 'image/jpeg' as SourceType,
		},
	];

	const widthSources = [
		{
			srcset: './lighthouse-mobile-2x.jpg 2x, ./lighthouse-mobile-3x.jpg 3x',
			media: '(max-width: 799px)' as MediaQueryTypes,
			type: 'image/jpeg' as SourceType,
		},
		{
			srcset: './lighthouse-1x.jpg 1x, ./lighthouse-2x.jpg 2x, ./lighthouse-3x.jpg 3x',
			media: '(min-width: 800px)' as MediaQueryTypes,
			type: 'image/jpeg' as SourceType,
		},
	];

	return (
		<article>
			<h2>Responsive & dynamic images</h2>
			<figure>
				<Picture img={fallbackImage} sources={resolutionSources} />
				<figcaption>An image that is loaded by device resolution 👆</figcaption>
			</figure>

			<figure>
				<Picture img={fallbackImage} sources={widthSources} />
				<figcaption>An image that is loaded by device size & resolution 👆</figcaption>
			</figure>
		</article>
	)
}

export default PictureDemo