export default function Home() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '1000px', margin: '0 auto', backgroundColor: '#faf8f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        /* 保持你的大字體與標準綠色設定 */
        .hero { background: linear-gradient(135deg, #009944 0%, #007733 100%); border-radius: 1.5rem; padding: 4rem 3rem; margin-bottom: 2rem; display: flex; align-items: center; gap: 3rem; flex-wrap: wrap; }
        .avatar { width: 160px; height: 160px; border-radius: 50%; background: #E1F5EE; border: 5px solid #9FE1CB; display: flex; align-items: center; justify-content: center; font-size: 64px; font-weight: 500; color: #009944; flex-shrink: 0; }
        .hero-text h1 { font-size: 52px; font-weight: bold; color: #fff; margin: 0 0 8px; }
        .hero-text p { font-size: 30px; color: #E1F5EE; margin: 0 0 20px; }
        .badge { background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); border-radius: 999px; padding: 8px 24px; font-size: 26px; color: #fff; margin-right: 12px; margin-bottom: 12px; display: inline-block; }
        
        .section-title { font-size: 28px; font-weight: bold; color: #666; margin: 3rem 0 1.5rem; text-transform: uppercase; letter-spacing: 2px; }
        .policy-card { background: #fff; border: 1px solid #eee; border-radius: 20px; padding: 2rem; margin-bottom: 1.5rem; box-shadow: 0 4px 8px rgba(0,0,0,0.05); }
        .policy-card h3 { font-size: 32px; color: #009944; margin: 0 0 12px; display: flex; align-items: center; gap: 12px; }
        .policy-card p { font-size: 28px; color: #555; line-height: 1.6; margin: 0; }
        
        /* 形象大圖的樣式 */
        .feature-image { width: 100%; border-radius: 20px; overflow: hidden; margin: 2rem 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .feature-image img { width: 100%; height: auto; display: block; }

        .contact-bar { background: #fff; border: 1px solid #eee; border-radius: 20px; padding: 2rem; display: flex; flex-direction: column; gap: 2rem; }
        .contact-item { font-size: 26px; color: #666; }
        .contact-item strong { display: block; color: #1a1a1a; font-size: 28px; margin-bottom: 4px; }
      `}} />

      {/* 頂部區塊 */}
      <div className="hero">
        <div className="avatar">蓉</div>
        <div className="hero-text">
          <h1>黃蓉蓉</h1>
          <p>里長候選人 ・ 認真做事、貼近民心</p>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <span className="badge">在地深耕 18 年</span>
            <span className="badge">現任 MOMO, Luka 鏟屎官</span>
            <span className="badge">志工服務百次</span>
          </div>
        </div>
      </div>

      <div className="section-title">我的政見</div>
      <div className="policy-card">
        <h3>🌱 綠意社區</h3>
        <p>增加巷弄植栽，優化社區公園設施，打造最舒適的居住環境。</p>
      </div>
      <div className="policy-card">
        <h3>👵 長者照護</h3>
        <p>定期舉辦健康講座，增加長青食堂頻率，讓家中的長輩不孤單。</p>
      </div>

      {/* 📸 放在聯絡資訊上面的形象照片 */}
      <div className="feature-image">
        <img 
          src="/rongrong.png" 
          alt="黃蓉蓉形象照" 
        />
      </div>

      <div className="section-title">聯絡資訊</div>
      <div className="contact-bar">
        <div className="contact-item">
          <strong>服務處地址</strong>
          新北市三峽區民權街 88 號
        </div>
        <div className="contact-item">
          <strong>聯絡電話</strong>
          02-2671-7804
        </div>
      </div>
      
      <div style={{ textAlign: 'center', color: '#aaa', fontSize: '24px', marginTop: '4rem', paddingBottom: '4rem' }}>
        <p>© 2026 黃蓉蓉里長候選人辦公室</p>
      </div>
    </main>
  );
}
