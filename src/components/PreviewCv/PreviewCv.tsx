import React, { useState } from 'react';
import { BoxProps } from '@material-ui/core';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { Box, Button, ButtonGroup } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

interface PreviewCvProps extends BoxProps {
  base64?: string;
  scale?: number;
  height?: number;
}

const PreviewCv = ({ base64, scale, height, ...rest }: PreviewCvProps) => {
  const [maxPages, setMaxPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setMaxPages(numPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      // style={{ backgroundColor: 'transparent', border: '1px solid red' }}
      {...rest}
    >
      <Document file={base64} onLoadSuccess={onDocumentLoadSuccess}>
        <Page scale={scale} height={height} pageNumber={currentPage} />
      </Document>
      <ButtonGroup>
        <Button color="secondary" disabled={currentPage === 1} onClick={handlePrevPage}>
          <ArrowBackIosIcon />
        </Button>
        <Button disabled>
          {currentPage} of {maxPages}
        </Button>
        <Button color="secondary" disabled={currentPage >= maxPages} onClick={handleNextPage}>
          <ArrowForwardIosIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

PreviewCv.defaultProps = {
  base64: undefined,
  scale: undefined,
  height: undefined,
};

export default PreviewCv;
