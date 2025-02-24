<?php
$directory = __DIR__; // Ubah ke direktori yang diinginkan

$files = glob($directory . '/*.txt');

foreach ($files as $file) {
    $newName = preg_replace('/\.txt$/', '.scss', $file);
    if (rename($file, $newName)) {
        echo "Berhasil mengubah: " . basename($file) . " -> " . basename($newName) . "\n";
    } else {
        echo "Gagal mengubah: " . basename($file) . "\n";
    }
}
?>
