const ArrayFindIndex = ({nameList}) => {

    const nameIndex = nameList.findIndex((name)=>(name.includes('r')));

    return (
        <div>  
            <h1>First Name Includes Letter 'r' (Find)</h1>
            <table border={1} cellPadding={5}>
                {nameList.map((name, index)=>(
                    <tr bgcolor={index == nameIndex ? "green" : ""}>
                        <td key={index}>{index}</td>
                        <td key={index}>{name}</td>
                    </tr>
                ))}
            </table>
            <hr />
            <p>{nameIndex}</p>
        </div> 
    );
};

export default ArrayFindIndex;