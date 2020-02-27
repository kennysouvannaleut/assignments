import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Bounty from './components/Bounty';
import Form from './components/Form';

const App = () => {
    const [bounties, setBounties] = useState([]);

    const getBounties = () => {
        axios.get('/bounty')
            .then(res => setBounties(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    };

    const addBounty = (newBounty) => {
        axios.post('/bounty', newBounty)
            // .then(res => console.log(res))
            // .catch(err => console.log(err))
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    };

    const deleteBounty = (bountyId) => {
        axios.delete(`/bounty/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    };

    const editBounty = (updates, bountyId) => {
        axios.put(`/bounty/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    };

    const handleFilter = (e) => {
        if(e.target.value === 'reset') {
            getBounties()
        } else {
            axios.get(`/bounty/search/type?type=${ e.target.value }`)
                .then(res => setBounties(res.data))
                .catch(err => console.log(err))
        }
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

                <h4>Filter by Type</h4>
                <select onChange={ handleFilter } className='filter-form'>
                    <option value='reset'>All Types</option>
                    <option value='Jedi'>Jedi</option>
                    <option value='Sith'>Sith</option>
                </select>

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