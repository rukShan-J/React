const ArrayFilter = ({ nameList }) => {

    // filter names that start with 'A' or 'E'
    const filteredNames = nameList.filter((name) => name.toLowerCase().startsWith('a') || name.toLowerCase().startsWith('e'));
    
    return (
        <div>
            <h1>Filtered Name List(Filter)</h1>
            <ul>
                {/* write the code in a single line without using the return keyword */}
                {filteredNames.map((name, index) => (<li key={index}>{name}</li>))}
            </ul>
        </div>
    );
};

export default ArrayFilter;