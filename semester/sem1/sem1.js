function openPreview(pdfUrl, title) {
            const modal = document.getElementById('previewModal');
            const iframe = document.getElementById('pdfFrame');
            const modalTitle = document.getElementById('modalTitle');
            
            iframe.src = pdfUrl;
            modalTitle.textContent = title;
            modal.classList.add('active');
        }

        function closePreview() {
            const modal = document.getElementById('previewModal');
            const iframe = document.getElementById('pdfFrame');
            
            modal.classList.remove('active');
            iframe.src = '';
        }

        // Close modal when clicking outside
        document.getElementById('previewModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closePreview();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePreview();
            }
        });