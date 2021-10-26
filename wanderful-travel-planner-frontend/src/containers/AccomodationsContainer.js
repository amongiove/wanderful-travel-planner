import React from 'react';
import { getAccomodations, deleteAccomodation, createNewAccomodation, editAccomodation } from '../actions/accomodations';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import styled from 'styled-components';
import AccomodationInfo from '../components/accomodations/AccomodationInfo.js';
import { connect } from 'react-redux';
import NewAccomodationForm from '../components/accomodations/NewAccomodationForm.js';

const Styles = styled.div`
    .new-accomodation {
        float: right;
    }

`;

class AccomodationsContainer extends React.Component {

    componentDidMount = () => {
        this.props.getAccomodations()
    }
        
    render () {
        const { accomodations, trip, deleteAccomodation, createNewAccomodation, editAccomodation } = this.props

        const matchedAccomodations = accomodations.filter(accomodation => (parseInt(accomodation.attributes.trip_id) === parseInt(trip.id)))
        let orderedAccomodations = matchedAccomodations.sort((a,b) => a.attributes.start_date_time > b.attributes.start_date_time ? 1 : -1)
        const tripAccomodations = orderedAccomodations.map (accomodation => <AccomodationInfo accomodation={accomodation} key={accomodation.id} id={accomodation.id} onDelete={deleteAccomodation} trip={trip} onEdit={editAccomodation} /> )

        return ( 
            <Styles>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Accomodations</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{trip.attributes.name}</Card.Subtitle>
                        <Card.Text>
                            <ListGroup >
                                {matchedAccomodations.length > 0 ? tripAccomodations : null}
                                {/* TODO: no flights msg */}
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <NewAccomodationForm onSubmit={createNewAccomodation} currentTrip={trip} />
                    </Card.Footer>
                </Card>
            </Styles>
        );
    }
};

const mapStateToProps = state => {
    return {
        accomodations: state.accomodations.accomodations
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAccomodations: () => dispatch(getAccomodations()),
        deleteAccomodation: accomodationId => dispatch(deleteAccomodation(accomodationId)),
        createNewAccomodation: newAccomodation => dispatch(createNewAccomodation(newAccomodation)),
        editAccomodation: updatedAccomodation => dispatch(editAccomodation(updatedAccomodation))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccomodationsContainer); 
