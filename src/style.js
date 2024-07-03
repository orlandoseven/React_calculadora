import styled from 'styled-components'


export const Container = styled.div`
width:100%;
height: 100vh;
background-color: #d4e4ff;

display: flex;
align-items:center;
justify-content: center;
`

export const Content = styled.div`
background-color: #2b1e6b;
padding:10px 5px;
border-radius:10px;

p{
font-size: 1.25rem;
color: #778899;
font-family: Arial;
margin-bottom: 5px;
}

`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`