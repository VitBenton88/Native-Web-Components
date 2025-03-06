import { fireEvent, render, screen } from '@testing-library/react';
import FileDrop from '../FileDrop';

const mockFile = {
  name: 'test.txt',
  size: 1024,
  type: 'text/plain',
};

describe('FileDrop', () => {
  const renderComponent = () => render(<FileDrop />);

  const elements = {
    get dropzone() { return screen.queryByTestId('dropzone'); },
  };

  describe('renders', () => {
    describe('default', () => {
      beforeEach(() => {
        renderComponent();
      });

      it('should render file drop area', () => {
        expect(elements.dropzone).toBeInTheDocument();
      });
    });
  });

  describe('behavior', () => {
    describe('when dropping a file', () => {
      beforeEach(() => {
        renderComponent();

        const { name, size, type } = mockFile;

        // mock file & drop event
        const fileContent = new ArrayBuffer(size);
        const file = new File([fileContent], name, { type });
        const dataTransfer = {
          files: [file],
        };

        fireEvent.drop(elements.dropzone as HTMLBodyElement, { dataTransfer });
      });

      it('should render file details', () => {
        const { dropzone } = elements;
        const { name, size, type } = mockFile;

        expect(dropzone).toHaveTextContent(name);
        expect(dropzone).toHaveTextContent(size.toString());
        expect(dropzone).toHaveTextContent(type);
      });
    });
  });
});