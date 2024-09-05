import { useContext } from 'react';
import Mycontext from './context';

function ContextComponent() {
  const value = useContext(Mycontext);

  return (
    <div>
      <p>Context Value: {value}</p>
    </div>
  );
}

export default ContextComponent;
