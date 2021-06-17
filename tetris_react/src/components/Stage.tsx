import { FC } from 'react';  // This is react's function type
import Cell from './Cell';

interface Props {
	stage: any[][];
} 

const Stage: FC<Props>  = ({ stage }) => {
	return(
	<div>
		{/* Iterate to turn each part of the stage into a Cell */}
		{ stage.map(row => row.map((cell, x)=> <Cell key={x} type={cell[0]} />))}
	</div>) 
		
}

export default Stage