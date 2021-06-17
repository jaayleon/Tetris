import { FC } from 'react';  // This is react's function type

interface Props {
	type?: number;
} 

const Cell: FC<Props>  = ({ type }) => {
	return <div> cell </div>
}

export default Cell