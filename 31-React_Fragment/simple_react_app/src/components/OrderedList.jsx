import ListItems from "./ListItems";

const OrderedList = ({itemList}) => {
    return(
        <ol>
            <ListItems items={itemList}></ListItems>
        </ol>
    );
}

export default OrderedList;