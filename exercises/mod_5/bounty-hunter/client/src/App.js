import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Bounty from './components/Bounty';
import Form from './components/Form';

const App = () => {
    const [bounties, setBounties] = useState([]);

    const getBounties = () => {
        axios.get('/bounties')
            .then(res => setBounties(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    };

    const addBounty = (newBounty) => {
        axios.post('/bounties', newBounty)
            // .then(res => console.log(res))
            // .catch(err => console.log(err))
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    };

    const deleteBounty = (bountyId) => {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    };

    const editBounty = (updates, bountyId) => {
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getBounties()
    }, []);

    return (
        <div>
            <div className='bounty-container'>
                <Form 
                    submit={ addBounty }
                    btnText='Add Bounty'
                />
                { 
                    bounties.map(bounty => 
                        <Bounty 
                            {...bounty} 
                            key={ bounty.firstName }
                            deleteBounty={ deleteBounty }
                            editBounty={ editBounty }
                    />)
                }
            </div>
        </div>
    );
};

export default App;