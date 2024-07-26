import { memo } from 'react';

const style = {
    width: "100%",
    height: "200px",
    color: "black",
    backgroundColor: "khaki"
}
export const ChildArea = memo((props) => {
    const { isOpen, onClickClose } = props;
    console.log("再レンダリングされた");
    const data = [...Array(2000).keys()];
    data.forEach(() => {
        console.log("...");
    });
    return (
        <>
            {isOpen ? (
            <div style={style}>
                <p>子コンポーネント {isOpen}</p>
                <button onClick={onClickClose}>閉じる</button>
            </div>
            ) : null}
        </>
    );
});
