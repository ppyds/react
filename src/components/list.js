import "./list.css"

let isShow = false;
let arr = [{
    name: '哈哈',
    id: 1
}, {
    name: '哈哈1',
    id: 2
}, {
    name: '哈哈2',
    id: 3
}, {
    name: '哈哈3',
    id: 4
},]
export default () => (
    <div>
        {
            isShow ?
                <span>ok</span> :
                null
        }
        <ul>
            {
                arr.map((item) =>
                    (<li key={item.id}>{item.name}</li>))
            }
        </ul>
    </div>
);
