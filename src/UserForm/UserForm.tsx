import React, { useState } from 'react';
import { CATEGORIES } from '../constants';
import { User, UserMutation } from '../../types';

interface Props {
    onSubmit: (user: User) => void
    users: User[]
}

const UserForm: React.FC<Props> = ({onSubmit, users}) => {
    const [user, setUser] = useState<UserMutation>({
        name: '',
        email: '',
        category: '',
        isActive: false,
    });

    const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const changeIsActive = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.checked
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: (users.length + 1).toString(),
            ...user,
        });
    };

        return (
            <div className="block-form px-2">
                <h4 className=" text-center">Add new user</h4>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            value={user.name}
                            onChange={changeUser}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            value={user.email}
                            onChange={changeUser}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Select your role</label>
                        <select className="form-select" aria-label="Default select example"
                                name="category"
                                id="category"
                                value={user.category}
                                onChange={changeUser}
                        >
                            <option value=''>Category not selected</option>
                            {CATEGORIES.map(category => (
                                <option key={category.value} value={category.value}>{category.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-check mt-3">
                        <input className="form-check-input"
                               type="checkbox"
                               name="isActive"
                               id={user.isActive}
                               checked={user.isActive}
                               onChange={changeIsActive}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Is active?
                        </label>
                    </div>
                    <button className="btn-danger m-2 px-3">Add</button>
                </form>
            </div>
        );
    };

export default UserForm;