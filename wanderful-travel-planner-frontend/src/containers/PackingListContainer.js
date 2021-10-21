import React from 'react';
import List from '../components/packingList/List.js';
import { getItems } from '../actions/packingListItems.js'
import { connect } from 'react-redux';

class PackingListContainer extends React.Component {

    componentDidMount = () => {
        this.props.getItems()
    }
          
    render () {
        
        const { items, trip } = this.props 
        const tripItems = items.filter(item => trip.id === item.relationships.trip.data.id)
        return (
            <div>
                <List tripItems={tripItems}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getItems: () => dispatch(getItems())
    }
}


const mapStateToProps = state => {
    return {
        items: state.packingListItems.items
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackingListContainer);
