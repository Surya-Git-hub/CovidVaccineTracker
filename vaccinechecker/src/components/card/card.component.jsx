import React from 'react';
import './card.styles.css';

export const Card=(props)=>{
return<div className='Card'>
    <p className='CenterName'>{props.data.name}</p>
    <p><div>First Dose- </div> <div>{props.data.available_capacity_dose1}</div></p>
    <p><div>Second Dose- </div> <div>{props.data.available_capacity_dose2}</div></p>
    <p><div>Total Doses- </div>  <div>{props.data.available_capacity}</div></p>
    <p><div>Fee Type- </div> <div>{props.data.fee_type}</div></p>
    <p><div>Minimum Age- </div> <div>{props.data.min_age_limit}</div></p>
    <p><div>Vaccine Name- </div> <div>{props.data.vaccine}</div></p>
    <p><div>Timing: </div> <div>{props.data.from}-{props.data.to}</div></p>
    <p><div>Address- </div><div> {props.data.address}</div></p>

</div>
}