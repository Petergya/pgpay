import { useState } from 'react';

export default function BuyAirtime() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [confirming, setConfirming] = useState(false); 
  const [isProcessing, setIsProcessing] = useState(false); 

  const handleBuyAirtime = () => {
    setIsProcessing(true); 
    setTimeout(() => {
      alert(`Purchased airtime of ${amount} for ${phoneNumber}!`);
      setIsProcessing(false); 
      setConfirming(false); 
      setPhoneNumber(''); 
      setAmount(''); 
    }, 2000); 
  };

  const handleConfirm = () => {
    // Trigger the confirmation step
    setConfirming(true);
  };

  const handleCancel = () => {
    // Cancel the confirmation step
    setConfirming(false);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Buy Airtime</h2>
      {!confirming ? (
        <>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <button onClick={handleConfirm} className="bg-blue-500 text-white py-2 px-4 rounded">
            Confirm and Proceed to Payment
          </button>
        </>
      ) : (
        <>
          <h3 className="text-lg font-bold mb-4">Confirm Airtime Purchase</h3>
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <p><strong>Amount:</strong> ₦{amount}</p>
          <div className="mt-4">
            <button
              onClick={handleBuyAirtime}
              disabled={isProcessing}
              className={`bg-green-500 text-white py-2 px-4 rounded mr-4 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isProcessing ? 'Processing...' : 'Confirm and Pay'}
            </button>
            <button onClick={handleCancel} className="bg-red-500 text-white py-2 px-4 rounded">
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}