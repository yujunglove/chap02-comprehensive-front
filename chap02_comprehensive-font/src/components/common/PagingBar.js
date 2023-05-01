import PagingBarCSS from './PagingBar.module.css';

function PagingBar({ pageInfo, setCurrentPage}) {

    const pageNumber = [];
    if (pageInfo) {
        for(let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
            pageNumber.push(i);
        }
    }
    return (
        <div style= { { listStyleType : 'none', display : 'flex'} }>
            <button className={ PagingBarCSS.pagingBtn }
                onClick={ () => setCurrentPage(pageInfo.currentPage -1 ) }
                disabled={ pageInfo.currentPage <= 1 }
            >옆</button>
            { pageNumber.map(num => (
                <li key={num} onClick={ () => setCurrentPage(num )}>
                    <button className={ PagingBarCSS.pagingBtn } 
                    style={ pageInfo.currentPage === num ? { backgroundColor : 'orange'} : null }
                    >
                        {num}
                        </button>
                </li>
            ))}
        
        <button className={ PagingBarCSS.pagingBtn }
                onClick={ () => setCurrentPage(pageInfo.currentPage +1 ) }
                disabled={ pageInfo.currentPage >= pageInfo.maxPage }
            >옆</button>
        </div>
    );
}

export default PagingBar;