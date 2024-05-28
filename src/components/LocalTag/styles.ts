import styled from "styled-components";

export const LocalTagContainer = styled.div`
width: 100%;
height: 3rem;

background-color: ${({ theme }) => theme.colors["brand-purple-light"]};

border: none;
border-radius: 6px;
padding: 8px;
color: ${({ theme }) => theme.colors["brand-purple-dark"]};

display: flex;
align-items: center;
justify-content: center;
gap: 4px;
`