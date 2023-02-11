export default class Drawing{

    static svgDrawing(r, m, fDr){
        //alert(r);
        //alert(ch);

        // if (r<0){
        //     r = 0;
        // }


        // let val_250 = 150 + (100 * r);
        // let val_200 = 150 + (50 * r);
        // let val_100 = 150 - (50 * r);
        // let val_50 = 150 - (100 * r);

        let val_125 = 150 - 100 * (Math.abs(r)/4);
        let val_162p5 = 150 + 50 * (Math.abs(r)/4);
        let val_137p5 = 150 - 50 * (Math.abs(r)/4);
        let val_175 = 150 + 100 * (Math.abs(r)/4);
        let circle_val = Math.abs(r) * 25;



        // let val_201 = 100 - (50 * r);
        // let val_101 = 100 + (50 * r);
        // let val_51 = 100 + (100 * r);


        //let circe_val = 100 - (33 * 2 * (1-r));


        // if (chb.checked){
        //     alert("yeees");
        // }
        // if (chb.checked == false){
        //     alert("nooo");
        // }





        // let chb = document.getElementById(m);
        // let dn = chb.getAttribute("id");

        //alert(dn);

        // if(chb.checked==false){
        //     alert("123123123");
        //     alert(chb.getAttribute("id"));
        // }




        let rect1 = document.getElementById('rectangle1');
        let triangle1 = document.getElementById('triangle1');
        let circle1 = document.getElementById('circle1');

        let rect2 = document.getElementById('rectangle2');
        let triangle2 = document.getElementById('triangle2');
        let circle2 = document.getElementById('circle2');

        let rect3 = document.getElementById('rectangle3');
        let triangle3 = document.getElementById('triangle3');
        let circle3 = document.getElementById('circle3');

        let rect4 = document.getElementById('rectangle4');
        let triangle4 = document.getElementById('triangle4');
        let circle4 = document.getElementById('circle4');


        //для отрицательных радиусов
        let rectM1 = document.getElementById('rectangleM1');
        let triangleM1 = document.getElementById('triangleM1');
        let circleM1 = document.getElementById('circleM1');

        let rectM2 = document.getElementById('rectangleM2');
        let triangleM2 = document.getElementById('triangleM2');
        let circleM2 = document.getElementById('circleM2');

        let rectM3 = document.getElementById('rectangleM3');
        let triangleM3 = document.getElementById('triangleM3');
        let circleM3 = document.getElementById('circleM3');

        let rectM4 = document.getElementById('rectangleM4');
        let triangleM4 = document.getElementById('triangleM4');
        let circleM4 = document.getElementById('circleM4');


        // let lineXMinusR = document.getElementById('lineXminusR');
        // let lineXMinirRdivTwo = document.getElementById('lineXminusRTwo');
        // let minRLetterOnX = document.getElementById('minRLetterOnX');
        // let minRDivTwoLetterOnX = document.getElementById('minRDivTwoLetterOnX');

        // let line3 = document.getElementById('line3');
        // let line4 = document.getElementById('line4');
        //alert("M " + val_175 + " 150 A " + circle_val + " " + circle_val + " 0 0 1 150 " + val_175 + " L 150 150 Z");

        if (r===1){
            rect1.setAttribute("points" , val_125 + "," + val_162p5 + " " + val_125 + ",150 150,150 150," + val_162p5);
            triangle1.setAttribute("points" , val_125 + ",150 150,150 150," + val_125);
            circle1.setAttribute("d" , "M " + val_175 + " 150 A " + circle_val + " " + circle_val + " 0 0 1 150 " + val_175 + " L 150 150 Z");
        }

        if (r===2){
            rect2.setAttribute("points" , val_125 + "," + val_162p5 + " " + val_125 + ",150 150,150 150," + val_162p5);
            triangle2.setAttribute("points" , val_125 + ",150 150,150 150," + val_125);
            circle2.setAttribute("d" , "M " + val_175 + " 150 A " + circle_val + " " + circle_val + " 0 0 1 150 " + val_175 + " L 150 150 Z");
        }

        if (r===3){
            rect3.setAttribute("points" , val_125 + "," + val_162p5 + " " + val_125 + ",150 150,150 150," + val_162p5);
            triangle3.setAttribute("points" , val_125 + ",150 150,150 150," + val_125);
            circle3.setAttribute("d" , "M " + val_175 + " 150 A " + circle_val + " " + circle_val + " 0 0 1 150 " + val_175 + " L 150 150 Z");
        }

        if (r===4){
            rect4.setAttribute("points" , val_125 + "," + val_162p5 + " " + val_125 + ",150 150,150 150," + val_162p5);
            triangle4.setAttribute("points" , val_125 + ",150 150,150 150," + val_125);
            circle4.setAttribute("d" , "M " + val_175 + " 150 A " + circle_val + " " + circle_val + " 0 0 1 150 " + val_175 + " L 150 150 Z");
        }




        //alert(val_175 + "," + val_137p5 + " " + val_175 + ",150 150,150 150," + val_137p5);

        if (r===-1){
            rectM1.setAttribute("points" , val_175 + "," + val_137p5 + " " + val_175 + ",150 150,150 150," + val_137p5);
            triangleM1.setAttribute("points" , val_175 + ",150 150,150 150," + val_175);
            circleM1.setAttribute("d" , "M " + val_125 + " 150 A " + circle_val + " " + circle_val + " 0 0 1 150 " + val_125 + " L 150 150 Z");
        }

        if (r===-2){
            rectM2.setAttribute("points" , val_175 + "," + val_137p5 + " " + val_175 + ",150 150,150 150," + val_137p5);
            triangleM2.setAttribute("points" , val_175 + ",150 150,150 150," + val_175);
            circleM2.setAttribute("d" , "M " + val_125 + " 150 A " + circle_val + " " + circle_val + " 0 0 1 150 " + val_125 + " L 150 150 Z");
        }

        if (r===-3){
            rectM3.setAttribute("points" , val_175 + "," + val_137p5 + " " + val_175 + ",150 150,150 150," + val_137p5);
            triangleM3.setAttribute("points" , val_175 + ",150 150,150 150," + val_175);
            circleM3.setAttribute("d" , "M " + val_125 + " 150 A " + circle_val + " " + circle_val + " 0 0 1 150 " + val_125 + " L 150 150 Z");
        }

        if (r===-4){
            rectM4.setAttribute("points" , val_175 + "," + val_137p5 + " " + val_175 + ",150 150,150 150," + val_137p5);
            triangleM4.setAttribute("points" , val_175 + ",150 150,150 150," + val_175);
            circleM4.setAttribute("d" , "M " + val_125 + " 150 A " + circle_val + " " + circle_val + " 0 0 1 150 " + val_125 + " L 150 150 Z");
        }



        // if (m !==0){
        //     //alert(m + "yee")
        //     checkB = document.getElementById(m);
        // }


        if(m===0){
            //alert(m);
            //alert(fDr);
            if(fDr === 4){
                rect4.setAttribute("points" , "0,0 0,0 0,0 0,0");
                triangle4.setAttribute("points" , "0,0 0,0 0,0");
                circle4.setAttribute("d" , "M 0 0 A 0 0 0 0 0 0 0 L 0 0 Z");
            }

            if(fDr === 3){
                rect3.removeAttribute("points");
                triangle3.removeAttribute("points");
                circle3.removeAttribute("d");
            }

            if(fDr === 2){
                rect2.removeAttribute("points");
                triangle2.removeAttribute("points");
                circle2.removeAttribute("d");
            }

            if(fDr === 1){
                rect1.removeAttribute("points");
                triangle1.removeAttribute("points");
                circle1.removeAttribute("d");
            }

            if(fDr === -4){
                rectM4.removeAttribute("points");
                triangleM4.removeAttribute("points");
                circleM4.removeAttribute("d");
            }

            if(fDr === -3){
                rectM3.removeAttribute("points");
                triangleM3.removeAttribute("points");
                circleM3.removeAttribute("d");
            }

            if(fDr === -2){
                rectM2.removeAttribute("points");
                triangleM2.removeAttribute("points");
                circleM2.removeAttribute("d");
            }

            if(fDr === -1){
                rectM1.removeAttribute("points");
                triangleM1.removeAttribute("points");
                circleM1.removeAttribute("d");
            }
        }



        // else if (r!=2 && ch){
        //     rect1.removeAttribute("points");
        // }


        // rect.setAttribute("points" , "150,150 150," + val_51 + " " + val_101 +"," + val_51 + " " + val_101 + ",150");
        // triangle.setAttribute("points" , "150,150 " + val_201 +",150 150," + val_101);
        //circle.setAttribute("d" , "M" + val_51 +  ",150 A" + circe_val + "," + circe_val + " 90 0,0 150," + val_251 + " L 150,150 Z");
        // lineXMinusR.setAttribute("x1" , 150 - (100 * r));
        // lineXMinusR.setAttribute("x2" , 150 - (100 * r));
        // lineXMinirRdivTwo.setAttribute("x1" , 150 - (50 * r));
        // lineXMinirRdivTwo.setAttribute("x2" , 150 - (50 * r));
        // minRLetterOnX.setAttribute("x" , 150 - (110 * r));


    }

}
