import { useState, useRef, useEffect } from 'react';

const TEXT = 'quem nao gosta de levar fora gosta de levar dentro';

const Type = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });
  const comparar = (letra: string, posicao: number) => {
    if (posicao >= input.length) return '';
    return input[posicao] === letra ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        {TEXT.split('').map((char, i) => (
          <span key={i} className={comparar(char, i)}>
            {char}
          </span>
        ))}
      </div>
      <input
        className="opacity-0"
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Type;
