import { useState } from "react";
import './App.css'

import Dialog from "./components/Dialog"
import Picture from "./components/Picture"
import { SourceType, MediaQueryTypes } from "./components/Picture"

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isModalDialogOpen, setIsModalDialogOpen] = useState(false);

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
      srcset: './lighthouse-1x.jpg 1x, ./lighthouse-mobile-2x.jpg 2x, ./lighthouse-mobile-3x.jpg 3x',
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
      <h1>Native web components!</h1>
      <article>
        <h2>Responsive & dynamic images</h2>
        <figure>
          <Picture fallback={fallbackImage} sources={resolutionSources} />
          <figcaption>An image that is loaded by device resolution 👆</figcaption>
        </figure>

        <figure>
          <Picture fallback={fallbackImage} sources={widthSources} />
          <figcaption>An image that is loaded by device size & resolution 👆</figcaption>
        </figure>
      </article>

      <article>
        <h2>Dialogs and modals</h2>
        <div>
          <button onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
          <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
            <h2>Dialog Content</h2>
            <p>This is the dialog content.</p>
            <button onClick={() => setIsDialogOpen(false)}>Close</button>
          </Dialog>
        </div>

      <div>
        <button onClick={() => setIsModalDialogOpen(true)}>Open Modal Dialog</button>
        <Dialog useModal isOpen={isModalDialogOpen} onClose={() => setIsModalDialogOpen(false)}>
          <h2>Modal Dialog Content</h2>
          <p>This is the dialog content.</p>
          <button onClick={() => setIsModalDialogOpen(false)}>Close</button>
        </Dialog>
      </div>
      </article>
    </>
  )
}

export default App
