import React, { useContext, useState } from 'react'
import {Context} from '../../main'
import axios from 'axios';
import { useNavigate} from 'react-router';
import { SERVER_URL } from '../../../ServerURL.js';

const UpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const {user} = useContext(Context);
    const navigateTo = useNavigate();
    const id = user._id;
    console.log(user._id);

    const handlePassword = async (e, id, oldPassword, newPassword) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${SERVER_URL}/api/v1/users/change-password`, {
                id,
                oldPassword,
                newPassword,
            }, {
                withCredentials: true
            }
            );
            console.log(response.data);
            if(response.data.success){
                navigateTo("/");
                setNewPassword("");
                setOldPassword("");
            }
            else{
                console.log(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <br />
        <p>Change Password</p><br />
      <form className="changepass_form" method="POST">
                <input type="password" name="oldPassword" placeholder="old Password" onChange={(e) => setOldPassword(e.target.value)} required />
                <input type="password" name="newPassword" placeholder="new Password" onChange={(e) => setNewPassword(e.target.value)} required />
                <button type="submit" className="changepass-button" onClick={(e) => handlePassword(e, id, oldPassword, newPassword)}>Change Password</button>
            </form>
    </div>
  )
}

export default UpdatePassword
