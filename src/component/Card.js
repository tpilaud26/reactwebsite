const Card =  ({source,title,width,height}) => {
    return(
    
        <div  className="col-12 col-md-4">
            <div className="card" >
                <img className="img fluid mb-2 card-img-top" src={source} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Width:{width}pixel</p>
                    <p className="card-text">Height:{height}pixel</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
)
}

export default Card