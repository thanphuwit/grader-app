const Result = ({id,nisitId,firstname,lastname,work,mid,final,grade}) => {

    const calGrade = (mid,final) => {
        let total = mid+final
        if(total>=80){
            return 'A'
        }
        else if(total>=75){
            return 'B+'
        }
        else if(total>=70){
            return 'B'
        }
        else if(total>=65){
            return 'C+'
        }
        else if(total>=60){
            return 'C'
        }else if(total>=55){
            return 'D+'
        }
        else if(total>=50){
            return 'D'
        }
        else if(total<=49){
            return 'F'
        }
    }

    return (
        <tr className="">
                <td className='text-center rounded-lg '>
                    <h1>{id}</h1>
                </td>
                <td className='text-center rounded-md border-2 bg-white'>
                    <h1>{nisitId}</h1>
                </td>
                <td className='text-center rounded-md border-2 bg-white'>
                    <h1>{firstname}</h1>
                </td>
                <td className='text-center rounded-md border-2 bg-white'>
                    <h1>{lastname}</h1>
                </td>
                <td className='text-center rounded-md border-2 bg-white'>
                    <h1>{work}</h1>
                </td>
                <td className='text-center rounded-md border-2 bg-white'>
                    <h1>{mid}</h1>
                </td>
                <td className='text-center rounded-md border-2 bg-white'>
                    <h1>{final}</h1>
                </td>
                <td className='text-center rounded-md border-2 bg-white'>
                    <h1>{work+mid+final}</h1>
                </td>
                <td className='text-center rounded-md border-2 bg-white'>
                    <h1>{grade}</h1>
                </td>
            </tr>
    )
}
export default Result