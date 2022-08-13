import * as palette from '../../../styleVariables';
export default function Hamburger({ isOpen }){
    return(
        <>
            <div className='wrapper' >
                <div className="hamburger">
                    <div className="burger burger1" />
                    <div className="burger burger2" />
                    <div className="burger burger3" />
                </div>
            </div>
            <style jsx>{`
                .hamburger{
                    visibility: ${!isOpen && 'visible'};
                    transition: all 2s ease-in-out;
                    margin: 3.25em 3.5em;
                    float: right;
                    text-align:right;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    cursor: pointer;
                }
                .wrapper {
                    visibility: hidden;
                    display: none;
                    text-align:right;
                    z-index: 11;
                }
                @media only screen and (max-width: 765px) { 
                    .wrapper {
                        visibility: ${isOpen ? 'visible' : 'hidden'};
                        position: fixed;
                        display: inline;
                        width: 100%;
                        height: 100vh;
                        top:0;
                        right: 0;
                        z-index: 11;
                        background-color: ${isOpen ? palette.CONTAINER_COLOR : 'none'};
                    }
                }
                .burger{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: ${palette.GOLD_COLOR};
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }
                .burger1{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger3{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }
                
            `}</style>
        </>
    )
}