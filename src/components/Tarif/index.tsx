import React from 'react';
import "./style.scss";

export function TarifFC(props: {"levelTarif": string, "pxl": number, "currency": number }): React.JSX.Element {
    const {levelTarif} = props;
    return(
        <div className='tarif'>
            <p>{levelTarif}</p>
            <p>{props.pxl} PXL</p>
            <p>{props.currency} ₸</p>
        </div>
    )
}