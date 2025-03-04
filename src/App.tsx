import Picture from "./components/Picture"
import { SourceType, MediaQueryTypes } from "./components/Picture"

function App() {
  const fallbackImage = {
    alt: 'Maine lighthouse during the day',
    loadingStrategy: 'lazy' as 'lazy',
    src: './lighthouse-1x.jpg',
  }

  const resolutionSources = [
    {
      srcset: './lighthouse-2x.jpg 2x, ./lighthouse-3x.jpg 3x',
      type: 'image/jpeg' as SourceType,
    },
  ]

  const widthSources = [
    {
      srcset: './lighthouse-mobile-2x.jpg 2x, ./lighthouse-mobile-3x.jpg 3x',
      media: '(max-width: 799px)' as MediaQueryTypes,
      type: 'image/jpeg' as SourceType,
    },
    {
      srcset: './lighthouse-2x.jpg 2x, ./lighthouse-3x.jpg 3x',
      media: '(min-width: 800px)' as MediaQueryTypes,
      type: 'image/jpeg' as SourceType,
    },
  ]

  return (
    <>
      <figure>
        <Picture fallback={fallbackImage} sources={resolutionSources} />
        <figcaption>An image that is loaded by device resolution 👆</figcaption>
      </figure>

      <figure>
        <Picture fallback={fallbackImage} sources={widthSources} />
        <figcaption>An image that is loaded by device screen width & resolution 👆</figcaption>
      </figure>
    </>
  )
}

export default App
