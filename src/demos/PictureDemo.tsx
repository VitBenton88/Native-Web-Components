import Picture, { type SourceType, type MediaQueryTypes, type ImageData } from "../components/Picture"

const PictureDemo: React.FC = () => {
	const fallbackImage: ImageData = {
		alt: 'Maine lighthouse during the day',
		loadingStrategy: 'lazy',
		src: './lighthouse-1x.jpg',
	};

	const pictureSources = [
		{
			srcset: './lighthouse-mobile-1x.jpg 1x, ./lighthouse-mobile-2x.jpg 2x, ./lighthouse-mobile-3x.jpg 3x, ./lighthouse-mobile-4x.jpg 4x',
			media: '(max-width: 767px)' as MediaQueryTypes,
			type: 'image/jpeg' as SourceType,
		},
		{
			srcset: './lighthouse-tablet-1x.jpg 1x, ./lighthouse-tablet-2x.jpg 2x, ./lighthouse-tablet-3x.jpg 3x, ./lighthouse-tablet-4x.jpg 4x',
			media: '(max-width: 1024px)' as MediaQueryTypes,
			type: 'image/jpeg' as SourceType,
		},
		{
			srcset: './lighthouse-1x.jpg 1x, ./lighthouse-2x.jpg 2x, ./lighthouse-3x.jpg 3x, ./lighthouse-4x.jpg 4x',
			media: '(min-width: 1025px)' as MediaQueryTypes,
			type: 'image/jpeg' as SourceType,
		},
	];

	return (
		<article>
			<h2>Responsive & dynamic images</h2>

			<figure>
				<Picture img={fallbackImage} sources={pictureSources} />
				<figcaption>An image that is loaded by device size & resolution 👆</figcaption>
			</figure>
		</article>
	)
}

export default PictureDemo