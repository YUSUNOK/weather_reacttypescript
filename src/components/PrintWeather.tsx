import React from 'react';
import { WeatherData } from '../type/types';
import styled from 'styled-components';

interface Props {
    weather: WeatherData | undefined;
}

const PrintWeather = ({ weather }: Props) => {
    return (
        <Container>
            <WeatherInfo>{weather?.name}</WeatherInfo>
            <WeatherInfo>{weather?.weather[0].description}</WeatherInfo>
            <br />
        </Container>
    );
};
export default PrintWeather;
const Container = styled.div``;
const WeatherInfo = styled.h2`
    color : white `;
