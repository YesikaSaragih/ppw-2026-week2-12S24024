# 🌐 Halaman Web Portofolio Profil Profesional & Layanan Interaktif Accessible
### Modul Praktikum Minggu 02: HTML5, CSS3, & Perancangan Antarmuka Web Modern (Estetik & Responsif)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![A11y](https://img.shields.io/badge/WCAG%202.2-AA%20Compliant-008080?style=for-the-badge)
![License](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

---

## 📌 Informasi Mahasiswa & Mata Kuliah

- **Nama Mahasiswa**: Yesika Nadia Saragih
- **NIM**: 12S24024
- **Program Studi**: S1 Sistem Informasi
- **Institusi**: Institut Teknologi Del
- **Mata Kuliah**: Pemrograman dan Pengujian Aplikasi Web (12S3101)
- **Tahun Akademik**: Semester Genap 2025/2026

---

## 📖 Deskripsi Proyek

Halaman web ini merupakan **Portofolio Profil Profesional Single Page Showcase** yang dibangun menggunakan HTML5 semantik murni dan CSS3 eksternal modern. Seluruh rancangan dibuat dengan memenuhi standar aksesibilitas **WCAG 2.2 Level AA** dan prinsip desain antarmuka modern.

---

## ✨ Fitur Utamanya

1. **Struktur HTML5 Semantik (No Div-Soup)**:
   - `<header>` dengan navigasi `<nav>`.
   - `<main>` sebagai kontainer tunggal utama.
   - 5 `<section>` semantik: *Tentang Saya*, *Keahlian*, *Organisasi & Kepanitiaan*, *Portofolio Karya*, dan *Formulir Layanan*.
   - `<article>` untuk setiap poin pengaman kepanitiaan.
   - `<aside>` khusus untuk FAQ & info pelengkap.
   - `<footer>` untuk penutup, kontak, dan hak cipta.

2. **Penyajian Data Tabular & Lists**:
   - `<table>` semantik lengkap dengan `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, serta atribut `scope="col"` dan `scope="row"`.
   - `<ul>` (Unordered List) untuk menyajikan 7 poin keahlian teknikal.
   - `<ol>` (Ordered List) untuk menyajikan 5 alur proses kerja (workflow).

3. **Formulir Interaktif & Accessible (WCAG 2.2 AA)**:
   - 2 Blok `<fieldset>` dan `<legend>` (Data Identitas Pemohon & Detail Layanan Konsultasi).
   - 8 Tipe kontrol input: `text`, `email`, `tel`, `number`, `select`, `radio`, `textarea`, dan `checkbox`.
   - Keterhubungan eksplisit `<label for="...">` dengan `id` di setiap input.
   - Validasi native HTML5 (`required`, `pattern`, `min`/`max`).
   - Teks bantuan yang terhubung via atribut `aria-describedby`.

4. **Estetika & Responsive Layout CSS**:
   - Universal Box-Sizing Reset.
   - Aturan warna 60-30-10 (60% Netral, 30% Teks Navy, 10% Aksen Sky Blue & Emerald).
   - Tipografi modern dengan `line-height: 1.6`.
   - `border-radius: 12-16px`, bayangan halus, dan transisi hover.
   - Flexbox & CSS Grid responsif via `@media (max-width: 768px)`.

---

## 📂 Struktur Direktori

```text
Praktikum week 2/
├── index.html                 # Halaman Utama Portofolio & Layanan (Single Page)
├── style.css                  # Berkas Gaya Utama CSS Modern
├── README.md                  # Dokumentasi Resmi Repositori
└── lab2_guided/               # Berkas Latihan Praktikum Terbimbing
    ├── index.html             # Lab 1: Developer Profile Card Component
    ├── style.css              # Lab 1: Styling Kartu Profil
    ├── form_kontak.html       # Lab 2: Accessible Contact Form Component
    └── form_style.css         # Lab 2: Styling Form Focus Ring
```

---

## 🚀 Live Demo (GitHub Pages)

- **Portofolio Utama**: `https://YesikaSaragih.github.io/ppw-2026-week2-12S24024/`
- **Lab 1 (Profile Card)**: `https://YesikaSaragih.github.io/ppw-2026-week2-12S24024/lab2_guided/index.html`
- **Lab 2 (Form Kontak)**: `https://YesikaSaragih.github.io/ppw-2026-week2-12S24024/lab2_guided/form_kontak.html`
