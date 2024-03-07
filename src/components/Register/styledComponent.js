import styled from 'styled-components'

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 15px
`
export const RegisterImage = styled.img`
    width: 300px;
`
export const RegistrationForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 15%;
`
export const RegistrationHeading = styled.h1`
    font-family: 'Roboto';
    color: #475569;
    font-size: 38px;
    margin-bottom: 15px;
`
export const Label = styled.label`
    font-family: 'Roboto';
    color: #64748b;
    font-weight: 500;
    font-size: 13px;
    margin-bottom: 5px;
`
export const Input = styled.input`
    border: 1px solid #cbd5e1;
    padding: 8px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 4px;
`
export const Select = styled.select`
    border: 1px solid #cbd5e1;
    padding: 8px;
    width: 100%;
    border-radius: 4px;
    margin-bottom: 20px;
`
export const RegistrationButton = styled.button`
    background-color: #3b82f6;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 6px;
    color: #ffffff;
    font-family: 'Roboto';
`
export const ErrorMsg = styled.p`
    font-family: 'Roboto';
    color: #ff0b37;
    font-size: 12px;
`
