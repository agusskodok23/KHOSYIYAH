'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  Building,
  Users,
  Target,
  Award
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                KHOSYIYAH
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Beranda
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Tentang
              </button>
              <button 
                onClick={() => setActiveSection('services')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'services' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Layanan
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'contact' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Kontak
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/privacy">
                <Button variant="outline" size="sm">
                  Privacy
                </Button>
              </Link>
              <Link href="/terms">
                <Button variant="outline" size="sm">
                  Terms
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Profesional & Terpercaya
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    KHOSYIYAH
                  </span>
                  <br />
                  Solusi Terbaik untuk Bisnis Anda
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Kami adalah mitra terpercaya yang berkomitmen untuk memberikan layanan berkualitas tinggi dan solusi inovatif untuk kebutuhan bisnis Anda.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Hubungi Kami
                </Button>
                <Button size="lg" variant="outline">
                  Pelajari Lebih Lanjut
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-slate-600">Berpengalaman</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-slate-600">Terpercaya</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-slate-600">Profesional</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-3"></div>
              <Card className="relative bg-white shadow-2xl rounded-3xl p-8">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-4xl">K</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">KHOSYIYAH</h3>
                    <p className="text-slate-600">Mitra Bisnis Terpercaya Anda</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Mengapa Memilih Kami</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Kami berkomitmen untuk memberikan layanan terbaik dengan standar kualitas tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="space-y-4 pt-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Fokus pada Tujuan</h3>
                <p className="text-slate-600">
                  Kami berdedikasi untuk membantu mencapai tujuan bisnis Anda dengan solusi yang tepat sasaran.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="space-y-4 pt-0">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Tim Profesional</h3>
                <p className="text-slate-600">
                  Didukung oleh tim berpengalaman yang siap memberikan layanan terbaik untuk kebutuhan Anda.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="space-y-4 pt-0">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Kualitas Terjamin</h3>
                <p className="text-slate-600">
                  Standar kualitas tinggi dalam setiap layanan yang kami berikan untuk kepuasan pelanggan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Hubungi Kami</h2>
            <p className="text-xl text-slate-600">
              Siap untuk memulai kerjasama? Hubungi kami hari ini
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">KHOSYIYAH</h4>
                    <p className="text-slate-600">Mitra Bisnis Terpercaya Anda</p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Alamat</h4>
                    <p className="text-slate-600">
                      NGINDEN 5-E/16, Desa/Kelurahan Nginden Jangkungan<br />
                      Kec. Sukolilo, Kota Surabaya<br />
                      Provinsi Jawa Timur, Kode Pos 60118
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Telepon</h4>
                    <p className="text-slate-600">085353874912</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">info@khosyiyah.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Jam Operasional</h4>
                    <p className="text-slate-600">
                      Senin - Jumat: 08:00 - 17:00<br />
                      Sabtu: 08:00 - 15:00<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Subjek pesan"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-lg font-bold">KHOSYIYAH</span>
              </div>
              <p className="text-slate-400">
                Mitra bisnis terpercaya untuk solusi terbaik dan layanan berkualitas tinggi.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Bisnis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Solusi Digital</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pengembangan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 KHOSYIYAH. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}