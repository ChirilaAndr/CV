document.addEventListener('DOMContentLoaded', function () {
    var toggleIcons = document.querySelectorAll('.toggle-icon');

    toggleIcons.forEach(function (toggleIcon) {
        toggleIcon.addEventListener('click', function () {
            var grandParentElement = this.parentNode.parentNode; 
            var collapsibleContent = grandParentElement.querySelector('.collapsible-content');

            if (collapsibleContent.style.maxHeight) {
                // Collapse
                collapsibleContent.style.maxHeight = null;
            } else {
                // Expand
                collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";
            }
            this.classList.toggle('fa-chevron-down');
            this.classList.toggle('fa-chevron-up');
        });
    });
});

document.getElementById('chatWith').addEventListener('click', function(event) {
    const img = event.target; 
    if (!img) return; 
    const rect = img.getBoundingClientRect(); 
    const xClick = event.clientX - rect.left; 
    const yClick = event.clientY - rect.top; 
    if (xClick > rect.width - 25 && yClick < 25) {
        img.parentElement.style.display = 'none'; 
    }
});
