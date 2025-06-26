require('dotenv').config();
const express= require('express');
const app= express();
const port = 5000;


app.use(express.json())

const apikey=process.env.apikey
function getYYMMDDHHmm() {
  const now = new Date();

  const pad = (num) => num.toString().padStart(2, '0');

  const year = now.getFullYear().toString().slice(-2); // last 2 digits of year
  const month = pad(now.getMonth() + 1); // months are 0-based
  const day = pad(now.getDate());
  const hour = pad(now.getHours());
  const minute = pad(now.getMinutes());

  return `${year}${month}${day}${hour}${minute}`;
}
const weatherdata =()=>{
     const response=  fetch (
         `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=${apikey}&units=metric`

         
     )
     return response
}

app.get('/api/health',async(req,res)=>{
    try{

        const data=await weatherdata()
    
        if (!data.ok)
        {
            throw new error("Failed to fetch weather data");

        }

        res.status(200).json({
            success:true,
            status:'up'
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            status:'not reachable'

        })
    }
})

app.get('/api/hello',async(req,res)=>{
    const data=await weatherdata();
    const resdata=await data.json();
    
    
    
    //const temp=data.main.temp;

    res.status(200).json({
       hostname:"server1",
       datetime:getYYMMDDHHmm(),
       version:"1.0.0",
       weather:{
         "dhaka":{
         temperature:resdata.main.temp,
         temp_unit:'c'

       }
    }


    })
})


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})