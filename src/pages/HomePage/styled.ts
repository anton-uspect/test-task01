import styled, { keyframes } from 'styled-components';

export const HomeWrapperStyled = styled.section`
    padding: 30px 18px;
    display: flex;
    gap: 35px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const rotateAnimation = keyframes`
    0% {
        transform: rotate(360deg)
    }
    50% {
        transform: rotate(180deg)
    }
    100% {
        transform: rotate(0deg)
    }
`;

export const ContainerLoadingStyled = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
        animation: ${rotateAnimation} 6s infinite ease;
        width: 60px;
        height: 60px;
    }
`;

export const ContainerMediaStyled = styled.div`
    width: 100%;
    height: 350px;
    overflow: hidden;
    & img {
        object-fit: contain !important;
    }
`;
