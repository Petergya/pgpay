// export default function Nav () {
//     return (
//         <div>
//             <p className="text-xs">Wellcome John</p>

//         </div>
//     )
// }
// components/Nav.js
export default function Nav() {
    return (
        <div className="w-full bg-gray-800 p-4">
            <div className="flex items-center space-x-2">
                <img
                    src="/path/to/your/image.png" 
                    alt="User Avatar" 
                    className="w-8 h-8 rounded-full"
                />
                <div>
                    <p className="text-xs italic text-white">Welcome John</p> 
                    <p className="text-xs italic text-white">Experience Swift bill payments</p>
                </div>
            </div>
        </div>
    );
}
