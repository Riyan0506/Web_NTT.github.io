// fungsi jika tombol back to top di klik
$("#backtotop").click(function () {
	$("body,html").animate({
	    scrollTop: 0
	}, 600);
});

// fungsi untuk menyembunyikan dan menampilkan icon back to top
$(window).scroll(function () {
	if ($(window).scrollTop() > 150) {
	    $("#backtotop").addClass("visible");
	} else {
	    $("#backtotop").removeClass("visible");
	}
});

$(document).ready(function() {
    // Event listener untuk semua tombol "Selengkapnya"
    $('.btn-primary').on('click', function() {
        // Ambil data dari tombol yang diklik
        var title = $(this).data('title');         // Judul
        var description = $(this).data('description'); // Deskripsi
        var imageUrl = $(this).data('image');      // URL Gambar

        // Debugging: Tampilkan informasi di console
        console.log("Judul:", title);
        console.log("Deskripsi:", description);
        console.log("URL Gambar:", imageUrl);

        // Set judul, deskripsi, dan gambar di modal
        $('#myModalLabel').text(title);
        $('.modal-body p').text(description);
        $('#modalImage').attr('src', imageUrl).show(); // Set gambar
    });
});

