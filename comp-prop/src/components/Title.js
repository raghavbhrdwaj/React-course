//  export default function Title(props){

   
//         // return(
//         //     <div>
//         //     <h1 className="title">
//         //       Manas Kingdom
//         //     </h1>
//         //     <br/>
//         //     <h1 className="sub-title">
//         //         loda lassan
//         //     </h1>
//         //     </div>
//         // )

//         return(
//             <div>
//             <h1 className="title">
//               {props.title}
//             </h1>
//             <br/>
//             <h1 className="sub-title">
//                 {props.subtitle}
//             </h1>
//             </div>
//         )

//  }

 export default function Title({title, subtitle}){

   
        // return(
        //     <div>
        //     <h1 className="title">
        //       Manas Kingdom
        //     </h1>
        //     <br/>
        //     <h1 className="sub-title">
        //         loda lassan
        //     </h1>
        //     </div>
        // )

        // return(
        //     <div>
        //     <h1 className="title">
        //       {title}
        //     </h1>
        //     <br/>
        //     <h1 className="sub-title">
        //         {subtitle}
        //     </h1>
        //     </div>
        // )

        return(
            <>
            <h1 className="title">
              {title}
            </h1>
            <br/>
            <h1 className="sub-title">
                {subtitle}
            </h1>
            </>
        )

 }