import React from 'react';
import { getAccommodations, deleteAccommodation, createNewAccommodation, editAccommodation } from '../actions/accommodations';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import styled from 'styled-components';
import AccommodationInfo from '../components/accommodations/AccommodationInfo.js';
import { connect } from 'react-redux';
import NewAccommodationForm from '../components/accommodations/NewAccommodationForm.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Styles = styled.div`
    .accommodations-container {
        margin: 20px;
        padding: 10px;
    }

    .list {
        margin: 40px;
    }

    .new-accommodation {
        text-align: right;
        marign-right: 20px;
    }

`;

class AccommodationsContainer extends React.Component {

    componentDidMount = () => {
        this.props.getAccommodations()
    }
        
    render () {
        const { accommodations, trip, deleteAccommodation, createNewAccommodation, editAccommodation } = this.props

        const matchedAccommodations = accommodations.filter(accommodation => (parseInt(accommodation.attributes.trip_id) === parseInt(trip.id)))
        let orderedAccommodations = matchedAccommodations.sort((a,b) => a.attributes.start_date_time > b.attributes.start_date_time ? 1 : -1)
        const tripAccommodations = orderedAccommodations.map (accommodation => <AccommodationInfo accommodation={accommodation} key={accommodation.id} id={accommodation.id} onDelete={deleteAccommodation} trip={trip} onEdit={editAccommodation} /> )

        return ( 
            <Styles>
                <Container className="accommodations-container"> 
                    <Row> 
                        <Col>
                            <h2>Accommodations</h2>
                        </Col>
                        <Col className="new-accommodation">
                            <NewAccommodationForm onSubmit={createNewAccommodation} currentTrip={trip} />
                        </Col>
                    </Row>
                        <ListGroup className="list" >
                            {matchedAccommodations.length > 0 ? tripAccommodations : <h4>No accomodations currently listed. Add one now!</h4>}
                            {/* TODO: no accommodations msg */}
                        </ListGroup>   
                </Container>
            </Styles>
        );
    }
};

const mapStateToProps = state => {
    return {
        accommodations: state.accommodations.accommodations
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAccommodations: () => dispatch(getAccommodations()),
        deleteAccommodation: accommodationId => dispatch(deleteAccommodation(accommodationId)),
        createNewAccommodation: newAccommodation => dispatch(createNewAccommodation(newAccommodation)),
        editAccommodation: updatedAccommodation => dispatch(editAccommodation(updatedAccommodation))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationsContainer); 
