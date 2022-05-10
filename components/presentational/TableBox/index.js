import styles from './TableBox.module.css'

export function TableBox({
    items
}) {
    const fieldList = items.length > 0 ? Object.keys(items[0]) : [];

    function TableColumn(columnList) {
        return Object.keys(columnList).map((field, index) => {
            return (<td key={index} className={`TableBox--column_${field}`}>{columnList[field]}</td>)
        })
    }

    function TableRow(tableList) {
        const rows = tableList.map((field, index) => {
            return (<tr key={index} className={`TableBox--row_${index}`} >{TableColumn(field)}</tr>)
        })
        return (<tbody>{rows}</tbody>)
    }

    return (
        <> 
            <table className={styles.TableBox}>
                <tr>{fieldList.map(header => (<th className={`TableBox--header_${header}`} key={header}>{header}</th>))}</tr>
                {TableRow(items)}
            </table>
        </>
    )
}
