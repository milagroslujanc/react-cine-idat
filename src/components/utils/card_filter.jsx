import '../../styles/Card.css'

export function CardFilter(props) {

    return (
        <div className="card-filter">
            <div className="card-body d-flex justify-content-between">
                <div className="d-grid">
                    <span><b>{props.title}</b></span>
                    <span className="card-desc"><b>{props.desc}</b></span>
                </div>
                <span className='ms-4'>V</span>
            </div>
        </div>
    )
}