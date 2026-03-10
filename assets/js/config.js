// API Configuration
const CONFIG = {
    // URL of the backend server (where the 'server' folder is hosted)
    // Replace with your actual backend URL: e.g., 'https://smi-api.yourdomain.com'
    API_SERVER_URL: 'https://smi.hsvikrant.dpdns.org',

    get API_BASE() { return `${this.API_SERVER_URL}/api`; },
    get IMG_BASE() { return `${this.API_SERVER_URL}/images/`; },

    // Static Images (Placeholders/Fallbacks)
    STATIC_IMAGES: {
        PLACEHOLDER: 'assets/img/placeholder.jpg',
        LOGO: 'logo.png',
        DEFAULT_PROFILE: 'assets/img/default-profile.png',
        NO_IMAGE: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="sans-serif" font-size="18"%3ENo Image%3C/text%3E%3C/svg%3E'
    },

    // API Endpoints
    ENDPOINTS: {
        STAFF: 'staff',
        NOTICES: 'notices',
        ASSETS: 'assets',
        TOPPERS: 'toppers',
        BIRTHDAYS: 'birthdays'
    },

    // Helper function to get full API URL
    getEndpoint(endpoint, params = {}) {
        let url = `${this.API_BASE}/${endpoint}`;
        const queryParams = new URLSearchParams(params);
        if (queryParams.toString()) {
            url += `?${queryParams.toString()}`;
        }
        return url;
    },

    // Helper function to get image URL
    getImageUrl(path) {
        if (!path) return this.STATIC_IMAGES.PLACEHOLDER;
        if (path.startsWith('http') || path.startsWith('data:')) return path;

        // If it's a relative path from the database, it points to the backend server's images
        return this.IMG_BASE + path;
    },

    // Helper to get static image
    getStaticImage(name) {
        return this.STATIC_IMAGES[name.toUpperCase()] || this.STATIC_IMAGES.PLACEHOLDER;
    }
};
