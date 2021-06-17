export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
    return(
        Array.from(Array(STAGE_HEIGHT), () =>          // Creating a STAGE_HEIGHT x STAGE_WIDTH array
            new Array(STAGE_WIDTH).fill([0,'clear'])   // 'clear': no tetrimonio collided in cell (??)
        )
    )
}