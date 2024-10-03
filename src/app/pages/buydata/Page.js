import { useState } from 'react';

export default function BuyData() {
  const [dataPlan, setDataPlan] = useState('');
  const [amount, setAmount] = useState('');
  const [confirming, setConfirming] = useState(false); // For confirmation step
  const [isProcessing, setIsProcessing] = useState(false); // For showing loading during payment

  const handleBuyData = () => {
    setIsProcessing(true); // Start loading indicator
    setTimeout(() => {
      alert(`Purchased ${dataPlan} data plan for ₦${amount}!`);
      setIsProcessing(false); // Stop loading indicator
      setConfirming(false); // Reset after success
      setDataPlan(''); // Clear input
      setAmount(''); // Clear input
    }, 2000); // Simulate async process (e.g., API call)
  };

  const handleConfirm = () => {
    setConfirming(true); // Trigger confirmation step
  };

  const handleCancel = () => {
    setConfirming(false); // Cancel the confirmation step
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Buy Data</h2>

      {!confirming ? (
        <>
          <input
            type="text"
            placeholder="Data Plan"
            value={dataPlan}
            onChange={(e) => setDataPlan(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 mb-4 w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 mb-4 w-full max-w-xs"
          />
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
          >
            Confirm and Proceed to Payment
          </button>
        </>
      ) : (
        <>
          <h3 className="text-xl font-bold mb-4">Confirm Data Purchase</h3>
          <p><strong>Data Plan:</strong> {dataPlan}</p>
          <p><strong>Amount:</strong> ₦{amount}</p>
          <div className="mt-4">
            <button
              onClick={handleBuyData}
              disabled={isProcessing}
              className={`bg-green-500 text-white rounded-lg px-4 py-2 mr-4 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isProcessing ? 'Processing...' : 'Confirm and Pay'}
            </button>
            <button onClick={handleCancel} className="bg-red-500 text-white rounded-lg px-4 py-2">
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}

