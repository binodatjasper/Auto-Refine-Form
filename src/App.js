import { useState } from "react";

function App() {
    const [formToBeSelected, setFormToBeSelected] = useState([
        { name: 'name', type: 'text' },
        { name: 'email', type: 'email' },
        { name: 'address', type: 'text' },
        { name: 'birthday', type: 'date' },
        { name: 'age', type: 'number' },
    ]);
    const [formFields, setFormFields] = useState([]);
    const [formDatas, setFormDatas] = useState({
        name: '',
        email: '',
        address: '',
        birthday: '',
        age: '',
    });

    const handleClick = (item) => {
        setFormFields([...formFields, item]);
        setFormToBeSelected(formToBeSelected.filter(i => i.name !== item.name));
    }

    const handleRomve = (item) => {
        setFormToBeSelected([...formToBeSelected, item]);
        setFormFields(formFields.filter(i => i.name !== item.name));
    }

    const handleChange = (e) => {
        setFormDatas({ ...formDatas, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e);
        console.log(formDatas);
    }

    return (
        <div className="container">
            <h1>Auto Refine Form</h1>
            <form onSubmit={handleSubmit} >
                {
                    formFields.map((item, index) => {
                        return (
                            <div id={item.id} key={index} className="form-group">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <input type={item.type} name={item.name} onChange={handleChange} className="form-control" placeholder={item.name} />
                                    </div>
                                    <div className="col-sm-4">
                                        <button className="btn btn-danger" onClick={() => handleRomve(item)}>
                                            <i className="fa-solid fa-circle-xmark"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                {formFields.length > 0 ? <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button> : <></>}
            </form>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Form Data</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-bordered">
                                <tr>
                                    <th>Name :</th>
                                    <td>{formDatas.name}</td>
                                </tr>
                                <tr>
                                    <th>Email :</th>
                                    <td>{formDatas.email}</td>
                                </tr>
                                <tr>
                                    <th>Address :</th>
                                    <td>{formDatas.address}</td>
                                </tr>
                                <tr>
                                    <th>Age :</th>
                                    <td>{formDatas.age}</td>
                                </tr>
                                <tr>
                                    <th>Birthday :</th>
                                    <td>{formDatas.birthday}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="form-to-be-selected">
                {
                    formToBeSelected.map((item, index) => {
                        return (
                            <span key={index} onClick={() => handleClick(item)}>
                                <i className="fa-solid fa-plus"></i>
                                {item.name}
                            </span>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default App;
