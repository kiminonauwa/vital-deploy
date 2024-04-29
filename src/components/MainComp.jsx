import React, { useContext } from 'react';
import { DataContext } from "../helper/Context";

function MainComp() {
const { selectedUser, admin, setAdmin } = useContext(DataContext)

  return (
    <div className='bg-[#f29d0a] p-4 w-full'>
        <h2 className='text-[#201261] mb-5 font-bold text-2xl pb-3 md:text-3xl'>VITAL SIGNS READINGS</h2>
        <div className='grid lg:grid-cols-3' >
        <div>
            
            <h6>Name: {selectedUser.value ? (<span className='font-semibold text-[#201261]'>{[selectedUser.value.first_name, selectedUser.value.middle_name, selectedUser.value.last_name].join(' ')}</span>) : null}</h6>
            <h6>Age: {selectedUser.value ? (<span className='font-semibold text-[#201261]'>{selectedUser.value.age}</span>) : null}</h6>
        </div>
        <div>
        <h6>Birthdate: {selectedUser.value ? (<span className='font-semibold text-[#201261]'>{new Date(selectedUser.value.birthday).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: "UTC" })}</span>) : null}</h6>
            <h6>Gender: {selectedUser.value ? (<span className='font-semibold text-[#201261]'>{selectedUser.value.gender}</span>) : null}</h6>
        </div>
        <div>
            <input placeholder = 'Name' className='w-75  px-1 hidden lg:block font-bold text-[#201261]' value={admin} onChange={(e) => setAdmin(e.target.value)} />
            <h6 className='text-gray-500'>Checked By: {selectedUser.value ? (<span>{selectedUser.value.checked_by}</span>) : null}</h6>
        </div>
        </div>


    </div>
  )
}

export default MainComp