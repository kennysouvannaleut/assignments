import React, { useState } from 'react';
import Form from './Form';

const Bounty = (props) => {
    // console.log(props)
    const { firstName, lastName, living, bountyAmount, type, _id } = props;
    const [editToggle, setEditToggle] = useState(false);

    return (
        <div className='bounty'>
            { !editToggle ?
                <>
                    <h3>Name: { firstName } { lastName }</h3>
                    <p>Living: { living ? 'Yes' : 'No' }</p>
                    <p>Bounty Amount: ${ bountyAmount }</p>
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
                        bountyAmount={ bountyAmount }
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