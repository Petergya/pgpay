import Link from 'next/link';

export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center  bg-orange-200 p-4 mt-4">
        <h1 className="text-3xl font-bold ">Welcome to the <span className='text-3xl text-lime-600'>PGPAY</span></h1>
        <p className="mb-8 text-center  text-xs">
          This is a fintech application for TV subscriptions, buying data, airtime, and utility bill payments.
        </p>
        <nav>
          <ul className="flex space-x-6">
          <li><Link href="/fund-wallet" className="text-lime-600 hover:underline">Fund Wallet</Link></li>
            <li><Link href="/fund-wallet" className="text-lime-600 hover:underline">Withdraw</Link></li>
            <li><Link href="/transfer-to-bank" className="text-lime-600 hover:underline">Transfer</Link></li>
          </ul>
          <ul className="flex space-x-6">
            
            <li><Link href="/subscribe-tv" className="text-blue-600 hover:underline"> TV</Link></li>
            <li><Link href="/buy-data" className="text-blue-600 hover:underline">Data</Link></li>
            <li><Link href="/buy-airtime" className="text-blue-600 hover:underline">Airtime</Link></li>
            <li><Link href="/pay-electricity" className="text-blue-600 hover:underline">Electricity</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  