import Head from 'next/head';
import { useState } from 'react';

const D = {
  brand: 'ISITOTO',
  domain: 'isitotologinlink.com',
  logo: 'https://i.postimg.cc/N0hwYw1y/isi-pp.png',
  linkLogin: 'https://loginwap.gelapsekali.com/isi',
  linkDaftar: 'https://daftarwap.gelapsekali.com/isi',
  amphtml: 'isitotologinlink.com',
};

const features = [
  { icon: '\u26A1', title: 'Akses Super Cepat', desc: 'Server berperforma tinggi memastikan loading dalam hitungan detik.' },
  { icon: '\u{1F512}', title: 'Keamanan Berlapis', desc: 'Enkripsi SSL 256-bit dan proteksi DDoS tingkat enterprise.' },
  { icon: '\u{1F4F1}', title: 'Mobile Responsive', desc: 'Tampilan otomatis menyesuaikan di semua perangkat.' },
  { icon: '\u{1F517}', title: 'Link Alternatif', desc: 'Banyak link alternatif resmi yang selalu diperbarui.' },
  { icon: '\u{1F3AF}', title: 'Tampilan Modern', desc: 'Desain antarmuka clean dan intuitif untuk kemudahan navigasi.' },
  { icon: '\u{1F4AC}', title: 'Layanan 24 Jam', desc: 'Tim customer service siap membantu kapan saja.' },
];

const faqs = [
  { q: 'Bagaimana cara login ISITOTO?', a: 'Kunjungi halaman login resmi di situs resmi ISITOTO, masukkan username dan password, lalu klik Login.' },
  { q: 'Apakah ISITOTO aman?', a: 'Ya, kami menggunakan enkripsi SSL 256-bit dan proteksi keamanan berlapis tingkat enterprise.' },
  { q: 'Bisa akses dari smartphone?', a: 'Tentu, ISITOTO dioptimalkan untuk semua perangkat mobile dengan tampilan responsif.' },
  { q: 'Berapa lama proses daftar?', a: 'Proses pendaftaran kurang dari 2 menit, sangat cepat dan mudah.' },
  { q: 'Ada link alternatif?', a: 'Ya, tersedia beberapa link alternatif resmi yang selalu aktif dan diperbarui.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>ISITOTO | Link Gacor : Portal Resmi Petualangan Monster Seru</title>
        <meta name="description" content="ISITOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={D.logo} />
        <link rel="canonical" href={'https://' + D.domain + '/'} />
        <link rel="amphtml" href={'https://' + D.domain + '/amp/'} />
        <meta property="og:title" content="ISITOTO | Link Gacor : Portal Resmi Petualangan Monster Seru" />
        <meta property="og:description" content="ISITOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang." />
        <meta property="og:image" content={D.logo} />
        <meta property="og:url" content={'https://' + D.domain} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="ISITOTO | Link Gacor : Portal Resmi Petualangan Monster Seru" />
        <meta name="twitter:description" content="ISITOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        *{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
        body{font-family:'Barlow',sans-serif;background:#100404;color:#d0d0d0;line-height:1.7;overflow-x:hidden}
        a{color:inherit;text-decoration:none}img{max-width:100%;display:block}
        .W{max-width:1200px;margin:0 auto;padding:0 24px}

        .topbar{background:#1a0808;border-bottom:1px solid rgba(224,4,0,.18);padding:6px 0;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:1px}
        .topbar-inner{display:flex;justify-content:space-between;align-items:center}
        .topbar a{color:#e00400;font-weight:700;transition:.2s}.topbar a:hover{opacity:.8}

        header{background:#100404;border-bottom:1px solid rgba(224,4,0,.18);position:sticky;top:0;z-index:50}
        .hd{display:flex;align-items:center;justify-content:space-between;padding:14px 0;gap:16px}
        .logo{display:flex;align-items:center;gap:10px;font-weight:900;font-size:24px;color:#fff;flex-shrink:0;text-transform:uppercase;letter-spacing:2px}
        .logo img{width:36px;height:36px;border-radius:4px;border:2px solid #e00400}
        .nav-strip{display:flex;gap:2px;flex:1;justify-content:center}
        .nav-strip a{padding:8px 18px;font-size:12px;color:#888;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;transition:.2s;border-bottom:2px solid transparent}
        .nav-strip a:hover,.nav-strip a.act{color:#e00400;border-bottom-color:#e00400}
        .hd-btns{display:flex;gap:8px;flex-shrink:0}
        .btn{display:inline-flex;align-items:center;gap:6px;padding:10px 22px;border-radius:4px;font-weight:700;font-size:12px;transition:.25s;border:none;cursor:pointer;font-family:inherit;text-transform:uppercase;letter-spacing:1px}
        .btn-p{background:#e00400;color:#100404}.btn-p:hover{background:#c00400;transform:translateY(-1px)}
        .btn-o{border:2px solid #e00400;color:#e00400;background:transparent}.btn-o:hover{background:rgba(224,4,0,.1)}

        .hero{background:#1a0808;padding:56px 0;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;right:0;top:0;width:50%;height:100%;background:linear-gradient(270deg,rgba(224,4,0,.1),transparent)}
        .hero::after{content:'';position:absolute;left:0;bottom:0;width:100%;height:4px;background:linear-gradient(135deg,#c00400,#e00400)}
        .hero-flex{display:flex;align-items:center;gap:48px;position:relative;z-index:1}
        .hero-text{flex:1}
        .hero-text .stripe{display:inline-block;background:#e00400;color:#100404;padding:5px 20px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:2px;margin-bottom:18px;clip-path:polygon(0 0,100% 0,96% 100%,0 100%)}
        .hero-text h1{font-size:clamp(26px,4vw,44px);font-weight:900;line-height:1.08;margin-bottom:16px;color:#fff;text-transform:uppercase;letter-spacing:1px}
        .hero-text p{color:#bbb;font-size:14px;line-height:1.8;margin-bottom:24px;max-width:500px;text-align:justify}
        .hero-text .hbtns{display:flex;gap:12px;flex-wrap:wrap}
        .hero-text .btn-hero{padding:14px 32px;border-radius:4px;font-weight:800;font-size:14px;border:none;cursor:pointer;font-family:inherit;transition:.25s;text-transform:uppercase;letter-spacing:1px}
        .hero-text .btn-hero.fill{background:#e00400;color:#100404}
        .hero-text .btn-hero.fill:hover{background:#c00400;transform:translateY(-2px);box-shadow:0 10px 30px rgba(0,0,0,.4)}
        .hero-text .btn-hero.line{background:transparent;color:#e00400;border:2px solid #e00400}
        .hero-text .btn-hero.line:hover{background:rgba(224,4,0,.1)}
        .trust-row{display:flex;gap:28px;margin-top:22px;font-size:11px;color:#999;font-weight:600;text-transform:uppercase;letter-spacing:1px}
        .hero-img{flex-shrink:0;width:380px}
        .hero-img img{border-radius:4px;box-shadow:0 24px 64px rgba(0,0,0,.5);border:1px solid rgba(224,4,0,.18)}

        .stats{background:#240c0c;border-bottom:4px solid #e00400;padding:28px 0}
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center}
        .stat-item{padding:10px 0;border-right:1px solid rgba(224,4,0,.18)}
        .stat-item:last-child{border-right:none}
        .stat-item .sv{font-size:30px;font-weight:900;color:#e00400}
        .stat-item .sl{font-size:9px;color:#999;text-transform:uppercase;letter-spacing:2px;margin-top:4px;font-weight:600}

        .sec{padding:56px 0}
        .sec-alt{background:#1a0808}
        .sec-head{text-align:center;margin-bottom:42px}
        .sec-head .tag{display:inline-block;background:rgba(224,4,0,.1);color:#e00400;padding:5px 18px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:2px;margin-bottom:14px;border-left:3px solid #e00400}
        .sec-head h2{font-size:clamp(24px,3.2vw,36px);font-weight:900;margin-bottom:8px;color:#fff;text-transform:uppercase;letter-spacing:1px}
        .sec-head p{color:#999;font-size:14px;max-width:540px;margin:0 auto;text-align:justify}

        .art-row{max-width:900px;margin:0 auto}
        .art-content h3{font-size:22px;font-weight:800;margin-bottom:18px;color:#e00400;text-transform:uppercase;letter-spacing:.5px}
        .art-content p{color:#bbb;font-size:14px;line-height:1.9;margin-bottom:20px;text-align:justify}
        .art-gallery{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:22px}
        .art-gallery img{border-radius:4px;border:1px solid rgba(224,4,0,.18);width:100%;height:210px;object-fit:cover;transition:.3s}
        .art-gallery img:hover{border-color:#e00400}
        .art-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}
        .art-tag{background:rgba(224,4,0,.1);color:#e00400;padding:5px 16px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;border-left:3px solid #e00400}

        .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .feat-card{background:#240c0c;border:1px solid rgba(224,4,0,.18);border-radius:4px;padding:28px;transition:.3s;border-top:3px solid transparent}
        .feat-card:hover{border-top-color:#e00400;transform:translateY(-4px);box-shadow:0 12px 36px rgba(0,0,0,.3)}
        .feat-card .fi-icon{width:50px;height:50px;border-radius:4px;background:rgba(224,4,0,.1);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:16px;border-left:3px solid #e00400}
        .feat-card h3{font-size:14px;font-weight:800;margin-bottom:6px;color:#fff;text-transform:uppercase;letter-spacing:.5px}
        .feat-card p{color:#999;font-size:13px;margin:0;text-align:justify;line-height:1.65}

        .cta-box{background:#240c0c;border:1px solid rgba(224,4,0,.18);border-radius:4px;padding:56px 36px;text-align:center;position:relative;overflow:hidden}
        .cta-box::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(135deg,#c00400,#e00400)}
        .cta-box::after{content:'';position:absolute;right:0;top:0;width:40%;height:100%;background:linear-gradient(270deg,rgba(224,4,0,.1),transparent)}
        .cta-box>*{position:relative;z-index:1}
        .cta-box h2{font-size:clamp(22px,3vw,34px);font-weight:900;margin-bottom:10px;color:#fff;text-transform:uppercase;letter-spacing:1px}
        .cta-box p{color:#999;margin-bottom:24px;font-size:15px}
        .cta-box .btn-cta{background:#e00400;color:#100404;font-weight:800;padding:16px 40px;border-radius:4px;border:none;cursor:pointer;font-family:inherit;font-size:14px;text-transform:uppercase;letter-spacing:1.5px;transition:.25s}
        .cta-box .btn-cta:hover{background:#c00400;transform:translateY(-2px);box-shadow:0 10px 30px rgba(0,0,0,.4)}

        .bnr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .bnr-card{border-radius:4px;overflow:hidden;border:1px solid rgba(224,4,0,.18);transition:.3s}
        .bnr-card:hover{transform:translateY(-4px);box-shadow:0 10px 30px rgba(0,0,0,.3);border-color:#e00400}
        .bnr-card img{width:100%;height:auto}

        .faq-list{max-width:740px;margin:0 auto}
        .faq-item{background:#240c0c;border:1px solid rgba(224,4,0,.18);border-radius:4px;padding:20px 24px;margin-bottom:10px;cursor:pointer;transition:.25s;border-left:3px solid transparent}
        .faq-item:hover{border-left-color:#e00400}
        .faq-q{font-weight:700;display:flex;justify-content:space-between;align-items:center;font-size:14px;color:#e0e0e0;text-transform:uppercase;letter-spacing:.3px}
        .faq-q span{color:#e00400;font-size:20px;font-weight:800}
        .faq-a{margin-top:12px;color:#999;font-size:13px;line-height:1.75;border-top:1px solid rgba(224,4,0,.18);padding-top:12px;text-align:justify;text-transform:none;letter-spacing:0}

        footer{background:#1a0808;border-top:4px solid #e00400;padding:40px 0;font-size:12px}
        .ft-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;margin-bottom:24px}
        .ft-col h4{color:#e00400;font-size:13px;font-weight:800;margin-bottom:14px;text-transform:uppercase;letter-spacing:1.5px}
        .ft-col a{display:block;color:#888;margin-bottom:8px;transition:.2s;font-weight:500}.ft-col a:hover{color:#e00400}
        .ft-bottom{border-top:1px solid rgba(224,4,0,.18);padding-top:20px;text-align:center;color:#666;font-size:11px;text-transform:uppercase;letter-spacing:1px}

        @media(max-width:960px){
          .hero-flex{flex-direction:column;text-align:center}
          .hero-img{width:100%;max-width:420px}
          .hero-text .hbtns,.trust-row{justify-content:center}
          .hero-text p{text-align:center}
          .nav-strip{display:none}
          .art-gallery{grid-template-columns:1fr}
          .feat-grid{grid-template-columns:1fr 1fr}
          .ft-grid{grid-template-columns:1fr 1fr}
          .stat-item{border-right:none}
        }
        @media(max-width:640px){
          .feat-grid,.stats-grid{grid-template-columns:1fr}
          .bnr-grid,.ft-grid{grid-template-columns:1fr}
        }
      `}</style>

      <div className="topbar"><div className="W topbar-inner">
        <span>{D.brand} &mdash; Official 2026</span>
        <div style={{display:'flex',gap:'16px'}}>
          <a href={D.linkLogin}>Login</a>
          <a href={D.linkDaftar}>Daftar</a>
        </div>
      </div></div>

      <header><div className="W hd">
        <a href="#" className="logo"><img src={D.logo} alt={D.brand} />{D.brand}</a>
        <div className="nav-strip">
          <a href="#fitur" className="act">Fitur</a>
          <a href="#tentang">Tentang</a>
          <a href="#promo">Promo</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="hd-btns">
          <a href={D.linkLogin} className="btn btn-o">Login</a>
          <a href={D.linkDaftar} className="btn btn-p">Daftar</a>
        </div>
      </div></header>

      <main>
        <section className="hero"><div className="W">
          <div className="hero-flex">
            <div className="hero-text">
              <div className="stripe">{D.brand} Official</div>
              <h1>ISITOTO | Link Gacor : Portal Resmi Petualangan Monster Seru</h1>
              <p>ISITOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang.</p>
              <div className="hbtns">
                <a href={D.linkDaftar} className="btn-hero fill">Daftar Sekarang &rarr;</a>
                <a href={D.linkLogin} className="btn-hero line">Login Akun</a>
              </div>
              <div className="trust-row">
                <span>&#10003; SSL 256-bit</span>
                <span>&#10003; Uptime 99.9%</span>
                <span>&#10003; Support 24/7</span>
              </div>
            </div>
            <div className="hero-img">
              <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=450&fit=crop" alt={D.brand + ' Platform'} />
            </div>
          </div>
        </div></section>

        <div className="stats"><div className="W">
          <div className="stats-grid">
            <div className="stat-item"><div className="sv">99.9%</div><div className="sl">Uptime Server</div></div>
            <div className="stat-item"><div className="sv">24/7</div><div className="sl">Customer Support</div></div>
            <div className="stat-item"><div className="sv">1M+</div><div className="sl">Pengguna Aktif</div></div>
            <div className="stat-item"><div className="sv">256-bit</div><div className="sl">Enkripsi SSL</div></div>
          </div>
        </div></div>

        <section className="sec" id="fitur"><div className="W">
          <div className="sec-head">
            <span className="tag">Fitur Unggulan</span>
            <h2>Kenapa Memilih {D.brand}?</h2>
            <p>Nikmati berbagai fitur modern untuk pengalaman terbaik Anda.</p>
          </div>
          <div className="feat-grid">
            {features.map((f, i) => (
              <div className="feat-card" key={i}>
                <div className="fi-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div></section>

        <section className="sec sec-alt" id="tentang"><div className="W">
          <div className="sec-head">
            <span className="tag">Tentang Kami</span>
            <h2>Mengenal Lebih Dekat {D.brand}</h2>
          </div>
          <div className="art-row">
            <div className="art-content">
              <h3>Panduan Lengkap {D.brand}</h3>
              <div className="art-gallery">
                <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=260&fit=crop" alt={D.brand + ' Speed'} />
                <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=260&fit=crop" alt={D.brand + ' Power'} />
              </div>
              <p>ISITOTO hadir di situs resmi ISITOTO sebagai platform digital yang mengedepankan kemudahan dan keamanan akses bagi seluruh pengguna. Seperti lembaga pendidikan yang membuka pintu ilmu pengetahuan, ISITOTO membuka akses login dan registrasi yang mudah dipahami oleh siapa saja. Proses pendaftaran hanya membutuhkan waktu kurang dari 2 menit dengan panduan yang jelas di setiap langkahnya.</p>
              <div className="art-gallery">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=260&fit=crop" alt={D.brand + ' Premium'} />
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=260&fit=crop" alt={D.brand + ' Tech'} />
              </div>
              <p>Di situs resmi ISITOTO, ISITOTO menyediakan lingkungan digital yang aman dan terproteksi. Enkripsi SSL 256-bit menjaga kerahasiaan data pengguna, sementara server berkapasitas tinggi menjamin loading cepat tanpa hambatan. Dukungan multi-platform memungkinkan akses dari Android, iOS, Windows, maupun berbagai browser populer. Tim support yang ramah dan profesional siap membantu Anda 24 jam nonstop.</p>
              <div className="art-tags">
                <span className="art-tag">SSL 256-bit</span>
                <span className="art-tag">Uptime 99.9%</span>
                <span className="art-tag">Anti Blokir</span>
                <span className="art-tag">Multi Platform</span>
              </div>
            </div>
          </div>
        </div></section>

        <section className="sec" id="promo"><div className="W">
          <div className="sec-head">
            <span className="tag">Promo &amp; Event</span>
            <h2>Penawaran Terbaik Hari Ini</h2>
          </div>
          <div className="bnr-grid">
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=720&h=280&fit=crop" alt={D.brand + ' Promo 1'} loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=720&h=280&fit=crop" alt={D.brand + ' Promo 2'} loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=720&h=280&fit=crop" alt={D.brand + ' Promo 3'} loading="lazy" /></a>
          </div>
        </div></section>

        <section className="sec sec-alt"><div className="W">
          <div className="cta-box">
            <h2>Bergabung dengan {D.brand} Sekarang!</h2>
            <p>Daftar gratis dan rasakan layanan premium tanpa batas.</p>
            <a href={D.linkDaftar} className="btn-cta">Daftar Gratis &rarr;</a>
          </div>
        </div></section>

        <section className="sec" id="faq"><div className="W">
          <div className="sec-head">
            <span className="tag">FAQ</span>
            <h2>Pertanyaan Yang Sering Diajukan</h2>
            <p>Temukan jawaban seputar {D.brand}.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item" key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">{f.q}<span>{openFaq === i ? '\u2212' : '+'}</span></div>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div></section>
      </main>

      <footer><div className="W">
        <div className="ft-grid">
          <div className="ft-col">
            <h4>{D.brand}</h4>
            <p style={{color:'#888',lineHeight:'1.7'}}>Platform digital terpercaya dengan akses cepat, aman, dan tanpa hambatan.</p>
          </div>
          <div className="ft-col">
            <h4>Navigasi</h4>
            <a href="#fitur">Fitur</a><a href="#tentang">Tentang</a><a href="#faq">FAQ</a>
          </div>
          <div className="ft-col">
            <h4>Akses</h4>
            <a href={D.linkLogin}>Login Akun</a><a href={D.linkDaftar}>Daftar Baru</a><a href={D.linkDaftar}>Link Alternatif</a>
          </div>
          <div className="ft-col">
            <h4>Keamanan</h4>
            <a href="#">SSL 256-bit</a><a href="#">Proteksi DDoS</a><a href="#">Anti Blokir</a>
          </div>
        </div>
        <div className="ft-bottom">&copy; 2026 {D.brand} &mdash; {D.domain}</div>
      </div></footer>
    </>
  );
}
