import { FC } from 'react';  // This is react's function type

interface Props {
	callBack?: ()=> void;
} 

const StartButton: FC<Props>  = ({ callBack }) => {
	return <div>Start Game</div>
}

export default StartButton