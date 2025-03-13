import { render, screen, cleanup } from '@testing-library/react';
import Picture, { type ImageData, type PictureSource } from '../Picture';

const mockImgData: ImageData = {
  alt: 'trst al text',
  height: '10px',
  width: '10px',
  loadingStrategy: 'eager',
  src: '/test.jpg',
  sizes: '',
};

const mockSources: PictureSource[] = [
  {
    srcset: '/test-2x.jpg 2x, /test-3x.jpg 3x',
    media: '(max-width: 799px)',
    type: 'image/jpeg',
  },
  {
    srcset: './lighthouse-1x.jpg 1x, ./lighthouse-2x.jpg 2x, ./lighthouse-3x.jpg 3x',
    media: '(min-width: 800px)',
    type: 'image/jpeg',
  },
];

describe('Picture', () => {
  const renderComponent = ({ img = mockImgData, sources = [] as PictureSource[] }) =>
    render(<Picture img={img} sources={sources} />);

  const elements = {
    get image() { return screen.getByTestId('img'); },
    get picture() { return screen.getByTestId('picture'); },
    get sources() { return screen.queryAllByTestId('source'); },
  };

  afterEach(cleanup);

  describe('renders', () => {
    describe('default', () => {
      beforeEach(() => {
        renderComponent({});
      });

      it('should render visible picture and img elements', () => {
        const { image, picture } = elements;

        expect(image).toBeInTheDocument();
        expect(image).toBeVisible();
        expect(picture).toBeInTheDocument();
        expect(picture).toBeVisible();
      });

      it('should not render any source elements', () => {
        expect(elements.sources.length).toBe(0);
      });

      it('should render correct img attributes', () => {
        const { image } = elements;
        const { alt, height, width, loadingStrategy, src, sizes } = mockImgData;

        expect(image).toHaveAttribute('alt', alt);
        expect(image).toHaveAttribute('height', height);
        expect(image).toHaveAttribute('width', width);
        expect(image).toHaveAttribute('loading', loadingStrategy);
        expect(image).toHaveAttribute('src', src);
        expect(image).toHaveAttribute('sizes', sizes);
      });
    });

    describe('with sources', () => {
      beforeEach(() => {
        renderComponent({ img: mockImgData, sources: mockSources });
      });

      it('should render correct amount of source elements', () => {
        expect(elements.sources.length).toBe(mockSources.length)
      });
    });
  });
});