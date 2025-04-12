import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Type from './component/Type';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Avatar>
        <a target="_blank" href="https://github.com/frazzonn">
          <AvatarImage src="/public/25231.png" />
        </a>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Type />
    </>
  );
}

export default App;
