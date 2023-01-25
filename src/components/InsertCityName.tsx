import React from 'react';
import { WeatherData } from '../type/types';
import { useState } from 'react';
import styled from 'styled-components';
interface Props {
    cityName: string,
    setCityname: React.Dispatch<React.SetStateAction<string>>,
}
const InsertCityName = ({ cityName, setCityname }: Props) => {
    const [city, setCity] = useState(cityName);
    const formSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setCityname(city);
        setCity("");
    };
    const changeCityName = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setCity(evt.target.value);
    };
    return (
        <Container>
            <FormCityName onSubmit={formSubmit}>
                <InputCityName type="text" value={city} onChange={changeCityName} />
                <SearchButton>{`검색`}</SearchButton>
            </FormCityName>

        </Container>
    );
};
export default InsertCityName;
const Container = styled.div`
display : flex;
justify-content : space-between;
`;

const FormCityName = styled.form``;
const InputCityName = styled.input`
border : none ;
border-radius : 10px;
font-size : 30px;

`;
const SearchButton = styled.button`
background-color : #81d1ff ;
border : none ;
padding : 10px ;
color : white ;
border-radius : 10px;
cursor : pointer;
transition : all 0.2s ease-in;
transform : translateY(-5px);
&:hover{
    transform : translateY(-10px);
}
`;

