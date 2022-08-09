// COLOR
export const GOLD_COLOR = '#F9E5C9'
export const BG_COLOR = '#0c2f34'
export const CONTAINER_COLOR = '#103A40'

//FUNCTIONS
export const TRANSITION_FIX = () => {
    return `
        &:before{
            display: block;
            content: attr(title);
            font-weight: bold;
            height: 1px;
            color: transparent;
            overflow: hidden;
            visibility: hidden;
        }
    `
}
