import React from 'react';

type SrcsetStringType = string | `${string}, ${string}`;
export type SourceType =
  | "image/jpeg"
  | "image/png"
  | "image/webp"
  | "image/avif"
  | "image/svg+xml"
  | "video/mp4"
  | "video/webm"
  | "video/ogg";

// Basic media query patterns
export type MediaQueryTypes =
  | `(max-width: ${string})`
  | `(min-width: ${string})`
  | `(max-height: ${string})`
  | `(min-height: ${string})`
  | `(orientation: ${"landscape" | "portrait"})`
  | `(resolution: ${string})`
  | `(aspect-ratio: ${string})`;

// Compound media queries combining multiple conditions
type MediaQuery = MediaQueryTypes | `${MediaQueryTypes} and ${MediaQueryTypes}`;

interface PictureSource {
  srcset?: SrcsetStringType;
  media?: MediaQuery;
  type?: SourceType;
}

interface FallbackImage {
  alt?: string;
  height?: string;
  width?: string;
  loadingStrategy?: 'eager' | 'lazy';
  src: string;
  srcset?: MediaQueryTypes;
  sizes?: string;
}

interface PictureProps {
  fallback: FallbackImage;
  sources?: PictureSource[]
}

const mapSources = ({ media, srcset, type }: PictureSource): React.ReactNode => (
  <source media={media} srcSet={srcset} type={type} />
);

const Picture: React.FC<PictureProps> = ({ fallback, sources }): React.ReactNode => {

  return (
    <picture>
      {sources?.length ? sources.map(mapSources) : null}

      <img 
        alt={fallback.alt}
        height={fallback.height}
        width={fallback.width}
        loading={fallback.loadingStrategy}
        src={fallback.src}
        srcSet={fallback.srcset}
        sizes={fallback.sizes}
      />
    </picture>
  );
};

export default Picture;