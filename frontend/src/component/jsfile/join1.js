const join = () => {
        document.getElementById('background').addEventListener('change', function () {
        // Hide all background-specific fields
        document.getElementById('uba_fields').style.display = 'none';
        document.getElementById('women_welfare_fields').style.display = 'none';
        document.getElementById('ngo_fields').style.display = 'none';
        document.getElementById('other_fields').style.display = 'none';

        // Show the selected background-specific fields
        var selectedBackground = this.value;
        if (selectedBackground === 'uba') {
            document.getElementById('uba_fields').style.display = 'block';
        } else if (selectedBackground === 'women_welfare') {
            document.getElementById('women_welfare_fields').style.display = 'block';
        } else if (selectedBackground === 'ngo') {
            document.getElementById('ngo_fields').style.display = 'block';
        }
        else if (selectedBackground === 'other') {
            document.getElementById('other_fields').style.display = 'block';
        }
    });
}

export default join;