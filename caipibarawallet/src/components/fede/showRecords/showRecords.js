import './showRecords.css'
import React, { useState, useEffect } from 'react';

export default function ShowRecords(props) {
    useEffect(() => {
        console.log(props.records)
    }, [])

    return (
        <div className='show-records-element'>
            {props.records.map((record) => {
                return(
                    <div className='record'>
                        <div className='record-concept'>
                            <span>Concept:</span><span> {record.concept}</span>      
                        </div>
                        <div className='record-amount'>
                            <span>Amount:</span><span> {record.amount}</span>
                        </div>
                        <div className='record-date'>
                            <span>Date:</span><span> {record.date}</span>
                        </div>
                        <div className='record-type'>
                            <span>Type:</span><span> {record.type}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}