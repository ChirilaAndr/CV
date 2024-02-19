document.addEventListener('DOMContentLoaded', function () {
    var toggleIcons = document.querySelectorAll('.toggle-icon');

    toggleIcons.forEach(function (toggleIcon) {
        toggleIcon.addEventListener('click', function () {
            var grandParentElement = this.parentNode.parentNode; // Adjust this line as needed
            var collapsibleContent = grandParentElement.querySelector('.collapsible-content');

            if (collapsibleContent.style.maxHeight) {
                // Collapse
                collapsibleContent.style.maxHeight = null;
            } else {
                // Expand
                collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";
            }

            // Optionally toggle the icon class
            this.classList.toggle('fa-chevron-down');
            this.classList.toggle('fa-chevron-up');
        });
    });
});


console.log("hello");