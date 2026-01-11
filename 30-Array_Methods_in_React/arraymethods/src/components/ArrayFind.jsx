const ArrayFind = ({nameList,numberList}) => {

    // assigns the first found value to ‘max’ variable
    const max = numberList.find((num)=>(num>5));
    const nameWithR = nameList.find((name)=>(name.includes('r')));

    return (
        <div>
            <h1>First Number Greater Than 5 (Find)</h1>
            <table border={1} cellPadding={5}>
                <tr>
                    {numberList.map((num, index)=>(
                        <td align="center" key={index}>{num}</td>
                    ))}
                </tr>
            </table>
            <hr />
            <p>{max}</p>
            
            <h1>First Name Includes Letter 'r' (Find)</h1>
            <table border={1} cellPadding={5}>
                <tr>
                    {nameList.map((name, index)=>(
                        <td align="center" key={index}>{name}</td>
                    ))}
                </tr>
            </table>
            <hr />
            <p>{nameWithR}</p>
        </div>
    );
};

export default ArrayFind;