function MemoList({memos}) {
    console.log("테스트입니다" + memos[0].title);
    return (
        <div>
            {memos.map((memo, index) => (
                <div key={index}>{memo.title}</div>
            ))}
        </div>
    );
}
export default MemoList;