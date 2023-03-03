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
                {formFields.length > 0 ? <button type="submit" className="btn btn-primary">Submit</button> : <></>}
            </form>

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
