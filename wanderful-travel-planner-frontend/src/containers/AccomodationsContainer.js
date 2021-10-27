import React from 'react';
import { getAccomodations, deleteAccomodation, createNewAccomodation, editAccomodation } from '../actions/accomodations';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import styled from 'styled-components';
import AccomodationInfo from '../components/accomodations/AccomodationInfo.js';
import { connect } from 'react-redux';
import NewAccomodationForm from '../components/accomodations/NewAccomodationForm.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Styles = styled.div`
    .accomodations-container {
        margin: 20px;
        padding: 10px;
    }

    .list {
        margin: 40px;
    }

    .new-accomodation {
        text-align: right;
        marign-right: 20px;
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
                <Container className="accomodations-container"> 
                    <Row> 
                        <Col>
                            <h2>Accomodations</h2>
                        </Col>
                        <Col className="new-accomodation">
                            <NewAccomodationForm onSubmit={createNewAccomodation} currentTrip={trip} />
                        </Col>
                    </Row>
                        <ListGroup className="list" >
                            {matchedAccomodations.length > 0 ? tripAccomodations : null}
                            {/* TODO: no accomodations msg */}
                        </ListGroup>   
                </Container>
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
