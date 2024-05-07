// JavaScript for photo capture (requires user permission)
        document.getElementById('photo').addEventListener('change', function (e) {
            const photoPreview = document.getElementById('photo-preview');
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.style.maxWidth = '100%';
                    photoPreview.innerHTML = ''; // Clear previous previews
                    photoPreview.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });