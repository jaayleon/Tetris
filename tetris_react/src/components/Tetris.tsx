import { FC } from 'react';  // This is react's function type
import { createStage } from '../gameHelpers';

// Components
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

interface Props {
	foo?: number;
	bar?: string;
} 

const Tetris: FC<Props>  = ({foo, bar}) => {
	return (
    <div>
        <Stage stage={createStage()}/>
        <aside>
            <div>
                <Display text = "Score" />
                <Display text = "Rows" />
                <Display text = "Level" />
            </div>
            <StartButton />
        </aside>
    </div>);

};

export default Tetris