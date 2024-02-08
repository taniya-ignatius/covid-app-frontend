import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPatients = () => {
    const [data, setData] = new useState([])
    const getData=()=>{
        axios.get("http://localhost:3001/api/patient/view").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>
        <NavBar/>
        <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table table-info table-bordered">
                <thead>
                    <tr>
                        <th scope="col">PATIENT NAME</th>
                        <th scope="col">ADDRESS</th>
                        <th scope="col">MOBILE</th>
                        <th scope="col">SYMPTOMS</th>
                        <th scope="col">STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (value,index)=>{
                                return  <tr>
                                <td>{value.name}</td>
                                <td>{value.address}</td>
                                <td>{value.mobile}</td>
                                <td>{value.symptoms}</td>
                                <td>{value.status}</td>
                              </tr>
                            }
                        )
                    }
                </tbody>
            </table>
            </div>
                </div>
            </div>
    </div>
  )
}

export default ViewPatients