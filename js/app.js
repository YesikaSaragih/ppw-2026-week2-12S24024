/**
 * PRESENTATION & CONTROLLER LAYER (js/app.js)
 * Mengelola Dynamic Client-Side Rendering (CSR), 4 UI States, Category Filtering,
 * Universal Dynamic Modal, Decoupled REST Form Dispatching, Toast Notifications, & LocalStorage.
 */
class App {
    constructor() {
        this.state = {
            profile: null,
            projects: [],
            services: [],
            activeCategory: 'all',
            isLoading: true,
            error: null,
            orders: []
        };

        this.init();
    }

    /**
     * Inisialisasi Aplikasi Web
     */
    async init() {
        this.loadOrdersFromLocalStorage();
        this.updateOrderBadgeUI();
        this.initContactForm();
        await this.fetchInitialData();
    }

    /**
     * Pengambilan Data Utama Asinkron dari Decoupled JSON Data Providers
     */
    async fetchInitialData() {
        this.state.isLoading = true;
        this.state.error = null;
        this.renderLoadingStates();

        try {
            const [profile, projects, services] = await Promise.all([
                ApiService.getProfile(),
                ApiService.getProjects(),
                ApiService.getServices()
            ]);

            this.state.profile = profile;
            this.state.projects = projects;
            this.state.services = services;
            this.state.isLoading = false;

            this.renderAll();
        } catch (error) {
            console.error('[App.fetchInitialData Error]:', error);
            this.state.isLoading = false;
            this.state.error = error.message || 'Gagal terhubung ke data provider JSON.';
            this.renderErrorState();
        }
    }

    /**
     * 1. UI STATE: RENDERING LOADING SKELETON / SPINNER
     */
    renderLoadingStates() {
        const projectsContainer = document.getElementById('projectsContainer');
        const servicesContainer = document.getElementById('servicesContainer');

        const skeletonCardHTML = `
            <div class="col">
                <div class="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
                    <div class="spinner-border text-primary mx-auto my-4" role="status">
                        <span class="visually-hidden">Memuat data...</span>
                    </div>
                    <p class="text-muted small mb-0">Memuat data proyek dinamis...</p>
                </div>
            </div>
        `;

        if (projectsContainer) {
            projectsContainer.innerHTML = Array(3).fill(skeletonCardHTML).join('');
        }
        if (servicesContainer) {
            servicesContainer.innerHTML = Array(3).fill(skeletonCardHTML).join('');
        }
    }

    /**
     * 2. UI STATE: RENDERING ERROR FALLBACK ALERT (DEFENSIVE)
     */
    renderErrorState() {
        const projectsContainer = document.getElementById('projectsContainer');
        if (projectsContainer) {
            projectsContainer.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-danger rounded-4 p-4 text-center shadow-sm" role="alert">
                        <i class="bi bi-exclamation-triangle-fill fs-1 text-danger mb-2 d-block"></i>
                        <h5 class="fw-bold mb-1">Gagal Memuat Data Terpisah</h5>
                        <p class="small text-secondary mb-3">${this.escapeHTML(this.state.error)}</p>
                        <button class="btn btn-outline-danger rounded-pill px-4" onclick="window.app.fetchInitialData()">
                            <i class="bi bi-arrow-clockwise me-1"></i> Coba Memuat Ulang
                        </button>
                    </div>
                </div>
            `;
        }
    }

    /**
     * Centralized Render Method (Success State)
     */
    renderAll() {
        this.renderCategoryFilters();
        this.renderProjectsGrid();
        this.renderServicesGrid();
    }

    /**
     * Render Tombol Filter Kategori Instan
     */
    renderCategoryFilters() {
        const filterContainer = document.getElementById('categoryFilters');
        if (!filterContainer) return;

        const categories = [
            { id: 'all', name: 'Semua Proyek' },
            { id: 'web-dev', name: 'Web Dev' },
            { id: 'uiux-design', name: 'UI/UX Design' },
            { id: 'system-analysis', name: 'Analisis Sistem' }
        ];

        filterContainer.innerHTML = categories.map(cat => {
            const isActive = this.state.activeCategory === cat.id;
            const btnClass = isActive 
                ? 'btn-primary shadow-sm' 
                : 'btn-outline-primary bg-white text-dark border-light-subtle';

            return `
                <button type="button" 
                        class="btn ${btnClass} rounded-pill px-3 py-1.5 fs-6 fw-semibold filter-btn"
                        data-category="${cat.id}">
                    ${cat.name}
                </button>
            `;
        }).join('');

        // Attach event listeners to filter buttons
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.getAttribute('data-category');
                this.state.activeCategory = category;
                this.renderCategoryFilters();
                this.renderProjectsGrid();
            });
        });
    }

    /**
     * 3 & 4. UI STATE: RENDERING PROJECTS GRID (SUCCESS & EMPTY STATE)
     */
    renderProjectsGrid() {
        const projectsContainer = document.getElementById('projectsContainer');
        if (!projectsContainer) return;

        // Filter projects based on active category
        const filtered = this.state.activeCategory === 'all'
            ? this.state.projects
            : this.state.projects.filter(p => p.category === this.state.activeCategory);

        // 3. UI STATE: EMPTY STATE
        if (filtered.length === 0) {
            projectsContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="card border-0 shadow-sm rounded-4 p-5">
                        <i class="bi bi-inbox fs-1 text-muted d-block mb-2"></i>
                        <h5 class="fw-bold text-muted mb-1">Tidak Ada Proyek Ditemukan</h5>
                        <p class="small text-secondary mb-0">Belum ada proyek dalam kategori "${this.escapeHTML(this.state.activeCategory)}".</p>
                    </div>
                </div>
            `;
            return;
        }

        // 4. UI STATE: SUCCESS RENDER STATE
        projectsContainer.innerHTML = filtered.map(proj => `
            <div class="col">
                <article class="unified-card h-100 d-flex flex-column justify-content-between p-4">
                    <div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="card-icon-box bg-primary-subtle text-primary">
                                <i class="bi ${proj.icon || 'bi-folder'}"></i>
                            </div>
                            <span class="badge ${proj.status === 'completed' ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-warning-subtle text-warning-emphasis border border-warning-subtle'} rounded-pill">
                                <i class="bi ${proj.status === 'completed' ? 'bi-check-circle' : 'bi-hourglass-split'} me-1"></i> ${this.escapeHTML(proj.statusText)}
                            </span>
                        </div>
                        <span class="text-primary fw-bold small text-uppercase">${this.escapeHTML(proj.categoryName)}</span>
                        <h3 class="h4 fw-bold mt-1 mb-2">${this.escapeHTML(proj.title)}</h3>
                        <p class="text-muted small mb-3">${this.escapeHTML(proj.description)}</p>
                        <div class="d-flex flex-wrap gap-1.5 mb-4">
                            ${proj.tags.map(tag => `<span class="badge bg-light text-secondary border">${this.escapeHTML(tag)}</span>`).join('')}
                        </div>
                    </div>
                    <button type="button" 
                            class="btn btn-outline-primary rounded-pill w-100 fw-semibold open-modal-btn"
                            data-project-id="${proj.id}">
                        Detail Proyek <i class="bi bi-arrow-right-circle ms-1"></i>
                    </button>
                </article>
            </div>
        `).join('');

        // Attach event listener for Universal Dynamic Modal Trigger
        projectsContainer.querySelectorAll('.open-modal-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projectId = e.currentTarget.getAttribute('data-project-id');
                this.openProjectModal(projectId);
            });
        });
    }

    /**
     * RENDER SERVICES CATALOG GRID
     */
    renderServicesGrid() {
        const servicesContainer = document.getElementById('servicesContainer');
        if (!servicesContainer) return;

        servicesContainer.innerHTML = this.state.services.map(srv => `
            <div class="col">
                <article class="unified-card h-100 d-flex flex-column justify-content-between p-4">
                    <div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="card-icon-box bg-primary-subtle text-primary">
                                <i class="bi ${srv.icon}"></i>
                            </div>
                            <span class="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill">${this.escapeHTML(srv.badge)}</span>
                        </div>
                        <h3 class="h5 fw-bold mb-2">${this.escapeHTML(srv.name)}</h3>
                        <p class="text-muted small mb-3 lh-relaxed">${this.escapeHTML(srv.description)}</p>
                        <ul class="list-unstyled small text-secondary mb-4">
                            ${srv.features.map(f => `<li class="mb-1.5"><i class="bi bi-check2-circle text-primary me-2"></i>${this.escapeHTML(f)}</li>`).join('')}
                        </ul>
                    </div>
                    <a href="#layanan" class="btn btn-outline-primary rounded-pill w-100 fw-semibold select-service-btn" data-topic="${srv.category}">
                        Pilih Paket Layanan <i class="bi bi-chevron-right ms-1"></i>
                    </a>
                </article>
            </div>
        `).join('');

        // Autofill dropdown topic when selecting a service
        servicesContainer.querySelectorAll('.select-service-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const topic = e.currentTarget.getAttribute('data-topic');
                const selectEl = document.getElementById('floatingSelectTopic');
                if (selectEl) {
                    selectEl.value = topic;
                }
            });
        });
    }

    /**
     * UNIVERSAL DYNAMIC MODAL COMPONENT (REQUIREMENT 4)
     * Menginjeksi konten proyek secara dinamis ke 1 modal tunggal berdasarkan ID
     * @param {string} projectId ID Proyek
     */
    openProjectModal(projectId) {
        const proj = this.state.projects.find(p => p.id === projectId);
        if (!proj) return;

        const modalTitle = document.getElementById('projectModalTitle');
        const modalBody = document.getElementById('projectModalBody');
        const modalEl = document.getElementById('universalProjectModal');

        if (!modalTitle || !modalBody || !modalEl) return;

        // XSS Defense: Dynamic injection using textContent & safe string escaping
        modalTitle.textContent = `${proj.title} - ${proj.subtitle}`;

        modalBody.innerHTML = `
            <div class="mb-3">
                <span class="badge ${proj.status === 'completed' ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-warning-subtle text-warning-emphasis border border-warning-subtle'} px-3 py-1.5 rounded-pill mb-2">
                    <i class="bi ${proj.status === 'completed' ? 'bi-check-circle' : 'bi-hourglass-split'} me-1"></i> Status: ${this.escapeHTML(proj.statusText)}
                </span>
                <h6 class="fw-bold text-primary mt-2 mb-2"><i class="bi bi-info-circle me-1"></i> Deskripsi Lengkap</h6>
                <p class="text-secondary lh-lg mb-3">${this.escapeHTML(proj.longDescription || proj.description)}</p>
            </div>

            <hr class="my-3">

            <div class="row g-3">
                <div class="col-md-6">
                    <h6 class="fw-bold text-dark"><i class="bi bi-person-badge me-1"></i> Peran & Tanggung Jawab</h6>
                    <p class="text-secondary small mb-0">${this.escapeHTML(proj.role)}</p>
                </div>
                <div class="col-md-6">
                    <h6 class="fw-bold text-dark"><i class="bi bi-stack me-1"></i> Stack Teknologi</h6>
                    <div class="d-flex flex-wrap gap-1">
                        ${proj.stack.map(st => `<span class="badge bg-secondary-subtle text-dark border">${this.escapeHTML(st)}</span>`).join('')}
                    </div>
                </div>
            </div>

            ${proj.metrics ? `
            <hr class="my-3">
            <div class="row g-2 text-center">
                <div class="col-4">
                    <div class="bg-light p-2 rounded-3">
                        <small class="text-muted d-block">Tim</small>
                        <strong class="text-dark small">${this.escapeHTML(proj.metrics.teamSize)}</strong>
                    </div>
                </div>
                <div class="col-4">
                    <div class="bg-light p-2 rounded-3">
                        <small class="text-muted d-block">Durasi</small>
                        <strong class="text-dark small">${this.escapeHTML(proj.metrics.duration)}</strong>
                    </div>
                </div>
                <div class="col-4">
                    <div class="bg-light p-2 rounded-3">
                        <small class="text-muted d-block">Konteks</small>
                        <strong class="text-dark small">${this.escapeHTML(proj.metrics.context)}</strong>
                    </div>
                </div>
            </div>
            ` : ''}
        `;

        // Bootstrap 5 Modal API Trigger
        const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
        bsModal.show();
    }

    /**
     * DECOUPLED ASYNCHRONOUS REST FORM DISPATCHING (REQUIREMENT 5)
     */
    initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Menghentikan full page reload

            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }

            const formData = new FormData(form);
            const payload = Object.fromEntries(formData.entries());

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnHTML = submitBtn.innerHTML;

            // Submit Button Loading State
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Mengirim...`;

            try {
                const response = await ApiService.submitServiceOrder(payload);

                // Save order to localStorage
                this.saveOrderToLocalStorage({
                    ...payload,
                    orderId: response.orderId,
                    timestamp: response.timestamp
                });

                // Show Bootstrap Toast Notification
                this.showToastNotification(
                    'Permintaan Terkirim!',
                    response.message || 'Permintaan konsultasi Anda berhasil diproses oleh API.'
                );

                form.reset();
                form.classList.remove('was-validated');
            } catch (err) {
                console.error('[App.initContactForm Error]:', err);
                this.showToastNotification(
                    'Gagal Mengirim!',
                    err.message || 'Terjadi kesalahan saat menghubungkan ke API.',
                    'bg-danger text-white'
                );
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHTML;
            }
        });
    }

    /**
     * PERSISTENSI STATE LOKAL LOCALSTORAGE
     * @param {Object} orderData 
     */
    saveOrderToLocalStorage(orderData) {
        this.state.orders.unshift(orderData);
        try {
            localStorage.setItem('yesika_service_orders', JSON.stringify(this.state.orders));
        } catch (e) {
            console.warn('[LocalStorage Error]:', e);
        }
        this.updateOrderBadgeUI();
    }

    /**
     * Memuat riwayat order dari localStorage
     */
    loadOrdersFromLocalStorage() {
        try {
            const saved = localStorage.getItem('yesika_service_orders');
            if (saved) {
                this.state.orders = JSON.parse(saved);
            }
        } catch (e) {
            console.warn('[LocalStorage Load Error]:', e);
            this.state.orders = [];
        }
    }

    /**
     * Update UI badge jumlah order aktif di navbar / header
     */
    updateOrderBadgeUI() {
        const badgeEl = document.getElementById('orderCountBadge');
        if (badgeEl) {
            const count = this.state.orders.length;
            badgeEl.textContent = count > 0 ? `${count} Pesanan` : '0 Pesanan';
            badgeEl.className = count > 0 ? 'badge bg-success rounded-pill' : 'badge bg-secondary rounded-pill';
        }
    }

    /**
     * TOAST NOTIFICATION COMPONENT
     */
    showToastNotification(title, message, headerClass = 'bg-primary text-white') {
        const toastEl = document.getElementById('toastNotification');
        const toastTitle = document.getElementById('toastTitle');
        const toastMessage = document.getElementById('toastMessage');
        const toastHeader = document.getElementById('toastHeader');

        if (!toastEl || !toastTitle || !toastMessage) return;

        toastTitle.textContent = title;
        toastMessage.textContent = message;
        if (toastHeader) {
            toastHeader.className = `toast-header ${headerClass}`;
        }

        const bsToast = bootstrap.Toast.getOrCreateInstance(toastEl);
        bsToast.show();
    }

    /**
     * Sanitasi String HTML untuk mencegah DOM XSS
     * @param {string} str 
     * @returns {string} Sanitized string
     */
    escapeHTML(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
}

// Inisialisasi Aplikasi saat DOM Siap
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
