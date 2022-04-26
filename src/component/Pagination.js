const Pagination = ({page, nextPage}) => (
    <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
            <li className={"page-item "+(page<2?"disabled":"")}>
                <a className="page-link" onClick={() => nextPage(page - 1)}>Précédent</a>
            </li>
            {
                (page-2>0)?(
                    <li className="page-item "><a onClick={() => nextPage(page-2)} className="page-link" href="#">{page-2}</a></li>
                ):''
            }
            {
                (page-2>0)?(
                    <li className="page-item "><a onClick={() => nextPage(page-1)} className="page-link" href="#">{page-1}</a></li>
                ):''
            }
            <li className="page-item active"><a onClick={() => nextPage(page)} className="page-link" href="#">{page}</a></li>
            <li className="page-item "><a onClick={() => nextPage(page+1)} className="page-link" href="#">{page+1}</a></li>
            <li className="page-item"><a onClick={() => nextPage(page +2)} className="page-link" href="#">{page+2}</a></li>
            <li className="page-item">
                <a className="page-link" href="#" onClick={() => nextPage(page + 1)}>Suivant</a>
            </li>
        </ul>
    </nav>
)

export default Pagination

