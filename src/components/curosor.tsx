import React, {useState} from 'react';

export default function Cursor () {
      /*circle styles */
      const [left, setLeft] = useState<string>();
      const [right, setRight] = useState<string>();
    
      const setCursor = (e:React.MouseEvent) => {
        const x = e.pageX;
            const y = e.pageY;
            setLeft(`${x}px`)
            setRight(`${y}px`)   
    };
 
  return (
      <div  className="cursorContainer"onMouseMove={(e)=> setCursor(e)}>
    
        {/*circle that will follow cursor */}
        <span className="cursorCircle" style={{left:`${left}`, top:`${right}`}}></span>
    </div>
  );
};