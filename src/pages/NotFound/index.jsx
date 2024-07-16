import styled from "styled-components"
import notFoundImage from "./not-found.png"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 500px;
    margin-top: 20px;
    @media screen and (min-width: 1024px){
        flex-direction: row;
        height: calc(100vh - 245px);
        margin-top: 20px;
    }
`
const StyledDiv = styled.div`
    flex: 1;
    font-family: "Roboto",sans-serif;
    text-align: center;
    >h3{
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 20px;
    }
    >p{
        font-size: 1.25rem;
        line-height: 25px;
    }
    @media screen and (min-width: 1024px){
        >h3{
            font-size: 3rem;
        }
        >p{
            font-size: 1.5rem;
        }
    }
`

const NotFound = () =>{
    return(
        <StyledSection>
            <StyledDiv>
                <h3>OPS!</h3>
                <p>O conteúdo que você procura não foi encontrado!</p>
            </StyledDiv>
        </StyledSection>
    )
}

export default NotFound