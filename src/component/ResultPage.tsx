import Result from "./Result"

const ResultPage = ({student,currentPage}) => {

    let components = []
    student.map((item)=>{
        if(item.page==currentPage){
            components.push(
                <Result
                key={item.id}
                id={item.id}
                page={item.page}
                nisitId={item.nisitId}
                firstname={item.firstname}
                lastname={item.lastname}
                mid={item.mid}
                final={item.final}
                />
            )
        }
    })

    return (
        components
    )
}
export default ResultPage