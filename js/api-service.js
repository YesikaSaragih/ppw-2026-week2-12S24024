/**
 * API SERVICE LAYER (js/api-service.js)
 * Data Access Layer untuk memanggil decoupled JSON Data Providers dan memproses mock REST endpoints.
 * Berbasis ES6+ Async/Await dengan Defensive Error Handling.
 */
class ApiService {
    /**
     * Memuat data profil pengembang dari JSON provider
     * @returns {Promise<Object>} Data profil & statistik
     */
    static async getProfile() {
        try {
            const response = await fetch('./data/profile.json');
            if (!response.ok) {
                throw new Error(`HTTP Error ${response.status}: Gagal memuat data profil.`);
            }
            return await response.json();
        } catch (error) {
            console.error('[ApiService.getProfile Error]:', error);
            throw error;
        }
    }

    /**
     * Memuat koleksi data portofolio proyek dari JSON provider
     * @returns {Promise<Array>} List proyek
     */
    static async getProjects() {
        try {
            const response = await fetch('./data/projects.json');
            if (!response.ok) {
                throw new Error(`HTTP Error ${response.status}: Gagal memuat koleksi proyek.`);
            }
            return await response.json();
        } catch (error) {
            console.error('[ApiService.getProjects Error]:', error);
            throw error;
        }
    }

    /**
     * Memuat katalog paket layanan dari JSON provider
     * @returns {Promise<Array>} List paket layanan
     */
    static async getServices() {
        try {
            const response = await fetch('./data/services.json');
            if (!response.ok) {
                throw new Error(`HTTP Error ${response.status}: Gagal memuat katalog layanan.`);
            }
            return await response.json();
        } catch (error) {
            console.error('[ApiService.getServices Error]:', error);
            throw error;
        }
    }

    /**
     * Simulasi Pengiriman RESTful POST Endpoint untuk formulir konsultasi layanan
     * @param {Object} payload DTO Serialized JSON Form Data
     * @returns {Promise<Object>} Respon API simulasi
     */
    static async submitServiceOrder(payload) {
        // Simulasi latensi jaringan (network delay 600ms)
        await new Promise(resolve => setTimeout(resolve, 600));

        if (!payload || !payload.floatingNama || !payload.floatingEmail) {
            throw new Error('Validasi DTO Gagal: Nama dan Alamat Email wajib disertakan.');
        }

        const mockOrderId = `ORD-${Date.now().toString().slice(-6)}`;
        return {
            success: true,
            orderId: mockOrderId,
            timestamp: new Date().toISOString(),
            message: `Permintaan konsultasi layanan berhasil diproses oleh API (ID Pesanan: ${mockOrderId}).`
        };
    }
}
