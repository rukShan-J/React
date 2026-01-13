import ListItems from "./ListItems";

const UnorderedList = ({itemList}) => {
    return(
        <ul>
            <ListItems items={itemList}></ListItems>
        </ul>
    );
}

export default UnorderedList;