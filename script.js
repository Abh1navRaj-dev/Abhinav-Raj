document.addEventListener('DOMContentLoaded', () => {
    // --- Modal Logic for Portfolio Page ---
    const modal = document.getElementById('project-modal');

    // Only run this code if the modal exists on the current page
    if (modal) {
        const projectItems = document.querySelectorAll('.portfolio-grid .work-item');
        const closeModalBtn = document.querySelector('.close-modal');

        const modalMainImage = document.getElementById('modal-main-image');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalGallery = document.getElementById('modal-gallery');
        const modalRightPane = document.querySelector('.modal-right');

        projectItems.forEach(item => {
            item.addEventListener('click', () => {
                // 1. Get data from data-* attributes
                const mainImage = item.dataset.mainImage;
                const title = item.dataset.title;
                const description = item.dataset.description;
                // Safely parse JSON, provide an empty array as fallback
                const galleryImages = JSON.parse(item.dataset.galleryImages || '[]');

                // 2. Populate the modal
                modalMainImage.src = mainImage;
                modalMainImage.alt = title;
                modalTitle.textContent = title;
                modalDescription.textContent = description;

                // Clear previous gallery images
                modalGallery.innerHTML = '';

                // Populate gallery and handle its visibility
                if (galleryImages && galleryImages.length > 0) {
                    modalRightPane.style.display = 'flex'; // Show right pane
                    galleryImages.forEach(imgSrc => {
                        const img = document.createElement('img');
                        img.src = imgSrc;
                        img.alt = 'Project gallery image';
                        img.loading = 'lazy';
                        modalGallery.appendChild(img);
                    });
                } else {
                    modalRightPane.style.display = 'none'; // Hide right pane if no images
                }

                // 3. Show the modal
                modal.classList.add('show-modal');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        });

        // Function to close the modal
        const closeModal = () => {
            modal.classList.remove('show-modal');
            document.body.style.overflow = 'auto'; // Restore scrolling
        };

        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (event) => event.target === modal && closeModal());
        document.addEventListener('keydown', (event) => event.key === 'Escape' && closeModal());
    }
});