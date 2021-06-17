import { FC } from 'react';  // This is react's function type

interface Props {
	gameOver?: boolean;
	text: string;
} 

const Display: FC<Props>  = ({gameOver, text}) => {
	return <>{ text } </>
}

export default Display