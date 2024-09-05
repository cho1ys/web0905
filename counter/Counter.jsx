import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {decrement, increment, incrementByAmount} from './counterSlice'
const Counter = () => {
    const count = useSelector((s)=>s.counter.value)
    const dis = useDispatch()
    const [amount,setAmount] = useState(0)
    return (
        <div>
            <h1>현재 카운터 값 : {count}</h1>
            <button onClick={()=> dis(increment())}>+1</button>
            <button onClick={()=> dis(decrement())}>-1</button>
            <input type="number" onChange={(e)=>{setAmount(e.target.value)}} />
            <button onClick={()=> dis(incrementByAmount(parseInt(amount)))}>+</button>
        </div>
    );
};

export default Counter;