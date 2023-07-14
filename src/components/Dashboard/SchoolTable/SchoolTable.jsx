import React from 'react'
import './SchoolTable.scss'

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

                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default SchoolTable