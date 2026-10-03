/**
 * API SERVICE LAYER (js/api-service.js)
 * Data Access Layer untuk memanggil decoupled JSON Data Providers dan memproses mock REST endpoints.
 * Berbasis ES6+ Async/Await dengan Defensive Error Handling & Fallback Hydration untuk protokol file://.
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
            console.warn('[ApiService.getProfile Fallback]: Memuat data fallback lokal (CORS/file:// protocol handling).', error);
            return ApiService.getFallbackProfile();
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
            console.warn('[ApiService.getProjects Fallback]: Memuat data proyek fallback lokal.', error);
            return ApiService.getFallbackProjects();
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
            console.warn('[ApiService.getServices Fallback]: Memuat data layanan fallback lokal.', error);
            return ApiService.getFallbackServices();
        }
    }

    /**
     * Simulasi Pengiriman RESTful POST Endpoint untuk formulir konsultasi layanan
     * @param {Object} payload DTO Serialized JSON Form Data
     * @returns {Promise<Object>} Respon API simulasi
     */
    static async submitServiceOrder(payload) {
        // Simulasi latensi jaringan (network delay 500ms)
        await new Promise(resolve => setTimeout(resolve, 500));

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

    // =========================================================================
    // FALLBACK DATASETS (Guna mendukung pembukaan langsung via file:// protocol)
    // =========================================================================

    static getFallbackProfile() {
        return {
            "developer": {
                "name": "Yesika Nadia Saragih",
                "nim": "12S24024",
                "studyProgram": "S1 Sistem Informasi",
                "institution": "Institut Teknologi Del",
                "course": "Pemrograman dan Pengujian Web (12S3101)",
                "email": "saragihyesika@gmail.com",
                "phone": "0878-6046-3635",
                "status": "Aktif",
                "bio": "Mahasiswi S1 Sistem Informasi di Institut Teknologi Del yang berfokus pada analisis sistem, perancangan antarmuka pengguna (UI/UX), pengelolaan basis data relasional, serta pengembangan aplikasi web yang modern, responsif, dan accessible.",
                "avatar": "profile.png"
            },
            "statistics": {
                "totalProjects": 6,
                "completedProjects": 5,
                "inProgressProjects": 1,
                "organizations": 4
            }
        };
    }

    static getFallbackProjects() {
        return [
            {
                "id": "syrs",
                "title": "SyRS",
                "subtitle": "Sistem Rekam Medis Klinik Del",
                "category": "system-analysis",
                "categoryName": "Analisis Sistem",
                "status": "completed",
                "statusText": "Selesai",
                "description": "Perancangan dan analisis kebutuhan sistem rekam medis elektronik terintegrasi untuk Klinik Pratama IT Del.",
                "longDescription": "Proyek SyRS dikembangkan untuk memodernisasi pencatatan riwayat medis pasien di Klinik IT Del secara terstruktur. Sistem mengintegrasikan pendataan rekam medis dokter, riwayat alergi obat, pendaftaran antrean online, serta pelaporan inventaris farmasi secara real-time.",
                "tags": ["Analisis Sistem", "SQL Server", "ERD", "SRS"],
                "role": "Anggota Tim Kelompok 08 (Analis Kebutuhan & Perancang Diagram ERD & Use Case)",
                "stack": ["SQL Server", "ERD Modeling", "Draw.io", "SRS Documentation"],
                "metrics": {
                    "teamSize": "4 Anggota",
                    "duration": "3 Bulan",
                    "context": "Analisis & Perancangan Sistem Informasi"
                },
                "icon": "bi-hospital",
                "badgeClass": "bg-primary-subtle text-primary border-primary-subtle"
            },
            {
                "id": "cis",
                "title": "CIS Klinik",
                "subtitle": "Sistem Informasi Klinik Pratama",
                "category": "uiux-design",
                "categoryName": "UI/UX Design",
                "status": "completed",
                "statusText": "Selesai",
                "description": "Pengembangan prototipe antarmuka interaktif dan dokumen alur kerja operasional klinik pratama.",
                "longDescription": "Prototipe antarmuka sistem informasi layanan klinik pratama mencakup alur registrasi mahasiswa, penjadwalan dokter piket, dan rekap medis mingguan yang intuitif dan ramah pengguna.",
                "tags": ["Figma Prototype", "UI/UX", "Use Case"],
                "role": "UI/UX Designer (Wireframing & High-Fidelity Prototype)",
                "stack": ["Figma", "Prototype", "Use Case Diagram", "Wireframe"],
                "metrics": {
                    "teamSize": "3 Anggota",
                    "duration": "2 Bulan",
                    "context": "Mata Kuliah Anaprancis"
                },
                "icon": "bi-activity",
                "badgeClass": "bg-info-subtle text-info-emphasis border-info-subtle"
            },
            {
                "id": "del-olympic",
                "title": "DelOlympic",
                "subtitle": "Portal Olimpiade IT Del",
                "category": "web-dev",
                "categoryName": "Web Dev",
                "status": "in-progress",
                "statusText": "In Progress",
                "description": "Sistem informasi manajemen pendaftaran dan klasemen jadwal kompetisi olimpiade tahunan IT Del.",
                "longDescription": "Platform web interaktif untuk memuat informasi babak kompetisi olimpiade sains dan pemrograman di IT Del, dilengkapi fitur pendaftaran tim online, jadwal pertandingan, dan papan skor klasemen real-time.",
                "tags": ["HTML5 / CSS3", "Bootstrap 5", "JavaScript"],
                "role": "Frontend Web Developer (Sistem Grid Bootstrap 5, Form Validation, & Responsive Layout)",
                "stack": ["Bootstrap 5.3", "HTML5 Semantik", "JavaScript DOM", "Git / GitHub"],
                "metrics": {
                    "teamSize": "5 Anggota",
                    "duration": "Berjalan",
                    "context": "Pemrograman & Pengujian Web (12S3101)"
                },
                "icon": "bi-trophy",
                "badgeClass": "bg-warning-subtle text-warning-emphasis border-warning-subtle"
            },
            {
                "id": "safescan",
                "title": "SafeScan Mobile",
                "subtitle": "Deteksi Ancaman Siber Mobile",
                "category": "uiux-design",
                "categoryName": "UI/UX Design",
                "status": "completed",
                "statusText": "Selesai",
                "description": "Rancangan aplikasi mobile deteksi dini phishing dan malware untuk kompetisi desain antarmuka.",
                "longDescription": "SafeScan merupakan perancangan aplikasi mobile interaktif yang membantu pengguna awam mendeteksi tautan phishing, mengidentifikasi kebocoran kredensial email, serta memberikan skor keamanan jaringan Wi-Fi secara intuitif.",
                "tags": ["UI/UX Competition", "Mobile Prototype", "Cybersecurity"],
                "role": "Lead UI/UX Designer (Design System, High-Fidelity Prototype, dan Usability Testing)",
                "stack": ["Figma", "Mobile Prototyping", "Design System", "Usability Test"],
                "metrics": {
                    "teamSize": "2 Anggota",
                    "duration": "1 Bulan",
                    "context": "Kompetisi Desain UI/UX Nasional"
                },
                "icon": "bi-shield-check",
                "badgeClass": "bg-danger-subtle text-danger border-danger-subtle"
            },
            {
                "id": "imuniku",
                "title": "Imuniku",
                "subtitle": "Portal Edukasi Imunisasi Anak",
                "category": "web-dev",
                "categoryName": "Web Dev",
                "status": "completed",
                "statusText": "Selesai",
                "description": "Situs web informasi jadwal imunisasi anak dan pelacakan riwayat tumbuh kembang balita.",
                "longDescription": "Website interaktif informasi dan pengingat jadwal imunisasi dasar anak balita terintegrasi dengan kalkulator usia dan grafik tumbuh kembang berbasis web responsif.",
                "tags": ["Design System", "Web Responsive", "Aksesibilitas"],
                "role": "UI Designer & Frontend Developer",
                "stack": ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
                "metrics": {
                    "teamSize": "3 Anggota",
                    "duration": "2 Bulan",
                    "context": "Mata Kuliah UI/UX"
                },
                "icon": "bi-heart-pulse",
                "badgeClass": "bg-success-subtle text-success border-success-subtle"
            },
            {
                "id": "globora",
                "title": "Globora",
                "subtitle": "Website Promosi Destinasi Wisata",
                "category": "web-dev",
                "categoryName": "Web Dev",
                "status": "completed",
                "statusText": "Selesai",
                "description": "Platform showcase promosi destinasi wisata lokal dengan fitur pencarian dan rekomendasi paket tur.",
                "longDescription": "Platform promosi destinasi wisata lokal Sumatera Utara untuk mendukung kewirausahaan digital dan pengalaman reservasi paket tur secara online.",
                "tags": ["Pariwisata", "Content Strategy", "UI Design"],
                "role": "Pengembang Konten & Frontend UI",
                "stack": ["HTML5", "CSS3", "Bootstrap", "Content Strategy"],
                "metrics": {
                    "teamSize": "4 Anggota",
                    "duration": "2 Bulan",
                    "context": "Mata Kuliah Keteknowiraan"
                },
                "icon": "bi-compass",
                "badgeClass": "bg-warning-subtle text-warning-emphasis border-warning-subtle"
            }
        ];
    }

    static getFallbackServices() {
        return [
            {
                "id": "web-dev-pack",
                "name": "Pengembangan Web Responsif",
                "category": "web-dev",
                "categoryName": "Web Development",
                "description": "Pengembangan situs web modern berbasis HTML5 semantik, CSS Variables, Bootstrap 5.3, dan JavaScript ES6+ yang responsif dan accessible.",
                "price": "Konsultasi / Proyek",
                "icon": "bi-code-slash",
                "badge": "Populer",
                "features": [
                    "Struktur Semantik HTML5 & WCAG 2.2 AA",
                    "Sistem Grid 12-Kolom Bootstrap 5.3",
                    "Dynamic Client-Side Rendering (CSR)",
                    "Optimasi Performa & Responsivitas Layar"
                ]
            },
            {
                "id": "uiux-design-pack",
                "name": "Desain Antarmuka & Prototyping",
                "category": "uiux-design",
                "categoryName": "UI/UX Design",
                "description": "Perancangan wireframe, design system, dan prototipe interaktif high-fidelity menggunakan Figma untuk aplikasi desktop dan seluler.",
                "price": "Konsultasi / Proyek",
                "icon": "bi-palette",
                "badge": "Kreatif",
                "features": [
                    "User Research & User Journey Map",
                    "Wireframing Low & High Fidelity",
                    "Interactive Figma Prototype",
                    "Design System & Component Library"
                ]
            },
            {
                "id": "database-sql-pack",
                "name": "Perancangan Basis Data & SQL",
                "category": "database-sql",
                "categoryName": "Database & Analysis",
                "description": "Pemodelan basis data relasional ERD, pembuatan skema SQL Server DDL/DML, perancangan trigger, serta dokumen kebutuhan sistem (SRS).",
                "price": "Konsultasi / Proyek",
                "icon": "bi-database",
                "badge": "Terstruktur",
                "features": [
                    "Pemodelan Konseptual & Logikal ERD",
                    "Query SQL Server DDL/DML & Stored Procedure",
                    "Dokumen Spesifikasi Kebutuhan Perangkat Lunak (SRS)",
                    "Diagram Use Case & Activity Diagram"
                ]
            }
        ];
    }
}
