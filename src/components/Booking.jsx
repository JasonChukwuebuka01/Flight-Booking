
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { saveFlightData } from "../redux-toolkit/flightDataSlice/flightDataSlice";
import { useDispatch, useSelector } from "react-redux";



const Booking = () => {

    const [bookingData, setBookingData] = useState({
      
    });


    const flightData = useSelector(state => state.flightData.data);
    const size = flightData.length;
    const dispatch = useDispatch();





    function handleChange(e) {
        const { name, value } = e.target;
        setBookingData(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    };




    function handleBook(e) {
        e.preventDefault();

        if (bookingData.from && bookingData.to && bookingData.date && bookingData.guests && bookingData.ticketclassName) {

            dispatch(saveFlightData({ ...bookingData, id: size + 1 }));

            setBookingData({
                from: "",
                to: "",
                date: "",
                guests: "",
                ticketclassName: ""

            })
        } else {
            alert("Please provide complete fields")
        };
    };



    return (
        <div className="md:mt-[160px] mt-[100px] mx-4 relative ">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="flex flex-col md:flex-row">

                    {/*from*/}
                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p>Destination Form</p>
                        <div className="flex flex-row">
                            <select value={bookingData.from} required onChange={(e) => handleChange(e)} name="from" id="from" className="outline-none p-2 w-full">
                                <option value="">Please Select</option>
                                <option>New York</option>
                                <option>London</option>
                                <option>Paris</option>
                                <option>Rome</option>
                            </select>
                        </div>
                    </div>

                    {/*destination to */}
                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <select value={bookingData.to} name="to" onChange={(e) => handleChange(e)} id="to" className="outline-none p-2 w-full">
                                <option value="">Please Select</option>
                                <option>New York</option>
                                <option>London</option>
                                <option>Paris</option>
                                <option>Rome</option>
                            </select>
                        </div>
                    </div>

                    {/*dates*/}
                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p>Journey Date</p>
                        <input value={bookingData.date} onChange={(e) => handleChange(e)} type="date" name="date" required className="outline-none p-2 w-full" />
                    </div>

                    {/*Guest*/}
                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p>Guest</p>
                        <div className="flex flex-row">
                            <select value={bookingData.guests} onChange={(e) => handleChange(e)} name="guests" id="guests" className="outline-none p-2 w-full">
                                <option value="">Please Select</option>
                                <option>1 Person</option>
                                <option>2 Person</option>
                                <option>3 Person</option>
                                <option>4 Person </option>
                            </select>
                        </div>
                    </div>

                    {/*Travel class*/}
                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p>Travel Class</p>
                        <div className="flex flex-row">
                            <select value={bookingData.ticketclassName} onChange={(e) => handleChange(e)} required name="ticketclassName" id="ticketclassName" className="outline-none p-2 w-full">
                                <option value="">Please Select</option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    {/*button*/}
                    <button onClick={(e) => handleBook(e)} type="submit" className="bg-indigo-500 text-white px-8 py-2 space-x-2 flex items-center justify-center"> <FaPlus className="mr-1" /> Book Now</button>

                </form>
            </div>
        </div>
    )
}

export default Booking