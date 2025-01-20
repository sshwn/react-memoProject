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
]);

const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);  // 초기값은 0 (첫번째 인덱스의 메모를 선택했다.)

const setMemo = (newMemo) => {
  const newMemos = [...memos]; // 불변성 주의하기위해 새로운 배열을 만든다.(원본 건들지않도록 주의)

  newMemos[selectedMemoIndex] = newMemo;

  setMemos(newMemos);
  // 주소값이 기준이되므로 기존의 주소값을 그대로 넣어서 화면에 변경이없어 rerendering이 되지않는다고함  ... 을 붙이면 새 ref를 생성한다. 또는 원본을 복사해서 사용
}

const addMemo = () => {
  const now = new Date().getTime();
  setMemos([
    ...memos, 
    {
     title: 'Untitled',
     content: '',
     createAt: now,
     updateAt: now
    },
  ]);
  setSelectedMemoIndex(memos.length);
};
  return (
    <div className="App">
      <SideBar 
        memos={memos} 
        addMemo={addMemo}
        setSelectedMemoIndex={setSelectedMemoIndex} 
        selectedMemoIndex={selectedMemoIndex}/>
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
