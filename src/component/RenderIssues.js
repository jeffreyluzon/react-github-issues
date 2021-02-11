import Issue from './Issue'
const RenderIssues= (props) => {
    const display = props.issues.map((issue ,i)=> {
       return <Issue issue={issue} key={`key${i}`} />
    })
    return(
        <div>
            {display}
        </div>
    )
}

export default RenderIssues