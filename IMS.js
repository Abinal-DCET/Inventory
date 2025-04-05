function filterItems() {
    let selectedTypes = Array.from(document.querySelectorAll('.filterCheckbox:checked')).map(cb => cb.value);
    let rows = document.querySelectorAll('#inventory-body tr');
    
    rows.forEach(row => {
        let type = row.cells[4].innerText;
        row.style.display = selectedTypes.length === 0 || selectedTypes.includes(type) ? '' : 'none';
    });
}

let editingRow = null; 

function editItem(button) {
    let row = button.parentElement.parentElement;
    let cells = row.getElementsByTagName('td');

   
    document.getElementById('itemName').value = cells[0].innerText;
    document.getElementById('itemDetails').value = cells[1].innerText;
    document.getElementById('itemQuantity').value = cells[2].innerText;
    document.getElementById('itemPrice').value = cells[3].innerText;
    document.getElementById('itemType').value = cells[4].innerText;

    
    editingRow = row;

   
    openModal();
}

function addItem() {
    let name = document.getElementById('itemName').value;
    let details = document.getElementById('itemDetails').value;
    let quantity = document.getElementById('itemQuantity').value;
    let price = document.getElementById('itemPrice').value;
    let type = document.getElementById('itemType').value;
    let table = document.getElementById('inventory-body');

    if (editingRow) {
       
        editingRow.cells[0].innerText = name;
        editingRow.cells[1].innerText = details;
        editingRow.cells[2].innerText = quantity;
        editingRow.cells[3].innerText = price;
        editingRow.cells[4].innerText = type;
        
        
        editingRow = null;
    } else {
       
        let row = table.insertRow();
        row.innerHTML = `<td>${name}</td><td>${details}</td><td>${quantity}</td><td>${price}</td><td>${type}</td>
            <td>
                <button onclick="editItem(this)">Edit</button>
                <button onclick="this.parentElement.parentElement.remove()">Remove</button>
            </td>`;
    }

    closeModal();
}

function openModal() {
    document.getElementById('itemModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('itemModal').style.display = 'none';
    editingRow = null; 
}

function sortItems() {
    let sortBy = document.getElementById("sortOptions").value;
    let table = document.getElementById("inventory-body");
    let rows = Array.from(table.getElementsByTagName("tr"));
    let sortOrder = document.getElementById("sortButton").dataset.order === "asc" ? "desc" : "asc";
    document.getElementById("sortButton").dataset.order = sortOrder;
    
    if (sortBy === "quantity" || sortBy === "price") {
        let columnIndex = sortBy === "quantity" ? 2 : 3;
        rows.sort((a, b) => {
            let valA = parseFloat(a.cells[columnIndex].textContent) || 0;
            let valB = parseFloat(b.cells[columnIndex].textContent) || 0;
            return sortOrder === "asc" ? valA - valB : valB - valA;
        });
    }
    
    table.innerHTML = "";
    rows.forEach(row => table.appendChild(row));
    
    document.getElementById("sortButton").textContent = sortOrder === "asc" ? "🔼🔽" : "🔽🔼";
}
