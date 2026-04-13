export default function Home() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: `
        .hero { background: linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%); border-radius: 1rem; padding: 2.5rem 2rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; }
        .avatar { width: 100px; height: 100px; border-radius: 50%; background: #E1F5EE; border: 3px solid #9FE1CB; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: 500; color: #0F6E56; flex-shrink: 0; }
        .hero-text h1 { font-size: 26px; font-weight: 500; color: #fff; margin: 0 0 4px; }
        .hero-text p { font-size: 15px; color: #9FE1CB; margin: 0 0 12px; }
        .hero-badges { display: flex; gap: 8px; flex-wrap: wrap; }
        .badge { background: rgba(255,255,255,0.15); border: 0.5px solid rgba(255,255,255,0.3); border-radius: 999px; padding: 4px 14px; font-size: 13px; color: #E1F5EE; }
      `}} />

      <div style={{ padding: '1rem 0.5rem', maxWidth: '680px', margin: '0 auto' }}>
        <div className="hero">
          <div className="avatar">蓉</div>
          <div className="hero-text">
            {/* 你可以在這裡改顏色，例如：style={{ color: '#FFD700' }} */}
            <h1>黃蓉蓉</h1>
            <p>里長候選人 ・ 認真做事、貼近民心</p>
            <div className="hero-badges">
              <span className="badge">在地深耕 20 年</span>
              <span className="badge">現任社區理事</span>
              <span className="badge">志工服務逾百次</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
