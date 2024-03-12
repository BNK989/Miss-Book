const { useState } = React
import { DataTableRow } from "./DataTableRow.jsx"

export function DataTable({ books, onRemovebook }) {

    const [expandedRowId, setExpandedRowId] = useState('')

    return <table border="1" className="data-table">
        <thead>
            <tr>
                <th style={{ width: '1em' }}>&nbsp;</th>
                {/* <th style={{ width: '5em' }}>Id</th> */}
                <th>Title</th>
                <th>Author/s</th>
                <th>price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book) =>
                <DataTableRow
                    key={book.id}

                    setExpandedRowId={setExpandedRowId}
                    expandedRowId={expandedRowId}
                    book={book}
                    onRemovebook={onRemovebook}
                />)}
        </tbody>
    </table>
}
