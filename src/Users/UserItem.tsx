import React from 'react';
import { User } from '../../types';

interface Props {
    user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
    const textIsActive = () => {
        if(user.isActive){
            return 'Active'
        } else {
            return  'Not active'
        }
    }
    return (
        <div className="mb-2 border border-black p-2 m-2">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text small">{user.category}</p>
                        <p className="card-text">{user.email}</p>
                        <p className="card-text">{textIsActive()}</p>
                    </div>
        </div>
    );
};

export default UserItem;