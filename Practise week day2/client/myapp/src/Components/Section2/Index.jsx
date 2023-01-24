import './Index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

export default function ActionAreaCard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/product")
            .then((res) => {
                setData(res.data)
            })
    })


    return (
        <>
            <div className='section2Title'>
                <p>Popular Item in the market</p>
                <h1>Trending Product</h1>
                <hr/>
            </div>

            <div className='Cards'>
                {(data.map((element) => (
                    <Card key={element.id} sx={{ minWidth: 400 }} className='Card'>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <img src={element.imageUrl} className='cardImage' />
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {element.functionName}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {element.name}
                            </Typography>
                            <Typography>
                                {element.price}
                            </Typography>
                        </CardContent>
                    </Card>
                )))}

            </div>

        </>
    );
}










