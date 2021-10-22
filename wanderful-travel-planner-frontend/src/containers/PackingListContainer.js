import React from 'react';
import List from '../components/packingList/List.js';
import { getItems, createNewItem, deleteItem } from '../actions/packingListItems.js'
import { connect } from 'react-redux';

class PackingListContainer extends React.Component {

    componentDidMount = () => {
        this.props.getItems()
    }
          
    render () {

        const { items, trip, createNewItem, deleteItem } = this.props 
        const tripItems = items.filter(item => trip.id === item.relationships.trip.data.id)
        return (
            <div>
                <List trip={trip} tripItems={tripItems} createNewItem={createNewItem} deleteItem={deleteItem}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getItems: () => dispatch(getItems()),
        createNewItem: newItem => dispatch(createNewItem(newItem)),
        deleteItem: itemId => dispatch(deleteItem(itemId))
    }
}


const mapStateToProps = state => {
    return {
        items: state.packingListItems.items
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackingListContainer);
