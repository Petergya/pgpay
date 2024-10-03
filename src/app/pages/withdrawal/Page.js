import { useState } from 'react';
import axios from 'axios';

export default function WithdrawToBank() {
  const [bankCode, setBankCode] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [confirming, setConfirming] = useState(false); 
  const [isProcessing, setIsProcessing] = useState(false); 

  const handleWithdraw = async () => {
    try {
      setIsProcessing(true); 
      const response = await axios.post('/api/withdraw-to-bank', {
        bankCode,
        accountNumber,
        amount,
      });
      alert('Withdrawal successful');
      
      setBankCode('');
      setAccountNumber('');
      setAmount('');
      setConfirming(false);
    } catch (error) {
      console.error('Error making withdrawal:', error);
      alert('Failed to withdraw funds');
    } finally {
      setIsProcessing(false); 
    }
  };

  const handleConfirm = () => {
    setConfirming(true); 
  };

  const handleCancel = () => {
    setConfirming(false); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Withdraw to Bank</h2>

      {!confirming ? (
        <>
          <input
            type="text"
            placeholder="Bank Code"
            value={bankCode}
            onChange={(e) => setBankCode(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 mb-4 w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
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
            Confirm and Proceed to Withdraw
          </button>
        </>
      ) : (
        <>
          <h3 className="text-xl font-bold mb-4">Confirm Withdrawal</h3>
          <p><strong>Bank Code:</strong> {bankCode}</p>
          <p><strong>Account Number:</strong> {accountNumber}</p>
          <p><strong>Amount:</strong> ₦{amount}</p>
          <div className="mt-4">
            <button
              onClick={handleWithdraw}
              disabled={isProcessing}
              className={`bg-green-500 text-white rounded-lg px-4 py-2 mr-4 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isProcessing ? 'Processing...' : 'Confirm and Withdraw'}
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
