'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, CalendarDays, CheckCircle2, ChevronRight, Clock3, ExternalLink, MapPin, Menu, Users, X } from 'lucide-react'

const pastEvents = [
  { category: 'Sự kiện', title: 'Triển lãm Việt Industry 2026 ', date: '09.2026', meta: 'Hà Nội', image: '/5.jpg', alt: 'Webinar về quy định giá điện hai thành phần', href: '#su-kien-cu' },
  { category: 'Sự kiện', title: 'Japan-Vietnam Biz-Connect 2026 ', date: '08.2026', meta: 'Hà Nội', image: '/9.jpg', alt: 'Webinar kiểm tra hiện trạng sử dụng điện năng', href: '#su-kien-cu' },
  { category: 'Sự kiện', title: 'Solar & Storage Live Vietnam 2026', date: '07.2026', meta: 'TP. Hồ Chí Minh', image: '/Solar-Storage-Vietnam.jpg', alt: 'Hội thảo Solar and Storage Live Vietnam', href: '#su-kien-cu' }, // Đã sửa tên file
  { category: 'Webinar', title: '"Giá điện 2 thành phần" - Cách kiểm soát công suất đỉnh để cắt giảm chi phí điện cho nhà máy', date: '18.08.2026', meta: 'Online · Microsoft Teams', image: '/Webinar03.jpg', alt: 'Webinar kiểm soát công suất đỉnh', href: '#su-kien-cu' },
  { category: 'Webinar', title: '"Giá điện 2 thành phần" - Quy trình từng bước kiểm tra hiện trạng sử dụng điện năng của nhà máy ', date: '19.06.2026', meta: 'Online · Microsoft Teams', image: '/Webinar02 .jpg', alt: 'Sự kiện giới thiệu giải pháp NSN', href: '#su-kien-cu' }, // Đã xóa khoảng trắng
  { category: 'Webinar', title: 'Quy định mới "Giá điện 2 thành phần" - Nhà máy cần làm gì để sẵn sàng ', date: '15.04.2026', meta: 'Online · Microsoft Teams', image: '/Webinar01.jpg', alt: 'Đội ngũ kỹ sư NSN tại công trường', href: '#su-kien-cu' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('Tất cả')
  const visibleEvents = useMemo(() => filter === 'Tất cả' ? pastEvents : pastEvents.filter((event) => event.category === filter), [filter])

  return <div className="min-h-screen bg-[#f6f9fc] text-[#092c52]">
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label="NSN Events Hub" className="flex items-center gap-3">
          <img 
            src="/logo.jpg" 
            alt="NSN" 
            className="h-12 w-auto object-contain" 
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold text-[#123b68] md:flex" aria-label="Điều hướng chính"><a href="#su-kien">Sự kiện</a><a href="#su-kien-cu">Sự kiện đã diễn ra</a><a href="https://nsn.vn" target="_blank" rel="noreferrer" className="rounded-md bg-[#ef7b33] px-4 py-2.5 text-white">Về NSN <ExternalLink className="ml-1 inline" size={14} /></a></nav>
        <button className="rounded-md p-2 text-[#123b68] md:hidden" aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="flex flex-col gap-4 border-t border-slate-100 bg-white px-5 py-5 text-sm font-bold md:hidden"><a href="#su-kien" onClick={() => setMenuOpen(false)}>Sự kiện</a><a href="#su-kien-cu" onClick={() => setMenuOpen(false)}>Sự kiện đã diễn ra</a><a href="https://nsn.vn">Về NSN</a></nav>}
    </header>

    <main id="top">
      <section id="su-kien" className="w-full">
        <img
          src="/hvacr-hero.png"
          alt="Banner NSN Events Hub"
          className="block h-auto w-full"
        />
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef7b33]">Sắp diễn ra</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#123b68] sm:text-4xl">Đừng bỏ lỡ sự kiện nổi bật</h2>
          </div>
          <span className="text-sm text-slate-500">Cập nhật từ NSN Events Hub</span>
        </div>
        
        <article className="grid overflow-hidden rounded-2xl bg-white shadow-[0_15px_45px_rgba(18,59,104,0.1)] lg:grid-cols-[1.08fr_.92fr]">
          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[420px]">
            <img src="/su-kien-hvacr.jpg" alt="Triển lãm HVACR & Viet Energy Week 2026" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ef7b33]">Triển lãm quốc tế</p>
            
            <h3 className="mt-3 text-3xl font-bold leading-tight text-[#123b68]">Triển lãm & Hội thảo HVACR & Viet Energy Week</h3>
            <p className="mt-4 text-[15px] leading-7 text-slate-600">Triển lãm quốc tế về hệ thống sưởi, thông gió, điều hòa không khí, lọc khí và làm lạnh tại Việt Nam.</p>
            
            <div className="mt-6 grid gap-3 border-y border-slate-100 py-5 text-sm text-slate-600">
              <span className="flex items-center gap-2"><CalendarDays size={17} className="text-[#ef7b33]" /> 04-06/11/2026</span>
              <span className="flex items-center gap-2"><MapPin size={17} className="text-[#ef7b33]" /> Booth G9, SECC, TP. HCM</span>
            </div>
            
            <a data-bownow-track="event-hvacr-2026-card" href="https://www.hvacrvietnam.com/" target="_blank" rel="noreferrer" className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-[#123b68] px-5 py-3 text-sm font-bold text-white hover:bg-[#0b294c]">
              Đăng ký ngay <ExternalLink size={15} />
            </a>
          </div>
        </article>
      </section>

      <section id="su-kien-cu" className="border-y border-slate-200 bg-white"><div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef7b33]">Dấu ấn đã qua</p><h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#123b68] sm:text-4xl">Sự kiện & webinar đã diễn ra</h2></div><div className="flex gap-2 rounded-md bg-slate-100 p-1 text-xs font-bold">{['Tất cả', 'Webinar', 'Hội thảo'].map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded px-3 py-2 ${filter === item ? 'bg-white text-[#123b68] shadow-sm' : 'text-slate-500'}`}>{item}</button>)}</div></div><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{visibleEvents.map((event) => <article key={event.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white"><div className="relative h-52 overflow-hidden bg-[#dce8f2]"><img src={event.image} alt={event.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#123b68]">{event.category}</span></div><div className="p-5"><h3 className="text-lg font-bold leading-snug text-[#123b68]">{event.title}</h3><div className="mt-4 flex flex-col gap-2 text-sm text-slate-500"><span className="flex items-center gap-2"><CalendarDays size={15} className="text-[#ef7b33]" />{event.date}</span><span className="flex items-center gap-2"><Clock3 size={15} className="text-[#ef7b33]" />{event.meta}</span></div><a data-bownow-track={`past-event-${event.title}`} href={event.href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#123b68]">Đóng đăng ký <CheckCircle2 size={16} /></a></div></article>)}</div></div></section>
    </main>

    <footer className="relative overflow-hidden bg-[#064477] text-white font-[Arial,sans-serif] w-full py-14">
      {/* Ảnh nền */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/congtrinh.jpg"
          alt="NSN Projects"
          className="h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-[#064477]/40" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8 z-10">
        <div className="grid gap-12 pb-10 lg:grid-cols-[390px_1fr] lg:gap-16">
          <div className="flex items-start">
            <div className="py-2">
              <img
                src="/Logo-trang-slogan-08.png"
                alt="NSN - Creating sustainable values"
                className="h-auto w-[200px] object-contain"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-bold uppercase leading-snug tracking-wide text-white sm:text-xl">
              Công ty Cổ phần Xây dựng và Công nghiệp NSN
            </h2>
            <div className="mt-3 mb-5 h-[2px] w-12 bg-[#ef7b33]" />

            <h3 className="text-base font-semibold uppercase tracking-wide text-white/90">Trụ sở chính</h3>
            <div className="mt-4 grid gap-3 text-[15px] leading-relaxed text-white/90 sm:grid-cols-2">
              <p className="sm:col-span-2 text-white/95">Số 11, Ngõ 89, Phố Kim Quan Thượng, Phường Việt Hưng, Hà Nội</p>
              <p className="flex items-center gap-2">Điện thoại: 84-86-7919-559</p>
              <p className="flex items-center gap-2">Hotline: 84-24-3652-3222</p>
              <p className="flex items-center gap-2">Fax: 84-24-3652-4222</p>
              <a href="mailto:contact@nsn.com.vn" className="hover:text-white/80 transition-colors duration-200">Email: contact@nsn.com.vn</a>
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 pt-8 pb-10 md:grid-cols-3 border-t border-white/10">
          <div>
            <h3 className="text-[17px] font-bold uppercase tracking-wide text-white/90">Văn phòng đại diện Hồ Chí Minh</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/80">Số 537/8 đường Nguyễn Duy Trinh, phường Bình Trưng Tây, TP. Thủ Đức, Hồ Chí Minh</p>
            <p className="mt-2 text-[14px] text-white/70">SĐT: 84-2822002809</p>
          </div>
          <div>
            <h3 className="text-[17px] font-bold uppercase tracking-wide text-white/90">Chi nhánh Campuchia</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/80">17B, Đường 370, P. Boeung KengKong 1Q, Chamkarmon, Phnom Penh, Campuchia</p>
            <p className="mt-2 text-[14px] text-white/70">SĐT: 855-889544266</p>
          </div>
          <div>
            <h3 className="text-[17px] font-bold uppercase tracking-wide text-white/90">Chi nhánh Myanmar</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/80">D5-B Yadanar Housing, Thazin, Khu 9 Hlaing Township, Yangon, Myanmar</p>
            <p className="mt-2 text-[14px] text-white/70">SĐT: 95-1519841</p>
          </div>
        </div>
        
        <div className="flex flex-col justify-between gap-4 pt-6 border-t border-white/10 text-xs text-white/60 sm:flex-row">
          <span>© 2026 NSN. All rights reserved.</span>
          <a href="https://nsn.vn" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200 flex items-center gap-1">
            nsn.vn <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </footer>
  </div>
}