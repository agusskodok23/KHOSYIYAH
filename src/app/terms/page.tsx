'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, FileText, Users, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  KHOSYIYAH
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Syarat & Ketentuan <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">KHOSYIYAH</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Syarat dan ketentuan penggunaan layanan KHOSYIYAH
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-6 border-0 shadow-sm">
            <CardContent className="pt-0">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Pendahuluan</h2>
              <p className="text-slate-600 leading-relaxed">
                Selamat datang di KHOSYIYAH. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh 
                Syarat dan Ketentuan ini. Harap baca dengan cermat sebelum menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card className="p-6 border-0 shadow-sm">
            <CardContent className="pt-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">Layanan Kami</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-slate-600">
                  KHOSYIYAH menyediakan berbagai layanan profesional termasuk:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Konsultasi bisnis dan strategi</li>
                  <li>Pengembangan solusi digital</li>
                  <li>Layanan dukungan teknis</li>
                  <li>Training dan pengembangan</li>
                  <li>Layanan konsultasi khusus</li>
                </ul>

                <p className="text-slate-600">
                  Kami berhak mengubah atau menghentikan layanan sewaktu-waktu dengan pemberitahuan sebelumnya.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="p-6 border-0 shadow-sm">
            <CardContent className="pt-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">Kewajiban Pengguna</h2>
              </div>
              
              <p className="text-slate-600 mb-4">
                Sebagai pengguna layanan kami, Anda setuju untuk:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Memperbarui informasi secara berkala</li>
                <li>Menggunakan layanan sesuai tujuan yang ditentukan</li>
                <li>Tidak melanggar hukum atau peraturan yang berlaku</li>
                <li>Tidak mengganggu atau merusak sistem kami</li>
                <li>Menjaga kerahasiaan informasi akses</li>
                <li>Melaporkan masalah atau pelanggaran secara tepat waktu</li>
              </ul>
            </CardContent>
          </Card>

          {/* Prohibited Activities */}
          <Card className="p-6 border-0 shadow-sm">
            <CardContent className="pt-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">Aktivitas yang Dilarang</h2>
              </div>
              
              <p className="text-slate-600 mb-4">
                Anda dilarang melakukan:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Penggunaan layanan untuk kegiatan ilegal</li>
                <li>Penipuan atau representasi palsu</li>
                <li>Spam atau pengiriman pesan tidak diminta</li>
                <li>Pelanggaran hak kekayaan intelektual</li>
                <li>Penggunaan malware atau perangkat berbahaya</li>
                <li>Pencurian data atau informasi pribadi</li>
                <li>Interferensi dengan layanan pengguna lain</li>
              </ul>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="p-6 border-0 shadow-sm">
            <CardContent className="pt-0">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Syarat Pembayaran</h2>
              
              <div className="space-y-4 text-slate-600">
                <p>
                  Untuk layanan berbayar, berlaku ketentuan berikut:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Harga yang tercantum adalah harga berlaku</li>
                  <li>Pembayaran harus dilakukan sesuai kesepakatan</li>
                  <li>Biaya tambahan mungkin berlaku untuk layanan ekstra</li>
                  <li>Pengembalian dana sesuai dengan kebijakan kami</li>
                  <li>Keterlambatan pembayaran dapat dikenakan denda</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="p-6 border-0 shadow-sm">
            <CardContent className="pt-0">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Hak Kekayaan Intelektual</h2>
              
              <div className="space-y-4 text-slate-600">
                <p>
                  Semua konten, materi, dan hak kekayaan intelektual terkait layanan kami adalah milik KHOSYIYAH atau pemberi lisensi kami.
                </p>
                
                <p>
                  Anda tidak diperbolehkan:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Menyalin, mendistribusikan, atau memodifikasi konten</li>
                  <li>Menggunakan merek dagang atau logo tanpa izin</li>
                  <li>Memanfaatkan konten untuk tujuan komersial</li>
                  <li>Membuat karya turunan dari materi kami</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="p-6 border-0 shadow-sm">
            <CardContent className="pt-0">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Batasan Tanggung Jawab</h2>
              
              <div className="space-y-4 text-slate-600">
                <p>
                  Sejauh diizinkan oleh hukum, KHOSYIYAH tidak bertanggung jawab atas:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Kehilangan data atau informasi</li>
                  <li>Gangguan layanan atau downtime</li>
                  <li>Kerugian bisnis atau keuntungan</li>
                  <li>Kerusakan yang disebabkan oleh pihak ketiga</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="p-6 border-0 shadow-sm">
            <CardContent className="pt-0">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Pengakhiran Layanan</h2>
              
              <div className="space-y-4 text-slate-600">
                <p>
                  Kami berhak mengakhiri atau menangguhkan layanan Anda jika:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Anda melanggar syarat dan ketentuan</li>
                  <li>Anda menggunakan layanan secara ilegal</li>
                  <li>Ada risiko keamanan atau penipuan</li>
                  <li>Diperlukan oleh hukum atau peraturan</li>
                </ul>
                
                <p>
                  Anda juga dapat mengakhiri layanan kapan saja dengan memberikan pemberitahuan tertulis.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="pt-0">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Hubungi Kami</h2>
              
              <p className="text-slate-600 mb-6">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan kami, 
                silakan hubungi kami melalui:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-slate-900 mb-2">KHOSYIYAH</h3>
                  <p className="text-slate-600 text-sm">
                    NGINDEN 5-E/16, Desa/Kelurahan Nginden Jangkungan<br />
                    Kec. Sukolilo, Kota Surabaya<br />
                    Provinsi Jawa Timur, Kode Pos 60118
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-slate-900 mb-2">Kontak</h3>
                  <p className="text-slate-600 text-sm">
                    Telepon: 085353874912<br />
                    Email: legal@khosyiyah.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <Separator className="mb-8" />
          <p className="text-slate-500 text-sm">
            © 2024 KHOSYIYAH. All rights reserved. | 
            <Link href="/privacy" className="text-blue-600 hover:text-blue-700 ml-1">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}