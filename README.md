# 🌐 Portofolio Web Personal & Portal Layanan (Bootstrap 5.3)

### Modul Praktikum Minggu 03: Penguasaan CSS Lanjutan, Spesifisitas Selector, dan Integrasi Bootstrap 5

![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3_Variables-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![WCAG 2.2](https://img.shields.io/badge/WCAG%202.2-AA%20Compliant-008080?style=for-the-badge)

---

## 📌 Informasi Mahasiswa

- **Nama**: Yesika Nadia Saragih
- **NIM**: 12S24024
- **Program Studi**: S1 Sistem Informasi
- **Institusi**: Institut Teknologi Del
- **Mata Kuliah**: Pemrograman dan Pengujian Web (12S3101)
- **Dosen Pengampu**: Chandro Pardede, S.Kom., M.Sc.
- **Tahun Akademik**: Semester Ganjil 2026/2027

---

## 📖 Ringkasan Proyek

Repositori ini memuat pembaruan halaman web portofolio personal dan portal layanan kontak milik Yesika Nadia Saragih. Pada praktikum Minggu 3 ini, tampilan dan struktur situs web yang sebelumnya dibangun menggunakan HTML/CSS murni (Minggu 2) dikembangkan dan direfaktor menggunakan framework **Bootstrap 5.3** serta **Custom CSS Overrides**.

Proyek ini dirancang agar responsif, modern, dan nyaman diakses di berbagai perangkat, dengan tetap mempertahankan struktur HTML5 semantik serta standar aksesibilitas web.

---

## 📊 Tabel Komparasi: Sebelum vs Sesudah Integrasi Framework

Tabel berikut merangkum perbedaan utama antara tampilan web sebelum dan sesudah diintegrasikan dengan Bootstrap 5.3:

| Area Evaluasi | Sebelum (Minggu 2 - HTML/CSS Murni) | Sesudah (Minggu 3 - Bootstrap 5 & Custom CSS) |
| :--- | :--- | :--- |
| **Sistem Grid & Layout** | Menggunakan Flexbox dan CSS Grid manual. | Menggunakan **Sistem Grid 12-Kolom Responsif** Bootstrap (`container`, `row`, `col-lg-*`, `g-4`). |
| **Navigasi Web** | Sidebar statis di bagian samping. | **Sticky Navbar (`sticky-top`)** melayang dengan tombol hamburger toggle yang responsif di tampilan seluler. |
| **Portofolio Karya** | Rekapitulasi karya ditampilkan dalam tabel statis. | **Grid 6 Kartu Proyek (`.card`)** yang terhubung ke **Bootstrap Modal Dialog (`.modal`)** interaktif. |
| **Formulir Layanan** | Formulir standar HTML5. | Formulir modern dengan **Floating Labels (`.form-floating`)**, Input Groups berikon, dan **umpan balik validasi visual** (`.valid-feedback` / `.invalid-feedback`). |
| **Pengelolaan CSS** | Deklarasi properti CSS biasa tanpa variabel global. | Menggunakan **CSS Variables (`:root`)** untuk konsistensi warna dan gaya, dengan **Zero `!important`**. |

---

## ✨ Fitur Utama

1. **Responsive Sticky Navbar**:
   - Menu navigasi melayang di bagian atas halaman yang dapat menutup (*collapse*) menjadi menu hamburger di layar ponsel.
2. **Hero Section Modern**:
   - Tampilan pembuka yang rapi dilengkapi ringkasan profil, lencana keahlian, dan tombol tindakan.
3. **Showcase Portofolio Grid 12-Kolom**:
   - Kartu proyek tersusun otomatis menyesuaikan ukuran layar (1 kolom di seluler, 2 kolom di tablet, 3 kolom di desktop).
4. **Modal Detail Proyek Interaktif**:
   - Menampilkan detail informasi setiap proyek dalam pop-up dialog tanpa perlu memuat ulang halaman.
5. **Formulir Layanan dengan Validasi Visual**:
   - Tampilan input modern berikon dengan indikator validasi yang memberikan umpan balik langsung saat pengguna mengisi formulir.
6. **Desain Aksesibel & Terstruktur**:
   - Mempertahankan tag semantik HTML5 (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`) serta prinsip aksesibilitas web (WCAG 2.2 AA).

---

## 📂 Struktur Direktori Repositori

```text
ppw-2026-week2-12S24024/
├── index.html                 # Halaman Utama Portofolio & Layanan Kontak (Bootstrap 5.3)
├── style.css                  # Berkas Custom CSS Overrides & Variable (:root)
├── profile.png                # Foto Profil Mahasiswa
└── README.md                  # Dokumentasi Resmi Repositori
```

---

## 🚀 Manajemen Git & Live Demo

- **Cabang Git**: `week3-bootstrap`
- **Pesan Komit**: `feat(week3): refactor portfolio to bootstrap 5 grid and modern components`
- **Tautan Live Demo**: [https://YesikaSaragih.github.io/ppw-2026-week2-12S24024/](https://YesikaSaragih.github.io/ppw-2026-week2-12S24024/)

---

© 2026 **Yesika Nadia Saragih (NIM: 12S24024)**. S1 Sistem Informasi • Institut Teknologi Del.
