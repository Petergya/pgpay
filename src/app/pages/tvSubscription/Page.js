// // pages/subscribe-tv.js
// import { useState } from 'react';

// export default function SubscribeTV() {
//   const [subscriptionType, setSubscriptionType] = useState('');

//   const handleSubscribe = () => {
//     // Logic to subscribe to a TV service
//     alert(`Subscribed to ${subscriptionType} service!`);
//   };

//   return (
//     <div>
//       <h2>Subscribe to TV Service</h2>
//       <input
//         type="text"
//         placeholder="Subscription Type"
//         value={subscriptionType}
//         onChange={(e) => setSubscriptionType(e.target.value)}
//       />
//       <button onClick={handleSubscribe}>Subscribe</button>
//     </div>
//   );
// }
import { useState } from 'react';
import axios from 'axios';

export default function TVSubscription() {
  const [serviceId, setServiceId] = useState('');
  const [plan, setPlan] = useState('');
  const [smartCardNumber, setSmartCardNumber] = useState('');
  const [confirming, setConfirming] = useState(false); // For payment confirmation
  const [isProcessing, setIsProcessing] = useState(false); // For showing loading during payment

  const handleSubscription = async () => {
    try {
      setIsProcessing(true); // Start loading
      const response = await axios.post('/api/subscribe-tv', {
        serviceId,
        plan,
        smartCardNumber
      });
      alert('Subscription successful!');
    } catch (error) {
      console.error(error);
      alert('Error subscribing');
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
    <div className="p-4 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">TV Subscription</h2>
      {!confirming ? (
        <>
          <input
            type="text"
            placeholder="Service ID (DSTV/GOTV/Netflix)"
            value={serviceId}
            onChange={e => setServiceId(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <input
            type="text"
            placeholder="Plan"
            value={plan}
            onChange={e => setPlan(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <input
            type="text"
            placeholder="Smart Card Number"
            value={smartCardNumber}
            onChange={e => setSmartCardNumber(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <button onClick={handleConfirm} className="bg-blue-500 text-white py-2 px-4 rounded">
            Confirm and Proceed to Payment
          </button>
        </>
      ) : (
        <>
          <h3 className="text-lg font-bold mb-4">Confirm Subscription Details</h3>
          <p><strong>Service ID:</strong> {serviceId}</p>
          <p><strong>Plan:</strong> {plan}</p>
          <p><strong>Smart Card Number:</strong> {smartCardNumber}</p>
          <div className="mt-4">
            <button
              onClick={handleSubscription}
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
