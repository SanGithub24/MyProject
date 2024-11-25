import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//import {toast} from 'react-toastify';
import axios from 'axios';

import '../filesCSS/productDisplay.css';

const CatDisplay= () => {

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/addcat");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

  return (
    <div style={{marginTop: "20px"}}>

        <p className='titlepro'>Food Categories</p>

        <br/><br/>

        <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>ID</th>
                    <th style={{textAlign: "center"}}>Category</th>
                    <th style={{textAlign: "center"}}>Description</th>
                    <th style={{textAlign: "center"}}>Action</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <th scope='row'>{index+1}</th>
                            <td>{item.category}</td>
                            <td>{item.description}</td>
                            <td className='btndisplay'>
                                <Link to={`/view/${item.id}`}>
                                    <button className='btn btn_delete'>Delete</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

      
    </div>
  );
}

export default CatDisplay;
