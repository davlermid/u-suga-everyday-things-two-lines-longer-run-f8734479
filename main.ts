import { mkdirSync, writeFileSync } from "node:fs";

// Entry pemenang — "Everyday Things, Two Lines, Longer Run"
// Baris 1: analogi antrean = manik-manik di tali.
// Baris 2: batas analogi — manik tidak bosan / tidak menyerobot.
// Pemenang dari 8 kandidat (skor juri 14/15: K1 5, K2 5, K3 4).
// Dipilih karena pemetaan manik-manik paling segar di antara 2619 peserta
// (bukan toaster/matahari yang sudah basi) dan baris 2 menyebut batas
// analogi secara spesifik: bosan dan menyerobot tidak dipetakan.
// Total 161 karakter (termasuk "\n") — tie-break menguntungkan teks pendek.
const ENTRY =
  "A queue is beads on a string: you only move when the bead ahead of you moves.\n" +
  "The one-by-one order fits, but beads never get bored or cut in line like people do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
console.log(`chars: ${ENTRY.length}`);
