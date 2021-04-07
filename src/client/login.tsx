import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Author, Post } from '../utilities';

const Login = () => {
    const [authorid, setAuthorid] = useState<Author['id']>()
    const [name, setName] = useState<Author['name']>();
    const [authors, setAuthors] = useState<Array<Author>>(null);
    const [email, setEmail] = useState<Author['email']>();
    const [description, setDescription] = useState<Author['description']>();
    const [editName, setEditName] = useState<Author['name']>();
    const [editEmail, setEditEmail] = useState<Author['email']>();
    const [editDescription, setEditDescription] = useState<Author['description']>();
    const [oneAuthor, setAuthor] = useState<Author>(null);

    let history = useHistory()

    useEffect(() => {
        fetch('/api/authors')
            .then(res => res.json())
            .then(authorRes => {
                console.log(authorRes)
                setAuthors(authorRes)
                setAuthor(authorRes[0])
            })

    }, [])

    


    const handleButtonClick3 = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let arrayIndex = Number(e.target.selectedOptions[0].value)
        let selectedAuthor = authors[arrayIndex]
        console.log(selectedAuthor)
        setAuthor(selectedAuthor)
        setAuthorid(Number(selectedAuthor.id))
        
   

    }
    const handleButtonClick2 = (e: React.MouseEvent<HTMLButtonElement>) => {
        const authorEditData = {
            id: Number(authorid),
            name: editName,
            email: editEmail,
            description: editDescription
        }
        fetch(`/api/authors/${authorid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(authorEditData)
        })
            .then(res => alert(res))
            .then(() => history.push(`/authors/${authorid}`))
    }

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const authorData = {
            name: name,
            email: email,
            description: description
        };
        fetch('/api/authors', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(authorData)
        })
            .then(res => alert(res))
            .then(() => history.push('/panel'));
    }
    



    return (
        <>
            <div className="row d-flex m-3 p-3">
                <span id="basic-addon1">EDIT ACCOUNT</span>
                <select defaultValue='default' onChange={handleButtonClick3} className="form-control" id="exampleFormControlSelect1">
                    {/* <option disabled value='default'>Select Author</option> */}
                    {authors?.map((a, index) => {
                        return (
                            <option value={index} key={a.id}>{a.name}</option>
                        )
                    })}
                </select>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditName(e.target.value)} type="text" className="form-control" placeholder={oneAuthor?.name} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditEmail(e.target.value)} type="text" className="form-control" placeholder={oneAuthor?.email} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditDescription(e.target.value)} type="text" className="form-control" placeholder={oneAuthor?.description} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button onClick={handleButtonClick2} className="btn btn-outline-secondary" type="button" id="button-addon2">Edit User</button>
                <span id="basic-addon1">CREATE NEW ACCOUNT</span>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type="text" className="form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} type="text" className="form-control" placeholder="Description" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                <button onClick={handleButtonClick} className="btn btn-outline-secondary" type="button" id="button-addon2">Create User</button>
            </div>
        </>
    )
};

export default Login;