import React from 'react';
import { CATEGORIES } from '../constants';

const UserForm: React.FC = () => {
    return (
        <div className="block-form px-2">
            <h4 className=" text-center">Add new user</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Select your role</label>
                    <select className="form-select" aria-label="Default select example"
                            name="category"
                            id="category"
                    >
                        <option value=''>Category not selected</option>
                        {CATEGORIES.map(category => (
                            <option key={category.value} value={category.value}>{category.label}</option>
                        ))}
                    </select>
                </div>

                <div className="form-check mt-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Is active
                    </label>
                </div>
                <button className="btn-danger m-2 px-3">Add</button>
            </form>
        </div>
    );
};

export default UserForm;