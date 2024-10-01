import { useState } from 'react';
import axios from 'axios';

export default function FundWallet() {
  const [amount, setAmount] = useState('');
  const [confirming, setConfirming] = useState(false); // For payment confirmation step
  const [isProcessing, setIsProcessing] = useState(false); // For showing loading during payment

  const handleFundWallet = async () => {
    try {
      setIsProcessing(true); // Start processing
      const response = await axios.post('/api/initiate-payment', { amount });
      window.location.href = response.data.paymentUrl; // Redirect to Paystack payment page
    } catch (error) {
      console.error('Error funding wallet:', error);
      alert('Failed to fund wallet');
    } finally {
      setIsProcessing(false); // Stop processing
    }
  };

  const handleConfirm = () => {
    setConfirming(true); // Move to confirmation step
  };

  const handleCancel = () => {
    setConfirming(false); // Cancel confirmation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Fund Wallet</h2>

      {!confirming ? (
        <>
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
          <h3 className="text-xl font-bold mb-4">Confirm Fund Wallet</h3>
          <p><strong>Amount:</strong> ₦{amount}</p>
          <div className="mt-4">
            <button
              onClick={handleFundWallet}
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

