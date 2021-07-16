import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Title01 = styled.h1`
    background: #1ea1ff;
    font-size: 2rem;  
    font-wedth: 600;
    margin-top: -10rem;
    border-radius: 1rem;
    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height 1.5rem;
    padding: 0 .5rem;
    margin-top: 4rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    border: 1px solid #000;
    height 1.5rem;
    color: #fff;
    margin-top: 4rem;
    background: #000;    
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-wedth: 600;
    margin-top: 1rem;
`;