const ArrayReduce = ({ numberList }) => {

    // add 10 as initial value
    // const sum = numberList.reduce((total,num)=>(total+num),10);
    
    const sum = numberList.reduce((total,num)=>(total+num));
   
    return (
        <div>
            <h1>Sum of Numbers(Reduce)</h1>
            <ul>
                {numberList.map((num, index) => (<li key={index}>{num}</li>))}
            </ul>
            <hr />
            <p>{sum}</p>
        </div>
    );
};

export default ArrayReduce;