import { CardFilter } from "./utils/card_filter"
import { BtnFilter } from "./utils/btn_filter"
import '../styles/Card.css'

export function FilterMovies() {
    return (
        <div className="container-filter">
            <h2>Encuentra tu película favorita</h2>
            <div className="d-flex gap-5">
                <div className="d-flex cards-container">
                    <CardFilter title={'Por Película'} desc={'¿Que deas ver?'} className="first-card" />
                    <CardFilter title={'Por Ciudad'} desc={'¿En dónde?'} />
                    <CardFilter title={'Por Cine'} desc={'¿En qué cine?'} />
                    <CardFilter title={'Por Fecha'} desc={'¿Cuándo?'} />
                </div>
                <BtnFilter />
            </div>
        </div>
    )
}