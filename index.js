let sortDirection = false;

function sortTable(columnIndex) {
    const table = document.getElementById('chemicalTable');
    const rowsArray = Array.from(table.rows).slice(1);
    
    rowsArray.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();
        
        if (cellA < cellB) return sortDirection ? 1 : -1;
        if (cellA > cellB) return sortDirection ? -1 : 1;
        return 0;
    });

    sortDirection = !sortDirection;

    rowsArray.forEach(row => table.appendChild(row));
}

function editRow(button) {
    const row = button.parentElement.parentElement;
    const cells = row.cells;

    document.getElementById('rowIndex').value = row.rowIndex;
    document.getElementById('chemicalName').value = cells[1].innerText;
    document.getElementById('vendor').value = cells[2].innerText;
    document.getElementById('density').value = cells[3].innerText;
    document.getElementById('viscosity').value = cells[4].innerText;
    document.getElementById('packaging').value = cells[5].innerText;
    document.getElementById('packSize').value = cells[6].innerText;
    document.getElementById('unit').value = cells[7].innerText;
    document.getElementById('quantity').value = cells[8].innerText;

    document.getElementById('editForm').style.display = 'block';
}

function saveEdit() {
    const rowIndex = document.getElementById('rowIndex').value;
    const table = document.getElementById('chemicalTable');
    const row = table.rows[rowIndex].cells;

    row[1].innerText = document.getElementById('chemicalName').value;
    row[2].innerText = document.getElementById('vendor').value;
    row[3].innerText = document.getElementById('density').value;
    row[4].innerText = document.getElementById('viscosity').value;
    row[5].innerText = document.getElementById('packaging').value;
    row[6].innerText = document.getElementById('packSize').value;
    row[7].innerText = document.getElementById('unit').value;
    row[8].innerText = document.getElementById('quantity').value;

    document.getElementById('editForm').style.display = 'none';
}

function cancelEdit() {
    document.getElementById('editForm').style.display = 'none';
}
