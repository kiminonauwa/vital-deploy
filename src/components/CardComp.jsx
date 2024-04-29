import React, { useEffect, useContext } from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart, faHeartbeat, faPercentage, faTemperature1} from "@fortawesome/free-solid-svg-icons";
import firebase from '../firebaseConfig';
import { DataContext } from '../helper/Context';

function CardComp() {
  const { temperature, setTemperature, pulse, setPulse, bp, setBP, oxygen, setOxygen} = useContext(DataContext)
  
  

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = firebase.database().ref('Sensor');
      dbRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setTemperature(data.Body.toFixed(2));
          setPulse(data.Pulse);
          setBP(data.BP);
          setOxygen(data.Oxygen);
        }
      });
    };

    fetchData();

    return () => {
      firebase.database().ref('Sensor').off();
    };
  }, );

  return (
    <div className=' max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
      <div className='bg-[#2a1297] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <h2 className='text-2xl font-bold text-center py-8 text-[#f56c03]'>Temperature</h2>
        <p className='text-center text-6xl font-bold text-[#f9c700]'><FontAwesomeIcon icon = {faTemperature1}/> {temperature} °C</p>
        <p className='text-l font-medium text-center py-8 text-[#f9c700]'>Get Temperature</p>
       {/* <button className='bg-[#f56c03] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Temperature</button>*/}
      </div>


      <div className='bg-[#2a1297] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <h2 className='text-2xl font-bold text-center py-8 text-[#f56c03]'>Pulse Oximeter</h2>
        <p className='text-center text-5xl font-bold text-[#f9c700]'><FontAwesomeIcon icon = {faHeartbeat}/> {pulse} /min</p>
        <p className='text-center text-5xl font-bold text-[#f9c700]'><FontAwesomeIcon icon = {faPercentage}/> {oxygen} SPo2</p>
        <p className='text-l font-medium text-center py-8 text-[#f9c700]'>Get Pulse & Oxygen</p>
      </div>

      
      <div className='bg-[#2a1297] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <h2 className='text-2xl font-bold text-center py-8 text-[#f56c03]'>Blood Pressure</h2>
        <p className='text-center text-6xl font-bold text-[#f9c700]'><FontAwesomeIcon icon = {faHeart}/> {bp}</p>
        <p className='text-l font-medium text-center py-8 text-[#f9c700]'>Get Blood Pressure</p>
      {/*<button className='bg-[#f56c03] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Blood Pressure</button>*/}
      </div>
    </div>

  );
}

export default CardComp;
