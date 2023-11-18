// import {ScanFace} from 'lucide-react';
const Prop = (props) =>{
        return(
            <>
            <table className='t1' border="2px solid black">
                <tr>
                    <td>NAME</td>
                    <td>{props.d}</td>
                </tr>
                <tr>
                    <td>AGE</td>
                    <td>{props.age}</td>
                </tr>
                <tr>
                    <td>EMAIL</td>
                    <td>{props.emal}</td>
                </tr>
                <tr>
                    <td>DEPT</td>
                    <td>{props.dept}</td>
                </tr>
                <tr>
                    <td>ph</td>
                    <td>{props.ph}</td>
                </tr>
            </table>
            <h1>{props.d}</h1>
            </>
        )
}
export default Prop;