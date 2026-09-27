# 🌐 Halaman Web Portofolio Profil Profesional & Layanan Interaktif (Bootstrap 5.3)

### Modul Praktikum Minggu 03: Penguasaan CSS Lanjutan, CSS Selector Spesifisitas, dan Integrasi Bootstrap 5

![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3_Variables-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![WCAG 2.2](https://img.shields.io/badge/WCAG%202.2-AA%20Compliant-008080?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

---

## 📌 Informasi Mahasiswa & Mata Kuliah

- **Nama Mahasiswa**: Yesika Nadia Saragih
- **NIM**: 12S24024
- **Program Studi**: S1 Sistem Informasi
- **Institusi**: Institut Teknologi Del
- **Mata Kuliah**: Pemrograman dan Pengujian Web (12S3101)
- **Dosen Pengampu**: Chandro Pardede, S.Kom., M.Sc.
- **Tahun Akademik**: Semester Ganjil 2026/2027

---

## 📖 Deskripsi Pembaruan Proyek (Minggu 03)

Proyek ini merupakan **refactoring dan modernisasi halaman web portofolio personal & portal layanan** milik Yesika Nadia Saragih (NIM: 12S24024) dari HTML5 & CSS3 murni (Minggu 02) menjadi berstandar **Bootstrap 5.3+ Framework** dipadukan dengan **Advanced Custom CSS Overrides**.

Seluruh tata letak telah ditingkatkan menjadi **Sistem Grid 12-Kolom Responsif**, dilengkapi navigasi **Responsive Sticky Navbar dengan Toggle Collapse Hamburger**, komponen **Kartu Proyek Interaktif** yang terhubung ke **Modal Dialog Bootstrap**, serta **Formulir Layanan Kontak Modern** dengan **Floating Labels**, **Input Groups berikon**, dan **visual validation feedback** (`.valid-feedback` / `.invalid-feedback`).

---

## 📊 Tabel Komparasi: Sebelum vs Sesudah Integrasi Framework

| Area Komponen | Sebelum Integrasi (Minggu 2 - Pure HTML/CSS) | Sesudah Integrasi (Minggu 3 - Bootstrap 5.3 + Custom CSS) |
| :--- | :--- | :--- |
| **Sistem Grid & Layout** | Flexbox & CSS Grid manual via `@media (max-width: 768px)`. | **Bootstrap 12-Column Responsive Grid** (`container`, `row`, `col-lg-*`, `row-cols-1 row-cols-md-2 row-cols-lg-3 g-4`). |
| **Navigasi Web** | Panel Sidebar Fixed bertatanan landscape statis. | **Responsive Sticky Navbar (`sticky-top`)** dengan logo brand identity dan **tombol hamburger toggle collapse (`navbar-toggler`)** tanpa error JS. |
| **Portofolio Karya** | Penyajian data karya dalam tabel HTML5 semantik statis. | **Minimal 6 Kartu Proyek (`.card`)** responsif dengan banner, badge teknologi, deskripsi, dan tombol trigger ke **Bootstrap Modal Dialog (`.modal`)** detail proyek unik. |
| **Formulir Layanan** | Form HTML5 dengan fieldset & label standar. | **Formulir Layanan Modern**: Floating Labels (`.form-floating`), Input Groups berikon Bootstrap (`bi`), Dropdown Select (`.form-select`), Checkbox syarat & ketentuan, dan **Visual Validation Feedback** (`.valid-feedback` / `.invalid-feedback`). |
| **Penerapan CSS & Variables** | Deklarasi properti CSS manual tanpa variabel terpusat. | **CSS Custom Properties (`:root`)** mendefinisikan **minimal 6 variabel CSS** (`--primary-brand`, `--primary-accent`, `--surface-card`, `--card-radius`, `--shadow-lift`, dll.) dengan mikro-interaksi hover (`transform: translateY(-6px)` & `::before` accent bar) tanpa `!important`. |

---

## ✨ Fitur Utama Unggulan

1. **Struktur HTML5 Semantik & Accessible (WCAG 2.2 AA)**:
   - Penggunaan tag `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, dan `<footer>`.
2. **Responsive Sticky Navbar**:
   - Menu navigasi melayang di bagian atas layar (`sticky-top`) dengan kemampuan merapat (collapse) di layar mobile (<992px) secara mulus.
3. **Responsive Grid 12-Kolom Portofolio Karya**:
   - Kartu proyek tersusun rapi secara otomatis menyesuaikan resolusi perangkat (1 kolom di seluler, 2 kolom di tablet, 3 kolom di desktop).
4. **Interactive Bootstrap Modal Dialogs**:
   - Membuka jendela dialog pop-up detail proyek secara interaktif tanpa melakukan perpindahan halaman (*zero reload*).
5. **Formulir Layanan Modern dengan Validation**:
   - Tampilan input modern dengan ikon pendukung, animasi floating label, dan pesan validasi visual interaktif saat formulir dikirim.
6. **Advanced Custom CSS Overrides**:
   - Penimpaan gaya visual Bootstrap secara elegan melalui file `style.css` eksternal menggunakan variabel global `:root` dan animasi pseudo-element `::before`.

---

## 📂 Struktur Direktori Repositori

```text
ppw-2026-week2-12S24024/
├── index.html                 # Halaman Utama Portofolio & Layanan (Bootstrap 5.3 + Semantik)
├── style.css                  # Berkas Custom CSS Overrides & CSS Variables (:root)
├── profile.png                # Foto Profil Mahasiswa Yesika Nadia Saragih
├── README.md                  # Dokumentasi Resmi & Tabel Komparasi Proyek
└── .git/                      # Repositori Git (Cabang: week3-bootstrap)
```

---

## 🚀 Live Demo & Repository Link (GitHub Pages)

- **Cabang Git Aktif**: `week3-bootstrap`
- **Pesan Commit**: `feat(week3): refactor portfolio to bootstrap 5 grid and modern components`
- **Tautan Live Demo Portofolio**: [https://YesikaSaragih.github.io/ppw-2026-week2-12S24024/](https://YesikaSaragih.github.io/ppw-2026-week2-12S24024/)

---

© 2026 **Yesika Nadia Saragih (NIM: 12S24024)**. S1 Sistem Informasi • Institut Teknologi Del.
