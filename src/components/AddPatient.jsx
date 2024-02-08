import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddPatient = () => {
        const [input, setInput] = new useState(
            {
                name:String,
                address:String,
                mobile:String,
                symptoms:String,
                status:String
            }
        )
        const inputHandler = (event) => {
            setInput({ ...input, [event.target.name]: event.target.value })
        }
        const readValues = () => {
            console.log(input)
            axios.post("http://localhost:3001/api/patient/add", input).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("Successfully added")
                        setInput(
                            {
                                name:String,
                                address:String,
                                mobile:String,
                                symptoms:String,
                                status:String
                            }
                        )
                    } else {
                        alert("Something went wrong")
                    }
                }
            )
            }
  return (
    <div>
        <NavBar/><br></br>
        <div className="container">
            <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PATIENT NAME</label>
                            <input type="text" className="form-control"  name="name" value={input.name} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PATIENT ADDRESS</label>
                            <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">MOBILE</label>
                            <input type="text" className="form-control"  name="mobile" value={input.mobile} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">SYMPTOMS</label>
                            <input type="text" className="form-control"  name="symptoms" value={input.symptoms} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">STATUS(positive/negative)</label>
                            <input type="text" className="form-control"  name="status" value={input.status} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValues}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPatient