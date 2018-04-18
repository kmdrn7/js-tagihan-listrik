var abodemen,
    tarifKwh,
    pajak;

var proses = document.getElementById("btnProses"),
    reset = document.getElementById("btnReset"),
    kategori = document.getElementById("comboKategori")
    pelanggan = document.getElementById("nama_pelanggan")
    jumlah = document.getElementById("jumlah")
    tabel = document.getElementById("tbl_tagihan"),
    tbody = document.getElementById("tbody");

function bersihkanTabel(){    
    tabel.innerText = "";
    var row = tabel.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerText = "Jumlah";
    cell2.innerText = "Tarif per-KWH";
    cell3.innerText = "Abodemen";
    cell4.innerText = "Sub Total";
    document.getElementById("td_nama").innerText = "";
    document.getElementById("td_kategori").innerText = "";
    document.getElementById("td_jumlah").innerText = "";
}

proses.addEventListener('click', function(evt){
    var row, cell1, cell2, cell3, cell4;
    if(kategori.value != '' && pelanggan.value != '' && jumlah.value != ''){

        bersihkanTabel();
        if( kategori.value == 'sosial' ){
            abodemen = 10000;
            tarifKwh = 300;
            pajak = 0;
        } else if( kategori.value == 'rumah' ){
            abodemen = 30000;
            tarifKwh = 500;
            pajak = 10;
        } else if( kategori.value == 'industri' ){
            abodemen = 50000;
            tarifKwh = 1000;
            pajak = 30;
        }

        document.getElementById("td_nama").innerText = pelanggan.value;
        document.getElementById("td_kategori").innerText = kategori.value;
        document.getElementById("td_jumlah").innerText = jumlah.value;

        for(let i = 0; i < parseInt(jumlah.value); i++){
            row = tabel.insertRow(i+1);
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
            cell3 = row.insertCell(2);
            cell4 = row.insertCell(3);

            cell1.innerText = (i+1).toString();
            cell2.innerText = "Rp. "+(tarifKwh*(i+1)).toString();
            cell3.innerText = "Rp. "+(abodemen).toString();
            cell4.innerText = "Rp. "+( tarifKwh*(i+1)+abodemen ).toString();
        }
    } else {
        alert("Silahkan isi form dengan lengkap terlebih dahulu");
        pelanggan.focus();
    }
});

reset.addEventListener('click', function (evt){
    pelanggan.value = "";
    jumlah.value = "";
    bersihkanTabel();
});