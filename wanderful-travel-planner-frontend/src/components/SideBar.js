import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import BarItems from "./BarItems.js";
import {Link, useParams} from "react-router-dom";

const SidebarParent = styled.div`
    background: #708090;
  
  a {
    text-decoration: none;
  }
  
  & > div {
    width: 250px;
    height: 100vh;
  }
  
  .behind-the-scenes {
    width: 250px;
    
  }
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 4px;
  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
    p {
        color: black;
    }
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;

const SideBar = ({defaultActive}) => {
    // TODO: do we need all of this logic?
    const { tripId } = useParams()
    const location = window.location;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = BarItems.findIndex(item => getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

    return (
        <>
            <SidebarParent>
                {
                    BarItems.map((item, index)=> {
                        return (
                            <Link to={`/trips/${tripId}${item.route}`}>
                                <SidebarItem key={item.name} active={index === activeIndex}>
                                    <p>{item.name}</p>
                                </SidebarItem>
                            </Link>
                        );
                    })
                }
            </SidebarParent>
        </>
    );
}

export default SideBar;

