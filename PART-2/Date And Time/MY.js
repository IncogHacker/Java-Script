

     
            //    let storedate= new Date();
            //    console.log(storedate);


            //?    ----------------------------------




            // let dateString="2024-10-01T03:34:53.980Z";

            // let datefromstring=new Date(dateString);
            // console.log(datefromstring);


            //? ___________________________________________

    
            // let yearmonth=new Date(2023 ,2);
            // console.log(yearmonth);  // This is Custom for Year and month


            let YMD= new Date(2000, 1,15);
            console.log(YMD);// This is Custom  Date of Year month and date


            let YMDT=new Date(2000 , 1 ,15, 8);
            console.log(YMDT);// Include Time


            let YMDTM= new Date(2000 ,1 ,15 ,4,23,45);
            console.log(YMDTM);


            // ------------------------------------------------------------------


            const currentmills=new Date().getTime();

            const x=new Date(currentmills);
             //----this is the number in milli-seconds

            console.log(x);