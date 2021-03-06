import {ReactComponent as Arrow} from 'assets/img/leftArrow.svg';
import { MoviePage } from 'types/movie';
import './styles.css';

type Props ={
    page: MoviePage ; 
    onAnother: Function;
}

function Pagination({ page, onAnother } : Props){
    return(
        <div className="dsmovie-pagination-container">
        <div className="dsmovie-pagination-box">
            <button className="dsmovie-pagination-button" disabled={page.first}
            onClick={() => onAnother(page.number - 1 )} >
                <Arrow />
            </button>
            <p>{`${page.number + 1} de ${page.totalPages}`}</p>
            <button className="dsmovie-pagination-button" disabled={page.last}
             onClick={() => onAnother(page.number + 1 )} >
                <Arrow className="dsmovie-flip-horizontal" />
            </button>
        </div>
    </div>
    );
}
export default Pagination;