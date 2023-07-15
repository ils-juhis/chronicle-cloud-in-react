import React from 'react'
import './SchoolTable.scss'
import { tableData } from '../../../data/tableData'
import {IoMdEye} from 'react-icons/io';

function SchoolTable() {
  return (
    <>
        <div className="school-table w-100">
            <div className="heading fw-bold p-1">School List</div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Logo</th>
                        <th scope="col">School Name</th>
                        <th scope="col">School Contact</th>
                        <th scope="col">School Size &nbsp; <i style={{color: "black", fontSize: "10px", textTransform: "capitalize"}}>Roster / Teacher</i></th>
                        <th scope="col">Data Usage</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            tableData.map((row,i)=>{
                                return (
                                    <tr key={i}>
                                        <th scope="row"> <img src={row.imgPath} alt=""/></th>
                                        <td>{row.schoolName}</td>
                                        <td>{row.email}<br/> {row.phone}</td>
                                        <td>{row.schoolSize}</td>
                                        <td><span style={{fontSize: "15px", fontWeight: 900}}>{row.dataUsage}</span>/<span className="text-mute">{row.totalData} mb</span></td>
                                        <td>{row.status}</td>
                                        <td>
                                            <a href={row.viewLink} className="text-decoration-none d-flex align-items-center">
                                                <IoMdEye/> &nbsp; View
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default SchoolTable