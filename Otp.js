import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const OTPBox = () => {
    let navigate = useNavigate();
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    return (
        
            <div style={{ display: 'flex',justifyContent:"center"}}>
                
                <div style={{ flexDirection: 'column', display: 'flex' }}></div>
                <div className="row" >
                    <div className="col text-center" >
                        <h2 style={{ color: "black" }}>Enter the OTP sent to you.</h2>
                        {otp.map((data, index) => {
                            return (
                                <input
                                    className="otp-field"
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                    autoComplete="off"
                                    style={{ marginBottom: 20, marginTop: 20, width: 40, height: 25 }}
                                />
                            );
                        })}
                        <p><h3>OTP Entered - {otp.join("")}</h3></p>
                        <Button variant="contained" color="success" type="submit"
                            style={{
                                borderRadius: 30,
                                backgroundColor: "#24A67D",
                                color: "white",
                                fontSize: "15px",
                            }}
                            onClick={() => {

                                navigate('/Home');

                            }}
                        >Submit</Button>
                    </div>
                </div>
            </div>
        

    );
};
export default OTPBox;