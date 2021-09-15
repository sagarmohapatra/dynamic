import React, { useState } from "react";
let Sagar = () => {
    let [start, setstart] = useState(
        {

            username: '',

            number: '',
            adress: '',
            designation: '',
            bio: '',
            terms: false

        }
    );
    let updateInput = (e) => {
        setstart(
            {

                ...start,
                [e.target.name]: e.target.value

            }
        )
    }
    let updateCheck = (e) => {
        setstart(
            {

                ...start,
                [e.target.name]: e.target.checked

            }
        )
    }
    let [record, setrecord] = useState(

        []

    )

    let submitRegister = (e) => {
        e.preventDefault();

        let newRecord = { ...start, id: new Date().getTime().toString() }
        console.log(record)
        setrecord([...record, newRecord]);
        console.log(record)
        setstart(
            {
                username: '',
                email: '',
                number: '',
                adress: '',
                designation: '',
                bio: ''
            }
        )
    }

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(user)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-warning text-center text-white">
                                <h2>Form</h2>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submitRegister}>
                                    <input type="text" placeholder="Enter your name" className="form-control mb-2" autoComplete="off" name="username" value={start.username}
                                        onChange={updateInput} />
                                    <input type="number" placeholder="Enter your number" className="form-control mb-2" autoComplete="off" name="number" value={start.number}
                                        onChange={updateInput} />

                                    <input type="text" placeholder="Adress here" className="form-control mb-2" autoComplete="off" name="adress" value={start.adress}
                                        onChange={updateInput} />
                                    <div className="form-control mb-2" >
                                        <select className="form-control " autoComplete="off" name="designation" value={start.designation} onChange={updateInput} >
                                            <option>Select Designation</option>
                                            <option>Team Lead</option>
                                            <option>Manager</option>
                                            <option>Developer</option>

                                        </select>
                                    </div>
                                    <div className="form-group mb-2">
                                        <textarea className="form-control" row={2} placeholder="your text here" name="bio"
                                            value={start.bio} onChange={updateInput}>

                                        </textarea>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault" name='terms' onChange={updateCheck} />
                                        <label className="form-check-label">Accept Terms & Conditions</label>
                                    </div>
                                    <div className="form-group mb-2 text-center">
                                        <input type="submit" className="btn btn-outline-dark btn-md t" />


                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="container mt-1">
                            <div className="card">
                                <div className="card-header text-center bg-info text-white">
                                    <h3>DATA</h3>
                                </div>
                                <div className="card-body bg-light">
                                    <table className="table table-striped table-bordered table-hover text-center table-waring">
                                        <thead>
                                            <tr>
                                                <th>Name</th>

                                                <th>Number</th>
                                                <th>Adress</th>
                                                <th>Designation</th>
                                                <th>Bio</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                record.map((come) => {
                                                    return (
                                                        <tr>
                                                            <td>{come.username}</td>

                                                            <td>{come.number}</td>
                                                            <td>{come.adress}</td>
                                                            <td>{come.designation}</td>
                                                            <td>{come.bio}</td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </React.Fragment >
    )
}
export default Sagar;