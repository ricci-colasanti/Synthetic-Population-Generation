    // Your JSON data
        

// Populate dropdowns on page load
 // Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const filenameSelect = document.getElementById('filenameSelect');
    const descriptionSelect = document.getElementById('descriptionSelect');
    const dataDisplay = document.getElementById('dataDisplay');
    
    // Populate dropdowns
    censusData.forEach(item => {
        // Add filename option
        const filenameOption = document.createElement('option');
        filenameOption.value = item.filename;
        filenameOption.textContent = item.filename;
        filenameSelect.appendChild(filenameOption);
        
        // Add description option
        const descOption = document.createElement('option');
        descOption.value = item.filename;
        descOption.textContent = item.description;
        descriptionSelect.appendChild(descOption);
    });
    
    // Handle filename selection change
    filenameSelect.addEventListener('change', function() {
        const selectedFilename = this.value;
        if (selectedFilename) {
            // Update description dropdown to match
            descriptionSelect.value = selectedFilename;
            displayData(selectedFilename);
        } else {
            dataDisplay.style.display = 'none';
        }
    });
    
    // Handle description selection change
    descriptionSelect.addEventListener('change', function() {
        const selectedFilename = this.value;
        if (selectedFilename) {
            // Update filename dropdown to match
            filenameSelect.value = selectedFilename;
            displayData(selectedFilename);
        } else {
            dataDisplay.style.display = 'none';
        }
    });
});

// Display the selected data
function displayData(filename) {
    const selectedItem = censusData.find(item => item.filename === filename);
    if (!selectedItem) return;
    
    // Display basic info
    document.getElementById('selectedFilename').textContent = selectedItem.filename;
    document.getElementById('selectedDescription').textContent = selectedItem.description;
    document.getElementById('selectedYear').textContent = selectedItem.year;
    const fileLink = document.getElementById('fileLink');
    fileLink.href = selectedItem.file;
    fileLink.textContent = selectedItem.file;
    
    // Display files list
    const filesList = document.getElementById('filesList');
    filesList.innerHTML = ''; // Clear existing items
    selectedItem.files.forEach(file => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = file;
        filesList.appendChild(li);
    });
    
    // Display data types table
    const dataTypesTable = document.querySelector('#dataTypesTable tbody');
    dataTypesTable.innerHTML = ''; // Clear existing rows
    selectedItem.data_types.forEach(dataType => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dataType.name}</td>
            <td>${dataType.type}</td>
        `;
        dataTypesTable.appendChild(row);
    });
    
    // Show the data container
    document.getElementById('dataDisplay').style.display = 'block';
}