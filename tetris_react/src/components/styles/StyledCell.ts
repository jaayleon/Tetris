import styled from 'styled-components';

// NOTE: read up on  STYLED COMPONENTS

// Exporting CSS
export const StyledCell = styled.div`
    width: auto;
    backround: rgba(${props => props.color}, 0.7);
    border: ${props=> (props.typeof === 'zero' ? '0px solid' : '4px solid')};
    
    /* give shadow effect */
    border-bottom-color: rgba(${props => props.color}, 0.1);
    border-top-color: rgba(${props => props.color}, 1);
    border-left-color: rgba(${props => props.color}, 1);
    border-right-color: rgba(${props => props.color}, 0.3);
`