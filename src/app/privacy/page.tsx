'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Kebijakan Privasi <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">KHOSYIYAH</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
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
                Selamat datang di KHOSYIYAH. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="p-6 border-0 shadow-sm">
            <CardContent className="pt-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">Pengumpulan Data</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Data yang Kami Kumpulkan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li>Nama lengkap dan informasi identitas</li>
                    <li>Alamat email dan nomor telepon</li>
                    <li>Alamat fisik dan informasi lokasi</li>
                    <li>Informasi pembayaran dan transaksi</li>
                    <li>Data penggunaan layanan dan preferensi</li>
                    <li>Informasi teknis (IP address, browser, device)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Cara Kami Mengumpulkan Data:</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li>Formulir pendaftaran dan kontak</li>
                    <li>Komunikasi langsung dengan tim kami</li>
                    <li>Penggunaan website dan layanan online</li>
                    <li>Cookies dan teknologi pelacakan</li>
                    <li>Analitik dan monitoring performa</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="p-6 border-0 shadow-sm">
            <CardContent className="pt-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">Penggunaan Data</h2>
              </div>
              
              <p className="text-slate-600 mb-4">
                Kami menggunakan data pribadi Anda untuk tujuan berikut:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Menyediakan dan meningkatkan layanan kami</li>
                <li>Memproses transaksi dan pembayaran</li>
                <li>Memberikan dukungan pelanggan yang responsif</li>
                <li>Mengirim informasi penting terkait layanan</li>
                <li>Melakukan analisis untuk pengembangan bisnis</li>
                <li>Memastikan keamanan dan mencegah penipuan</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="p-6 border-0 shadow-sm">
            <CardContent className="pt-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">Keamanan Data</h2>
              </div>
              
              <p className="text-slate-600 mb-4">
                KHOSYIYAH berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas untuk data pribadi</li>
                <li>System monitoring dan deteksi ancaman</li>
                <li>Update keamanan berkala</li>
                <li>Pelatihan tim tentang keamanan data</li>
                <li>Backup data yang aman dan terenkripsi</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="p-6 border-0 shadow-sm">
            <CardContent className="pt-0">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Hak Anda</h2>
              
              <p className="text-slate-600 mb-4">
                Sebagai pengguna layanan kami, Anda memiliki hak untuk:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Mengakses data pribadi yang kami simpan</li>
                <li>Memperbaiki data yang tidak akurat</li>
                <li>Menghapus data pribadi Anda</li>
                <li>Membatasi pengolahan data Anda</li>
                <li>Menolak pengolahan data untuk marketing</li>
                <li>Memindahkan data Anda ke layanan lain</li>
                <li>Menarik persetujuan yang telah diberikan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="pt-0">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Hubungi Kami</h2>
              
              <p className="text-slate-600 mb-6">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami atau ingin menggunakan hak Anda, 
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
                    Email: privacy@khosyiyah.com
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
            <Link href="/terms" className="text-blue-600 hover:text-blue-700 ml-1">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}