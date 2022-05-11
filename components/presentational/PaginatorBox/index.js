export default function PaginatorBox({
    minPage=1,
    current=1, 
    limit=30, 
    rowsPerPage=10,
    onSubmit, 
    onLimitChange, 
    onPageChange
}) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('foo');
        }, 300);
    });
    
    function handleSubmitAfterChange(event) {
        Promise.all([onPageChange(event), onSubmit(event)]).then((values) => {
            console.log(true);
        });
    }
return (
        <form onChange={onSubmit}>
            <span>Rows per Page</span>
            <input
                name='pageNumber'
                type="number"
                min={minPage}
                max={limit}
                value={rowsPerPage}
                onChange={onLimitChange} 
            />
            <span>{current}/{limit}</span>
            <button name='page_min_value' onClick={handleSubmitAfterChange}>{'<<'}
            </button>
            <button name='page_previous_value' onClick={handleSubmitAfterChange}>{'<'}</button>
            <button name='page_next_value' onClick={handleSubmitAfterChange}>{'>'}</button>
            <button name='page_max_value' onClick={handleSubmitAfterChange}>{'>>'}</button>
        </form>
    )
}