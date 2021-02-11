
export default function Issue (prop) {

        return (
            <div className='issue-card'>
                <p>
                    Link: <a href={prop.issue.html_url}>{prop.issue.title}</a>
                </p>
            </div>
    )
}