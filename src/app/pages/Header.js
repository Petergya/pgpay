
  
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-orange-200 p-4 mt-4 ">
      <h1 className="text-3xl font-bold">
        Welcome to the <span className="text-3xl text-lime-600">PGPAY</span>
      </h1>
      <p className="mb-8 text-center text-xs">
        This is a fintech application for TV subscriptions, buying data, airtime, and utility bill payments.
      </p>
      
        <div className='bg- p-10 rounded-md bg-black'>
 <ul className="flex space-x-6">
  <li className="border border-lime-600 shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-lg p-2 px-12">
    <Link href="/fundwallet" className="text-lime-600 hover:underline">
      Fund Wallet
    </Link>
  </li>
  <li className="border border-lime-600 shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-lg p-2 px-12">
    <Link href="/withdrawal" className="text-lime-600 hover:underline">
      Withdraw
    </Link>
  </li>
  <li className="border border-lime-600 shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-lg p-2 px-12">
    <Link href="/banktransfer" className="text-lime-600 hover:underline">
      Transfer
    </Link>
  </li>
</ul>
        
       

        <ul className="flex space-x-6 mt-8">
          <li>
            <Link href="/tvsubscription" className="text-blue-600 hover:underline">TV</Link>
          </li>
          <li>
            <Link href="/buydata" className="text-blue-600 hover:underline">Data</Link>
          </li>
          <li>
            <Link href="/buyairtime" className="text-blue-600 hover:underline">Airtime</Link>
          </li>
          <li>
            <Link href="/payelectricity" className="text-blue-600 hover:underline">Electricity</Link>
          </li>
        </ul>
        </div>    
    </div>
  );
}
