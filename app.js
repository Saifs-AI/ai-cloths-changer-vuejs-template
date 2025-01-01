new Vue({
    el: '#app',
    data: {
        previewImage: null,
        selectedStyle: null,
        clothingStyles: [
            { name: 'Casual Wear', id: 1 },
            { name: 'Formal Suit', id: 2 },
            { name: 'Party Dress', id: 3 },
            { name: 'Business Casual', id: 4 },
            { name: 'Sports Wear', id: 5 },
            { name: 'Evening Gown', id: 6 }
        ]
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.previewImage = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        selectStyle(index) {
            this.selectedStyle = index;
            // Here you would typically make an API call to your AI service
            // For demo purposes, we'll just show an alert
            if (this.previewImage) {
                alert('Processing image with ' + this.clothingStyles[index].name + ' style...');
            } else {
                alert('Please upload an image first!');
            }
        }
    }
}); 