import './index.css'
function MemoContainer({memo, setMemo}) {

    if(memo === undefined) {
        return (
            <div>
                <h1>메모가 없습니다.</h1>
                <h2>새로운 메모를 추가해주세요.</h2>    
            </div>
        )
    }

    return (
        <div className="MemoContainer">
            <div>
                <input type="text" 
                className="MemoContainer_title" 
                value={memo.title}
                onChange={(e) => {
                    setMemo({
                        ...memo,    // 기존정보 유지하기위해
                        title: e.target.value,
                        updateAt: new Date().getTime(),
                    });
                }}
            />
            </div>
            <div>
                <textarea 
                className="MemoContainer_content" 
                value={memo.content}
                onChange={(e) => {
                    setMemo({
                        ...memo,    // 기존정보 유지하기위해
                        content: e.target.value,
                        updateAt: new Date().getTime(),
                    })
                }}
                />
            </div>
        </div>
    );
}

export default MemoContainer;