// struktur data javascript untuk menyimpan kumpulan nilai dalam satu variabel

const dataSiswa = [
  {
    nama: 'Ahmad',
    nilai: 89,
    sekolah: 'SMA Negeri 1'
  },
  {
    nama: 'Andy',
    nilai: 79,
    sekolah: 'SMA Negeri 2'
  }
]

dataSiswa
   .sort((a, b) => b.nilai - a.nilai)
   .map((value) => console.log(value))