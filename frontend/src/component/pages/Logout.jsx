import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import {SERVER_URL} from '../../../ServerURL.js'

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.post(`${SERVER_URL}/api/v1/users/logout`, {}, {
      withCredentials: true
    })
    .then((res) => {
      if(res.status !== 200){
        toast.error(res.error.message);
      }
      navigate('/login')
          })
      .catch((err) => {
        toast.error('Logout failed');
      })


  },[navigate])

  return (
    <div>
      <h2>Logout page</h2>
    </div>
  )
  }

export default Logout