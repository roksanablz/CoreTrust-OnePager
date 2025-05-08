import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import CoreTrustOnePager from './components/CoreTrustOnePager';

function App() {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'CoreTrust-OnePager',
  });

  return (
    <div className="min-h-screen">
      <div className="flex justify-end p-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handlePrint}
        >
          Download as PDF
        </button>
      </div>
      <CoreTrustOnePager ref={componentRef} />
    </div>
  );
}

export default App;
