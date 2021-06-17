import { FC } from 'react';  // This is react's function type
import Cell from './Cell';

interface Props {
	stage?: any;
} 

const Stage: FC<Props>  = ({ stage }) => {
	return <div><Cell /></div>
}

export default Stage