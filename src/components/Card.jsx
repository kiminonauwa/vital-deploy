import React, { useContext } from 'react'
import CardComp from './CardComp'
import { DataContext } from '../helper/Context'
import axios from 'axios'

function Card() {
  const { selectedUser, admin, temperature, pulse, oxygen, bp } = useContext(DataContext)

  const handleUpdate = () => {
    if (!selectedUser.value || !selectedUser.value.id || !temperature || !pulse || !oxygen || !bp) {
      console.error("Missing data");
      return;
    }
    const formattedBirthday = new Date(selectedUser.value.birthday).toISOString().slice(0, 10);

    axios.post("http://localhost:3003/record", {
      id: selectedUser.value.id,
      first_name: selectedUser.value.first_name,
      middle_name: selectedUser.value.middle_name,
      last_name: selectedUser.value.last_name,
      age: selectedUser.value.age,
      birthday: formattedBirthday,
      gender: selectedUser.value.gender,
      checked_by: selectedUser.value.checked_by,
      temp: temperature,
      pulse: pulse,
      oxygen: oxygen,
      bp: bp
    }).catch((error) => {
      if (error.response) {
        console.error(error.response.data);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error(error.message);
      }
      window.location.reload();
    });
  }

  const handleCheck = () => {
    if (!selectedUser.value || !selectedUser.value.id || !admin) {
      console.error("Missing data");
      return;
    }

    axios.put("http://localhost:3003/checkUpdate", {
      id: selectedUser.value.id,
      checked_by: admin ? admin : selectedUser.value.checked_by,
    }).catch((error) => {
      if (error.response) {
        console.error(error.response.data);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error(error.message);
      }
      window.location.reload();
    });
  }

  const handleRecord = () => {
    handleUpdate()
    handleCheck()
  }

  return (
    <div className='w-full py-[1.2rem] px-4 bg-white'>
      <CardComp />

      
      <div className='mx-auto w-full py-[2rem] px-4 bg-white'>
        <button className='bg-[#f56c03] w-[200px] rounded-md font-bold my-0 mx-auto py-2 text-white hover:scale-105 mr-4'>Retake</button>
        <button className='bg-[#f56c03] w-[200px] rounded-md font-bold my-0 mx-auto py-2 text-white hover:scale-105' onClick={handleRecord}>Record</button>
      </div>
    </div>
    
  )
}

export default Card