import React from 'react';
import moment from 'moment'
import '../Header/Header.css'


//main container
const Header = () => {
    return (
        <div className="header">
        <div className = 'left_bar'>
            <span className =' top_bar date'>{moment().format('dddd')}</span>
            <span className = 'top_bar time'>{moment().format('L')}</span>
        </div>
        <h5 className="subhead">NORTH STATION INFORMATION</h5>
        <div className= 'right_bar'>
            <span className='top_bar current_time_header'>CURRENT TIME</span>
            <span className = 'top_bar current_time'>{moment().format('LT')}</span>
        </div>
        </div>
    )
}

export default Header

