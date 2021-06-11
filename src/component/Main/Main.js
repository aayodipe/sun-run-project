import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import moment from 'moment';
import '../Main/Main.css'



//Schedule Board
const Scheduleboard = () => {

    let [data, setData] = useState([])

    useEffect( ()=> {
        //Fetch Data from MBTA API
        fetch('https:api-v3.mbta.com/schedules?filter[route]=CR-Fitchburg&filter[stop]=place-north')
        .then(response => {
            
            if(response.ok){
                return response.json()
            }
            throw response 
        })
        .then(data => {
            //Remove data with no time 
            let availableData = data.data.filter(item =>moment.parseZone(item.attributes.arrival_time).utc().format('LT') !== 'Invalid date' )
            setData(availableData)
        })
        .catch(error => {
            console.error("Error fetching data :", error);
        });
}, [])

  return (
        <>
        < Header />
            <table>
                <thead>
                <tr>
                    <th>CARRIER</th>
                    <th>TIME</th>
                    <th>DESTINATION</th>
                    <th>TRAIN#</th>
                    <th>TRACK#</th>
                    <th>STATUS</th>
                </tr>
                </thead>
                <tbody>
                
                {data.map(item => {
                   
                        return (   
                            <tr key = {item.id.split('-')[3]}>
                            <td>{'MBTA'}</td>                       
                            <td>{moment.parseZone(item.attributes.arrival_time).utc().format('LT')}</td>
                            <td>{item.id.split('-')[4]}</td>
                            <td>{item.id.split('-')[3]}</td>
                            <td>{item.id.split('-')[2]}</td>            
                            <td className = 'status'>{'ON TIME'}</td>            
                            </tr>)
                    
                
                }
                
                )}
                </tbody>
            </table>
        </>
  );
};

export default Scheduleboard;
