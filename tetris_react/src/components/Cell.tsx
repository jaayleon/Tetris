import { FC } from 'react';  // This is react's function type
import { StyledCell} from './styles/StyledCell'
import { TETROMINOS } from '../tetrominoes'

interface Props {
	type: any;
} 

const Cell: FC<Props>  = ({ type }) => {
	return (
        // idk what typeof means
        <StyledCell typeof = {'L'} color = {TETROMINOS['L'].color}>cell</StyledCell>
    ) 
    
}

export default Cell