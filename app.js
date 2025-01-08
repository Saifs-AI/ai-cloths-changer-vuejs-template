new Vue({
    el: '#app',
    data: {
        personImage: null,
        garmentImage: null,
        selectedBodyPart: '',
        isProcessing: false
    },
    methods: {
        handlePersonImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.personImage = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        handleGarmentImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.garmentImage = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        triggerPersonFileInput() {
            this.$refs.personFileInput.click();
        },
        triggerGarmentFileInput() {
            this.$refs.garmentFileInput.click();
        },
        tryOn() {
            if (!this.personImage || !this.garmentImage) {
                alert('Please upload both a person photo and a garment image.');
                return;
            }
            
            if (!this.selectedBodyPart) {
                alert('Please select a body part.');
                return;
            }

            this.isProcessing = true;
            // Here you would typically make an API call to your AI service
            // For demo purposes, we'll just show an alert
            alert('Processing images... This would typically call your AI service endpoint.');
            this.isProcessing = false;
        }
    }
}); 