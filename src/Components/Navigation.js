import React ,{useState}from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faBars} from '@fortawesome/free-solid-svg-icons';

import {useTransition, animated} from 'react-spring'



function Navigation(){
    const [showMenu, setShowMenu] = useState(false);

    let menu= null;
    let menuMask;

    const maskTransitions = useTransition(showMenu, null, {
            from: { position: 'fixed', opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
    });

    const menuTransitions = useTransition(showMenu, null, {
        from:   {  opacity: 0 , transform:'translateX(-100%)'},
        enter:  { opacity: 1 , transform:'translateX(0%)'},
        leave:  { opacity: 0, transform:'translateX(-100%)'},
});


    // if(showMenu){
    //     menu=  <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"   >This is a menu</div>;
    //     menuMask= <div 
    //                 className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
    //                 onClick={()=> setShowMenu(!showMenu)} 
    //               ></div>
    // }
   

    return(
        <nav  className="p-3 text-xl">
           <span>
                <FontAwesomeIcon  icon={faBars}
                    onClick={()=> setShowMenu(!showMenu)}
                />
           </span>
           {
            maskTransitions.map(({ item, key, props }) =>
               item && <animated.div
                            key={key}
                            style={props}
                            className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
                            onClick={()=> setShowMenu(!showMenu)}
                        >
                    
                        </animated.div>)
           }
           
           {
            menuTransitions.map(({ item, key, props }) =>
               item && <animated.div
                            key={key}
                            style={props}
                            className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                        >
                            <span class="font-bold">
                                This is a menu
                            </span>
                            <ul >
                                <li>Home</li>
                                <li>Contact</li>
                            </ul>
                        </animated.div>)
           }
        </nav>
    )
}

export default Navigation;