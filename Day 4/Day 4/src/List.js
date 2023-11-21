import Summa from "./Summa";

const List = ()=>{
    // const l = ["Apple","Banana","Orange"]
    const l = [
        {id:1,name:"Abhi",age:18},
        {id:2,name:"Bhuvi",age:21},
        {id:3,name:"Songi",age:23}
    ]
    return(
        <div>
            {/* <h1>{l[0]}</h1>
            <h1>{l[1]}</h1>
            <h1>{l[2]}</h1> */}
            {l.map(x => <Summa key={x.id} lItems={x}/>)}
        </div>
    )
}
export default List;