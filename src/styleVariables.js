// COLOR
export const GOLD_COLOR = '#F9E5C9'
export const BG_COLOR = '#0c2f34'
export const CONTAINER_COLOR = '#103A40'
export const DURATION = 1500
export const DELAY = 1500
export const SCROLL_DELAY = 300

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
export const TRANSITION_FIX_MOBILE = () => {
    return `
        &:before{
            display: none;
        }
    `
}

// Responsive sizes
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1240px',
    desktop: '2560px'
  }

  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };
