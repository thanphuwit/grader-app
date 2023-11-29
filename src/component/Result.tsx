const Result = ({id,nisitId,firstname,lastname,mid,final}) => {
    return (
        <tr>
                <td>
                    <h1>{id}</h1>
                </td>
                <td>
                    <h1>{nisitId}</h1>
                </td>
                <td>
                    <h1>{firstname}</h1>
                </td>
                <td>
                    <h1>{lastname}</h1>
                </td>
                <td>
                    <h1>{mid}</h1>
                </td>
                <td>
                    <h1>{final}</h1>
                </td>
                <td>
                    <h1>{mid+final}</h1>
                </td>
            </tr>
    )
}
export default Result