import styled from "styled-components";

export const CompletOrderContainer = styled.form`
width: 100%;
margin-top: 2.5rem;
display: flex;
justify-content: space-between;
gap: 2rem;
`
export const SectionBaseStyle = styled.div`
width: 100%;
border-radius: 6px;
padding: 2.5rem;
background: ${({theme})=>theme.colors["base-card"]};
`