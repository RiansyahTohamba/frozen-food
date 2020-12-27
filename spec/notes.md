notes.md


Method Command diuji menggunakan mocks.
Method Queries diuji menggunakan stubs.

Apakah Stub dan Mock itu ?
Stub dan Mock merupakan test double.
Test double diambil dari istilah stunt-double atau aktor stunt, tau kan ?
Aktor stunt siap menerima pukulan, meloncat antar gedung dan aksi berbahaya lainnya mewakili aktor sesungguhnya, sebagaimana yang dilakukan Tom Cruise dan Joko Widodo.
Begitu pula dengan test double yang mewakili class sessunguhnya untuk diuji.

# todo copy tulisan ini di medium
Method query
Method query merupakan method yang hanya mengembalikan value dan tidak mengubah state dari object.
Dengan kata lain method ini tidak menimbulkan "efek-samping" saat di panggil.
Contoh Efek samping pada method query.

def get_price
	total_price = (get_items_price(prices) * discount) + ppn
	return price
end

Efek sampingnya dimana ?
Efek sampingnya terletak pada perubahan state atau nilai dari total_price sementara nilai dari attribut price dikembalikan. Maka kode diatas kita ubah lagi sehingga benar-benar menjadi method query untuk attribut price.

def get_price
	price = all_price + ppn
	return price
end


# todo: bagian sini diterjemahkan jadi bhs indonesia
Gerard Meszaros (2007) menjelaskan berbagai jenis test double diantaranya 

1. Stub 
Seperti yang dikatakan sebelumnya, stub ini cocok untuk method query. 
Stub Mengembalikan "canned responses" untuk menghindari komputasi atau operasi I/O yang sebenarnya tidak diperlukan.
Apa itu Canned response? Jika diterjemahkan artinya "tanggapan kalengan" hehe.
Maknanya jika kode kita melibatkan panggilan ke DB atau twitter API atau API third-party lainnya, maka kita dapat membuat 'Fake Response' dengan stub ini.
Saya pernah membuat aplikasi dengan openrainbow (https://hub.openrainbow.com/#/) dan cukup menyebalkan juga ketika saya ingin menguji kode.
Saya harus menunggu response dari api rainbow jika ingin melihat kode saya berjalan atau tidak.
Maka saya membuat kode Stub sebagai perwakilan dari API Rainbow dan jadilah saya tidak perlu menunggu response dari API rainbow lagi, yeah !
<!-- contoh rspec  -->
Mari kita lihat contoh pembuatannya dengan RSpec, yakni pada pembuatan http_response.
~~~
http_response = double('HTTPResponse', status: 200, body: 'OK')
~~~
atau bisa dipisah proses pembuatan  stub dan response-nya dalam hal ini status dan body.
~~~
http_response = double('HTTPResponse')
allow(http_response).to receive(:status).and_return(200)
allow(http_response).to receive(:body).and_return('OK')
~~~

2. Mock : 
Mock cocok untuk method tipe command, yakni method yang mengubah state dari object.
Mock tidak peduli dengan return method, melainkan peduli kepada efek-samping dari method itu. Sudah tahu kan maksud dari efek-samping tersebut ?
Tipical dari method command adalah sebagai berikut : 
1. Menerima event dari sistem
2. Membuat decision berdasarkan event
3. Menjalankan aksi yg punya side-effect
Contohnya balasan dari ChatBot.
Fitur dari ChatBot menerima pesan dan memutuskan konten pesan apa yang harus dibalas berdasarkan pesan yang masuk.
Untuk menguji fitur ini, tidak cukup hanya menyediakan double yang me-return hasil step 3, tapi diperlukan juga side-effect dari posting message yang benar.

# todo terjemahkan
To use a mock object, you’ll pre-program it with a set of messages it’s supposed
to receive. These are called message expectations. You declare them the same
way you’d write a normal expectation in your specs: by combining the expect
method with a matcher:


3. Null Object : A benign test double that can stand in for any object; returns itself in response to any message

4. Spy : Records the messages it receives, so that you can check them later.

Walaupun punya nama berbeda-beda, RSpec menggunakan Test Double tersebut sebagai double.


# Referensi 
xUnit Test Patterns.