

// import Link from 'next/link';


// export default function Nav() {
//     return (
//         <div className="w-full bg-gray-800 p-4">
//             <div className="flex items-center space-x-2">
//                 <img
//                     src="/path/to/your/image.png" 
//                     alt="User Avatar" 
//                     className="w-8 h-8 rounded-full"
//                 />
//                 <div>
//                     <p className="text-xs italic text-white">Welcome John</p> 
//                     <p className="text-xs italic text-white">Experience Swift bill payments</p>
//                 </div>
//             </div>
//         </div>
//     );
// }
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img
          src="/path/to/your/image.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="text-xs italic">Welcome John</p>
          <p className="text-xs italic">Experience Swift bill payments</p>
        </div>
      </div>

      <div className="space-x-4">
        <Link href="/login">
          <span className="text-sm bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 cursor-pointer">
            Login
          </span>
        </Link>
        <Link href="/signup">
          <span className="text-sm bg-green-500 py-2 px-4 rounded hover:bg-green-600 cursor-pointer">
            Sign Up
          </span>
        </Link>
      </div>
    </nav>
  );
}
