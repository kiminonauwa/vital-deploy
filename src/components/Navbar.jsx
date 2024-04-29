import axios from 'axios'
import React, { useContext, useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Select from 'react-select';
import { DataContext } from '../helper/Context'

function Navbar() {
  const { user, setUser, setSelectedUser } = useContext(DataContext)
  const [open, setOpen] = useState(false)


  const handleOpen = () => {
    setOpen(!open)
  }

  const handleUsers = () => {
    axios.get("http://localhost:3003/users").then((response) => {
      setUser(response.data)
      console.log(response.data)
    }).catch((error) => {
        if (error) {
          window.location.reload();
        } else {
            console.error(error);
          }
  });
}

  const options = user.map((names) => ({
    value: names,
    label: `${names.first_name} ${names.last_name} (ID: ${names.id})`
}))


  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 justify-between items-center max-w[1240px] h-20 mx-5  px-auto'>
        <div className='' onClick={handleOpen}>
          {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>


        <div onClick={handleUsers}>
          <Select isSearchable={true} options={options} placeholder="Search" onChange={setSelectedUser}
            noOptionsMessage={({ inputValue }) => {
                if (!inputValue) {
                  return 'Please enter ID or name to search';
                }
                return `No matching names for "${inputValue}"`;
           }} />
        </div>


        <h2 className='px-10 text-white font-semibold text-xl '>NIGHTINGALE</h2>
    </div>
  )
}

export default Navbar