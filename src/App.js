import { memo, useState } from 'react';
import './App.css';
import MemoContainer from './component/MemoContainer';
import SideBar from './component/SideBar';
function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo 1',
      createAt: 1641225309267, //시간 값
      updateAt: 1641225309267, //시간 값
    },
    {
      title: 'Memo 2',
      content: 'This is memo 2',
      createAt: 1641225309267, //시간 값
      updateAt: 1641225309267, //시간 값
    },
])

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
