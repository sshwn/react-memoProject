import MemoList from "./MemoList";
import SideBarFooter from "./SideBarFooter";
import SideBarHeader from "./SideBarHeader";

function SideBar({memos, setSelectedMemoIndex, selectedMemoIndex}) {
    return (
        <div className="SideBar">
            <SideBarHeader />
            <MemoList memos={memos} setSelectedMemoIndex={setSelectedMemoIndex}
            selectedMemoIndex={selectedMemoIndex}/>
            <SideBarFooter />
        </div>
    );
}

export default SideBar;