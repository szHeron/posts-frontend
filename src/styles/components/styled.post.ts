import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50vw;
    color: white;
    padding: 10px;
`

export const PostImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;

    @media (min-width: 768px) {
        width: 80%;
        height: 80%;
    }

    @media (min-width: 1024px) {
        width: 60%;
        height: 60%;
    }
`

export const Description = styled.p`
    font-weight: 400;
`