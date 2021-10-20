import React from 'react';
import List from '../components/packingList/List.js';
import { connect } from 'react-redux';

const PackingListContainer = () => {
    return (
        <div>
            <h1>Packing list container</h1>
            <List />

        </div>
        
    )
}

export default PackingListContainer;
