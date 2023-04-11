# access Backend

## ID

### Pengertian

    Sebuah server menggunakan framework express dari javascript untuk handle data dari database ke applikasi lain nya

### Kebutuhan System

- Node JS >= 18.xx.x
- XAMPP >= 8.x.x

### Instalasi

Pastikan kalian sudah menginstall node js dengan versi >= 18 ke atas

    npm install

Buatlah satu database pada phpmyadmin atau semacam nya dan setting di .env lalu jalankan migration

    npm run db:migrate

jika sudah melakukan migration lalu kita masukan data awal

    npm run db:seed:all

Jalankan file server.js

    npm start

### Note

    Project ini dibuat dengan ES6

## EN

### Understanding

    A server uses the express framework of javascript to handle data from the database to other applications

### Dependencies

- Node JS >= 18.xx.x
- XAMPP >= 8.x.x

### Instalation

Make sure you have installed Python with version >= 3.1

    npm install

Create a database on phpmyadmin or something like that and the settings on .env then run migration

    npm run db:migrate

if you have done the migration then we enter the initial data

    npm run db:seed:all

Run the main.py file

    npm start

### Note

    This project built with ES6
