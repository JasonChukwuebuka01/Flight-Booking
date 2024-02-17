import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { deleteFlightData } from '../redux-toolkit/flightDataSlice/flightDataSlice';

const Table = () => {

    const data = useSelector(state => state.flightData.data);
    const dispatch = useDispatch();
  


 function handleDelete(id){
    dispatch(deleteFlightData(id))
 }


    return (
        <>
            {
                data.length > 0 && (
                    <div className='max-w-6xl mx-auto mt-5 bg-white'>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>DESTINATION FROM</th>
                                        <th>DESTINATION TO</th>
                                        <th>JOURNEY DATE</th>
                                        <th>GUESTS</th>
                                        <th>TRAVEL CLASS</th>
                                        <th>DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((data, index) => (
                                            <tr key={index} className="bg-base-200">
                                                <th>{data.from}</th>
                                                <td>{data.to}</td>
                                                <td>{data.date}</td>
                                                <td>{data.guests}</td>
                                                <td>{data.ticketclassName}</td>
                                                <td ><button  onClick={()=>handleDelete(data.id)} id={`${data.id}`}className='btn-xs bg-red-500 text-white'><FaDeleteLeft /></button></td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Table