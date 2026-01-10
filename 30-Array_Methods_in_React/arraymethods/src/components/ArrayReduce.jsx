const ArrayReduce = ({ numberList }) => {

    const sum = numberList.reduce((total,num)=>(total+num));
   
    return (
        <div>
            <h1>Filtered Name List(Filter)</h1>
            <ul>
                {/* write the code in a single line without using the return keyword */}
                {numberList.map((num, index) => (<li key={index}>{num}</li>))}
            </ul>
            <hr />
            <p>{sum}</p>
        </div>
    );
};

export default ArrayReduce;