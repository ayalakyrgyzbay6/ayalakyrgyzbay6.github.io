import './Aside.css';
import React from "react";
import Data from './Data.json';

class Aside extends React.Component {
    render() {
        return (
            <div className='Aside'>
                {
                    Data.map(data => {
                        return(
                            <p className="aside-item" key={data.id}>{data.name}</p>
                        )
                    })
                }
            </div>
        )
    }
}

export default Aside;

