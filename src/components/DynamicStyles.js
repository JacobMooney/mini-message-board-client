import React, { useEffect } from "react";

export default function DynamicStyles(value = 'quartz') {
  return import (`bootswatch/dist/${value}/bootstrap.min.css`);
}


// const DynamicStyle = () => {

//     useEffect(() => {

//         // Declaring new date
//         let date = new Date();

//         // Defining morning and afternoon hours
//         let morning = date.getHours() <  12;

//         // Importing files depending on time of the day
//         if(morning) import (`../Styles/morning.css`);
//         else        import (`../Styles/afternoon.css`);

//     }, []);

//     return(
//         <p>This is a dynamic component.</p>
//     );

// }

// export default DynamicStyle;
