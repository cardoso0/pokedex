import * as S from './style'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import { Footer, Header } from '../../components'
import { usePagination } from '../../hook/usePagination'

export const Home = () => {
  
  const { loading, pageCount, changePage, displayPokemons } = usePagination()

  return (
    <div>
      <Header />
      <S.Bg>
      <Link to="/pokedex/searchpokemon"><div className="buscar">Buscar Pokemon</div></Link>
        {loading ? (
          <S.Loading></S.Loading>
        ) : (
          <S.Container>
            <div className='pokemons'>{displayPokemons}</div>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={0}
              onPageChange={changePage}
              containerClassName={"paginationBtns"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
              onClick={() => window.scrollTo(0, 0)}
            />
          </S.Container>
        )}
      </S.Bg>
      <Footer />
    </div>
  )
}