import Picture from "./components/Picture"
import { SourceType } from "./components/Picture"

function App() {
  const fallbackImage = {
    alt: 'Maine Lighthouse',
    height: '455px',
    width: '683px',
    loadingStrategy: 'lazy' as 'lazy',
    src: '/lighthouse-1x.jpg',
  }

  const sources = [
    {
      srcset: '/lighthouse-2x.jpg 2x, /lighthouse-3x.jpg 3x',
      type: 'image/jpeg' as SourceType,
    },
  ]

  return (
    <>
      <Picture fallback={fallbackImage} sources={sources} />
    </>
  )
}

export default App
