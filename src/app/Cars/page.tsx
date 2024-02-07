'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Container,
    Grid,
    CardContent,
    Typography,
    CircularProgress
} from '@mui/material';
import Image from 'next/image';

interface Car {
    make: string;
    model: string;
    year: number;
    city_mpg: number;
    highway_mpg: number;
    combination_mpg: number;
    cylinders: number;
    fuel_type: string;
    drive: string;
    transmission: string;
}
interface HoverableCardProps {
    children: React.ReactNode; // Typing the children prop
}

const HoverableCard: React.FC<HoverableCardProps> = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    const defaultStyle = {
        transition: 'box-shadow 0.3s ease-in-out',
        borderRadius: '15px'
    };

    const hoverStyle = {
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
        borderRadius: '15px'

    };

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={isHovered ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
        >
            {children}
        </div>
    );
};

const CarsListPage: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchCars = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.api-ninjas.com/v1/cars?limit=10&model=bmw`, {
                headers: { 'X-Api-Key': 'ijj12cvxrTuZ1VE9mCK4FOPdwbyQfryZlZUf3go5' }
            });
            setCars(response.data);
        } catch (error) {
            console.error('Error fetching cars:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom style={{ marginBottom: '15px' }}>
                Recommendations
            </Typography>
            {loading ? (
                <CircularProgress />
            ) : (
                <Grid container spacing={2}>
                    {cars.map((car, index) => (
                        <Grid item xs={12} sm={6} lg={4} key={index}>
                            <HoverableCard>
                                <Image
                                    alt={`${car.make} ${car.model}`}
                                    src={'/assets/2.jpg'}
                                    width={500}
                                    height={100}
                                    layout="responsive"
                                    style={{
                                        borderRadius: '20px'
                                    }}
                                />
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        style={{ marginBottom: '10px' }}>
                                        {car.model}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Year: {car.year}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Fuel Type: {car.fuel_type}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        MPG (City/Highway/Combined):
                                        {car.city_mpg}/{car.highway_mpg}/{car.combination_mpg}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Drive: {car.drive}
                                    </Typography>
                                </CardContent>
                            </HoverableCard>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default CarsListPage;
