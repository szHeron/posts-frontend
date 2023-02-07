import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    color: white;
    padding: 10px;
`

export const PostImage = styled.img`
    object-fit: cover;
    max-width: 100%;
    height: auto;

    @media (min-width: 768px) {
        width: 60%;
        height: 60%;
    }

    @media (min-width: 1024px) {
        width: 40%;
        height: 40%;
    }
`

export const Description = styled.p`
    align-self: flex-start;
    font-weight: 400;
`