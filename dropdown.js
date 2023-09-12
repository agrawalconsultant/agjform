document.addEventListener("DOMContentLoaded", function () {
    // Get references to all three search inputs and dropdown contents
    const searchInput1 = document.getElementById("searchInput1");
    const searchInput2 = document.getElementById("searchInput2");
    const searchInput3 = document.getElementById("searchInput3");
    const dropdownContent1 = document.querySelectorAll(".dropdown-content")[0];
    const dropdownContent2 = document.querySelectorAll(".dropdown-content")[1];
    const dropdownContent3 = document.querySelectorAll(".dropdown-content")[2];

    // Function to handle dropdown behavior
    function handleDropdown(searchInput, dropdownContent) {
        // Show the dropdown when the input field is focused
        searchInput.addEventListener("focus", function () {
            dropdownContent.classList.add("show");
        });

        // Hide the dropdown when the input field loses focus
        searchInput.addEventListener("blur", function () {
            setTimeout(function () {
                dropdownContent.classList.remove("show");
            }, 200);
        });

        // Filter options based on user input in real-time
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase();
            const options = dropdownContent.querySelectorAll("a");

            options.forEach(function (option) {
                const text = option.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    option.style.display = "inline-block";
                } else {
                    option.style.display = "none";
                }
            });

            // Show/hide the dropdown based on whether there are matching options
            if (dropdownContent.querySelector("a[style='display: inline-block;']")) {
                dropdownContent.classList.add("show");
            } else {
                dropdownContent.classList.remove("show");
            }
        });

        // Handle option selection
        dropdownContent.addEventListener("click", function (e) {
            if (e.target.tagName === "A") {
                searchInput.value = e.target.textContent;
                dropdownContent.classList.remove("show");
            }
        });
    }

    // Call the function for each dropdown
    handleDropdown(searchInput1, dropdownContent1);
    handleDropdown(searchInput2, dropdownContent2);
    handleDropdown(searchInput3, dropdownContent3);
});


