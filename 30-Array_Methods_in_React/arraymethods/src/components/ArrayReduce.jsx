const ArrayReduce = ({ numberList }) => {
   
    return (
        <div>
            <h1>Filtered Name List(Filter)</h1>
            <ul>
                {/* write the code in a single line without using the return keyword */}
                {numberList.map((num, index) => (<li key={index}>{num}</li>))}
            </ul>
        </div>
    );
};

export default ArrayReduce;