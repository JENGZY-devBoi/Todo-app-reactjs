import { useState } from 'react';

const colors = [
  'orange',
  'orangeyellow',
  'green',
  'pink',
  'blue',
  'purple',
  'brown'
];

function WorkspaceCreate({ onCreate }) {
  const [name, setName] = useState('');

  const handleOnChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const ranNum = Math.round(Math.random() * colors.length);

    onCreate(name, colors[ranNum]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        maxLength={15}
        value={name}
        onChange={handleOnChange}
      />
      <button>CREATE</button>
    </form>
  );
};
  
export default WorkspaceCreate;