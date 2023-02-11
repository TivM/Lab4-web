import React from 'react';

const GraphSvg1 = (props) => {
  return (

    //для r === 2
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      {/* X-Axis */}
      <line x1="0" y1="150" x2="300" y2="150" stroke="black" />
      <polygon points="150,0 145,15 155,15" />

      {/* Y-Axis */}
      <line x1="150" y1="0" x2="150" y2="300" stroke="black" />
      <polygon points="300,150 285,145 285,155" />
              <line x1="125"
                     x2="125"
                     y1="155"
                     y2="145"
                     stroke="black"/>
              <line x1="175"
                     x2="175"
                     y1="155"
                     y2="145"
                     stroke="black"/>
          
               <line x1="50"
                     x2="50"
                     y1="155"
                     y2="145"
                     stroke="black"/>
               
               <line x1="100"
                     x2="100"
                     y1="155"
                     y2="145"
                     stroke="black"/>

               <line x1="75"
                     x2="75"
                     y1="155"
                     y2="145"
                     stroke="black"/> 

               <line x1="225"
                     x2="225"
                     y1="155"
                     y2="145"
                     stroke="black"/>            

               <line x1="200"
                     x2="200"
                     y1="155"
                     y2="145"
                     stroke="black"/>
               <line x1="250"
                     x2="250"
                     y1="155"
                     y2="145"
                     stroke="black"/>

              <line x1="145"
                     x2="155"
                     y1="75"
                     y2="75"
                     stroke="black"/>

              <line x1="145"
                     x2="155"
                     y1="225.0"
                     y2="225.0"
                     stroke="black"/>

               {/* <!-- Метки для значений R на оси Y --> */}
               <line x1="145"
                     x2="155"
                     y1="50"
                     y2="50"
                     stroke="black"/>
               <line x1="145"
                     x2="155"
                     y1="100"
                     y2="100"
                     stroke="black"/>
               <line x1="145"
                     x2="155"
                     y1="200"
                     y2="200"
                     stroke="black"/>
               <line x1="145"
                     x2="155"
                     y1="250"
                     y2="250"
                     stroke="black"/>
              <line x1="145"
                     x2="155"
                     y1="125"
                     y2="125"
                     stroke="black"/>
              <line x1="145"
                     x2="155"
                     y1="175"
                     y2="175"
                     stroke="black"/>

                    {/* Triangle */}
               <polygon id='triangle1' points="0,0 0,0 0,0"
                    fill="blue" fillOpacity="0.25" stroke="darkblue" strokeOpacity="0.5" />

                    {/* Rectangle */}
                <polygon id='rectangle1' points="0,0 0,0 0,0 0,0"
                     fill="green" fillOpacity="0.25" stroke="darkgreen" strokeOpacity="0.5" />

      
                    {/* Circle */}
                 <path id='circle1' d="M 0 0 A 0 0 0 0 0 0 0 L 0 0 Z"
                     fill="yellow" fillOpacity="0.25" stroke="#CCCC00" strokeOpacity="0.5" />




                     {/* Triangle */}
               <polygon id='triangle2' points="0,0 0,0 0,0"
                    fill="blue" fillOpacity="0.25" stroke="darkblue" strokeOpacity="0.5" />

                    {/* Rectangle */}
                <polygon id='rectangle2' points="0,0 0,0 0,0 0,0"
                     fill="green" fillOpacity="0.25" stroke="darkgreen" strokeOpacity="0.5" />

      
                    {/* Circle */}
                 <path id='circle2' d="M 0 0 A 0 0 0 0 0 0 0 L 0 0 Z"
                     fill="yellow" fillOpacity="0.25" stroke="#CCCC00" strokeOpacity="0.5" />



                     {/* Triangle */}
               <polygon id='triangle3' points="0,0 0,0 0,0"
                    fill="blue" fillOpacity="0.25" stroke="darkblue" strokeOpacity="0.5" />

                    {/* Rectangle */}
                <polygon id='rectangle3' points="0,0 0,0 0,0 0,0"
                     fill="green" fillOpacity="0.25" stroke="darkgreen" strokeOpacity="0.5" />

      
                    {/* Circle */}
                 <path id='circle3' d="M 0 0 A 0 0 0 0 0 0 0 L 0 0 Z"
                     fill="yellow" fillOpacity="0.25" stroke="#CCCC00" strokeOpacity="0.5" />





                     {/* Triangle */}
               <polygon id='triangle4' points="0,0 0,0 0,0"
                    fill="blue" fillOpacity="0.25" stroke="darkblue" strokeOpacity="0.5" />

                    {/* Rectangle */}
                <polygon id='rectangle4' points="0,0 0,0 0,0 0,0"
                     fill="green" fillOpacity="0.25" stroke="darkgreen" strokeOpacity="0.5" />

      
                    {/* Circle */}
                 <path id='circle4' d="M 0 0 A 0 0 0 0 0 0 0 L 0 0 Z"
                     fill="yellow" fillOpacity="0.25" stroke="#CCCC00" strokeOpacity="0.5" />




                     {/* Triangle */}
               <polygon id='triangleM1' points="0,0 0,0 0,0"
                    fill="blue" fillOpacity="0.25" stroke="darkblue" strokeOpacity="0.5" />

                    {/* Rectangle */}
                <polygon id='rectangleM1' points="0,0 0,0 0,0 0,0"
                     fill="green" fillOpacity="0.25" stroke="darkgreen" strokeOpacity="0.5" />

      
                    {/* Circle */}
                 <path id='circleM1' d="M 0 0 A 0 0 0 0 0 0 0 L 0 0 Z"
                     fill="yellow" fillOpacity="0.25" stroke="#CCCC00" strokeOpacity="0.5" />




                     {/* Triangle */}
               <polygon id='triangleM2' points="0,0 0,0 0,0"
                    fill="blue" fillOpacity="0.25" stroke="darkblue" strokeOpacity="0.5" />

                    {/* Rectangle */}
                <polygon id='rectangleM2' points="0,0 0,0 0,0 0,0"
                     fill="green" fillOpacity="0.25" stroke="darkgreen" strokeOpacity="0.5" />

      
                    {/* Circle */}
                 <path id='circleM2' d="M 0 0 A 0 0 0 0 0 0 0 L 0 0 Z"
                     fill="yellow" fillOpacity="0.25" stroke="#CCCC00" strokeOpacity="0.5" />



                     {/* Triangle */}
               <polygon id='triangleM3' points="0,0 0,0 0,0"
                    fill="blue" fillOpacity="0.25" stroke="darkblue" strokeOpacity="0.5" />

                    {/* Rectangle */}
                <polygon id='rectangleM3' points="0,0 0,0 0,0 0,0"
                     fill="green" fillOpacity="0.25" stroke="darkgreen" strokeOpacity="0.5" />

      
                    {/* Circle */}
                 <path id='circleM3' d="M 0 0 A 0 0 0 0 0 0 0 L 0 0 Z"
                     fill="yellow" fillOpacity="0.25" stroke="#CCCC00" strokeOpacity="0.5" />





                     {/* Triangle */}
               <polygon id='triangleM4' points="0,0 0,0 0,0"
                    fill="blue" fillOpacity="0.25" stroke="darkblue" strokeOpacity="0.5" />

                    {/* Rectangle */}
                <polygon id='rectangleM4' points="0,0 0,0 0,0 0,0"
                     fill="green" fillOpacity="0.25" stroke="darkgreen" strokeOpacity="0.5" />

      
                    {/* Circle */}
                 <path id='circleM4' d="M 0 0 A 0 0 0 0 0 0 0 L 0 0 Z"
                     fill="yellow" fillOpacity="0.25" stroke="#CCCC00" strokeOpacity="0.5" />
              


              




               {/* <!-- Подписи к осям --> */}
               <text x="285" y="135" fill="black">X</text>
               <text x="160" y="15" fill="black">Y</text>
{/* <!--                Значения R на оси X --> */}
               <text x="40"
                     y="140" fill="black" fontSize="14">-4</text>
               <text x="67.5"
                     y="140" fill="black" fontSize="14">-3</text>
               <text x="93"
                     y="140" fill="black" fontSize="14">-2</text>
               <text x="122.5"
                     y="140" fill="black" fontSize="14">-1</text> 
               <text x="173.75"
                     y="140" fill="black" fontSize="14">1</text>                    
               <text x="197"
                     y="140" fill="black" fontSize="14">2</text>
               <text x="221.25"
                     y="140" fill="black" fontSize="14">3</text>
               <text x="245"
                     y="140" fill="black" fontSize="14">4</text>
               {/* <!-- Значения R на оси Y --> */}
               <text x="160"
                     y="52.5" fill="black" fontSize="14">4</text>
               <text x="160"
                     y="76.875" fill="black" fontSize="14">3</text>
               <text x="160"
                     y="102.5" fill="black" fontSize="14">2</text>
               <text x="160"
                     y="125.625" fill="black" fontSize="14">1</text>
               <text x="160"
                     y="175.625" fill="black" fontSize="14">-1</text>
               <text x="160"
                     y="200.5" fill="black" fontSize="14">-2</text>
               <text x="160"
                     y="226.875" fill="black" fontSize="14">-3</text>
               <text x="160"
                     y="252.5" fill="black" fontSize="14">-4</text>
                     </svg>
  );
}



export default GraphSvg1;
