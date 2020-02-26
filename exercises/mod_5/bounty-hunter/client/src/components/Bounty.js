import React, { useState } from 'react';
import Form from './Form';

const Bounty = (props) => {
    // console.log(props)
    const { firstName, lastName, living, bounty, type, _id } = props;
    const [editToggle, setEditToggle] = useState(false);

    return (
        <div className='bounty'>
            { !editToggle ?
                <>
                    <h3>Name: { firstName } { lastName }</h3>
                    <p>Living: { !living ? 'YEAH' : 'NAH' }</p>
                    <p>Bounty Amount: ${ bounty }</p>
                    <p>Type: { type }</p>
                    <button 
                        className='delete-btn'
                        onClick={() => props.deleteBounty(_id)}
                        >Delete
                    </button>
                    <button 
                        className='edit-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                        >Edit
                    </button>
                </>
            :
                <>
                    <Form 
                        firstName={ firstName } 
                        lastName={ lastName }
                        living={ living }
                        bounty={ bounty }
                        type={ type }
                        _id={ _id }
                        btnText='Submit Edit'
                        submit={ props.editBounty }
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                        >Close
                    </button>
                </>
            }
        </div>
    );
};

export default Bounty;