

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMember } from './userSlice';

const UserList = () => {
    const userList = useSelector((state) => state.user)
    const [user,setUser] = useState({})
    const dispatch = useDispatch()
    function changer(e){
        setUser((p)=>({
            ...p,
            [e.target.name]:e.target.value
        }))
    }
    return (
        <div className="container">
        <h1>전체 회원 수 : {userList.count}</h1>
        <label>
          이름 : <input type="text" name="name" onChange={changer} />
        </label>
        <label>
          나이 : <input type="number" name="age" onChange={changer} />
        </label>
        <label>
          지역 : <input type="text" name="address" onChange={changer} />
        </label>
        <button
          className="addBtn"
          onClick={() => {
            dispatch(addMember(user));
          }}
        >
          추가
        </button>
      </div>
    );
};

export default UserList;