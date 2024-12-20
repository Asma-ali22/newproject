import React from "react";
import Image from "next/image";

const Company=()=>{
    return(
//         <div className="bg-slate-200 mx-36">
//             <h1 className="text-center text-4xl font-bold">Big Companies Are Here</h1>
//   <h2 className="text-center text-1xl mt-8">Problems trying to resolve the conflict between <br/>
// the two major realms of Classical physics: Newtonian mechanics </h2>
// <div className=" flex justify-center grid-cols-5 text-center mt-6 px-24 gap-4">
//     <Image
//     src="/c1.png"
//     alt="pic"
//     width={103}
//     height={34}/>

// <Image
//     src="/c2.png"
//     alt="pic"
//     width={146}
//     height={59}/>
//     <Image
//     src="/c3.png"
//     alt="pic"
//     width={102}
//     height={75}/>
//     <Image
//     src="/c4.png"
//     alt="pic"
//     width={103}
//     height={42}/>
//     <Image
//     src="/c5.png"
//     alt="pic"
//     width={104}
//     height={62}/>
    
// </div>
//         </div>
<div className="bg-slate-200 px-4 md:px-16 lg:mx-36 py-12">
  <h1 className="text-center text-2xl md:text-4xl font-bold mb-6">
    Big Companies Are Here
  </h1>
  <h2 className="text-center text-sm md:text-lg mt-4">
    Problems trying to resolve the conflict between <br />
    the two major realms of Classical physics: Newtonian mechanics.
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8 place-items-center">
    <Image src="/c1.png" alt="Company Logo 1" width={103} height={34} />
    <Image src="/c2.png" alt="Company Logo 2" width={146} height={59} />
    <Image src="/c3.png" alt="Company Logo 3" width={102} height={75} />
    <Image src="/c4.png" alt="Company Logo 4" width={103} height={42} />
    <Image src="/c5.png" alt="Company Logo 5" width={104} height={62} />
  </div>
</div>

    )
}
export default Company