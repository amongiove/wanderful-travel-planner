import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    .error{
        text-align: center;
        margin: 50px;
    }
`;

const Missing = () => {
    return (
        <Styles>
            <div className="error">
                <h2>OOPS!...Page Not Found</h2>
                <Link to="/"><h4>Wander Back Home</h4></Link>
            </div>
        </Styles>
    )
}

export default Missing