$(document).ready(function(){
    $('#registration-form').submit(function(event) {
        event.preventDefault();

        // Mendapatkan nilai-nilai dari form
        var email = $('#email').val();
        var nama = $('#nama').val();
        var nomorTelepon = $('#nomor-telepon').val();
        var eventYangAkanDiikuti = $('#event').val();

        // Menyiapkan data yang akan dikirim ke Firebase
        var data = {
            email: email,
            nama: nama,
            nomor_telepon: nomorTelepon,
            event: eventYangAkanDiikuti
        };

        // Mengirim data ke Firebase menggunakan AJAX
        $.ajax({
            type: 'POST',
            url: 'https://bncc-final-default-rtdb.firebaseio.com/', // Ganti dengan URL Firebase Anda
            data: JSON.stringify(data),
            success: function(response) {
                // Tindakan jika pengiriman berhasil
                console.log('Pendaftaran berhasil: ', response);
                // Menampilkan pesan sukses kepada pengguna
                alert('Pendaftaran berhasil!');
                
            },
            error: function(xhr, status, error) {
                // Tindakan jika pengiriman gagal
                console.error('Error:', error);
                alert('Pendaftaran gagal. kurang ngerti kak.');
            }
        });
    });
});
