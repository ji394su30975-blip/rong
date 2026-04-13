export default function Home() {
  return (
    <main style={{ padding: '1rem 0.5rem', maxWidth: '680px', margin: '0 auto', backgroundColor: '#faf8f0', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .hero { background: linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%); border-radius: 1rem; padding: 2.5rem 2rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; }
        .avatar { width: 100px; height: 100px; border-radius: 50%; background: #E1F5EE; border: 3px solid #9FE1CB; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: 500; color: #0F6E56; flex-shrink: 0; }
        .hero-text h1 { font-size: 26px; font-weight: 500; color: #fff; margin: 0 0 4px; }
        .hero-text p { font-size: 15px; color: #9FE1CB; margin: 0 0 12px; }
        .badge { background: rgba(255,255,255,0.15); border: 0.5px solid rgba(255,255,255,0.3); border-radius: 999px; padding: 4px 14px; font-size: 13px; color: #E1F5EE; margin-right: 8px; }
        .section-title { font-size: 14px; font-weight: bold; color: #666; margin: 2rem 0 1rem; text-transform: uppercase; }
        .policy-card { background: #fff; border: 1px solid #eee; border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .policy-card h3 { font-size: 16px; color: #0F6E56; margin: 0 0 8px; }
        .policy-card p { font-size: 14px; color: #555; line-height: 1.6; }
      `}} />

      {/* Hero 區塊 (你現在看到的這塊) */}
      <div className="hero">
        <div className="avatar">蓉</div>
        <div className="hero-text">
          <h1>黃蓉蓉</h1>
          <p>里長候選人 ・ 認真做事、貼近民心</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="badge">在地深耕 20 年</span>
            <span className="badge">現任社區理事</span>
            <span className="badge">志工服務逾百次</span>
          </div>
        </div>
      </div>

      {/* 新增：政見區塊 */}
      <div className="section-title">我的政見</div>
      <div className="policy-card">
        <h3>🌱 綠意社區</h3>
        <p>增加巷弄植栽，優化社區公園設施，打造最舒適的居住環境。</p>
      </div>
      <div className="policy-card">
        <h3>👵 長者照護</h3>
        <p>定期舉辦健康講座，增加長青食堂頻率，讓家中的長輩不孤單。</p>
      </div>

      <div style={{ textAlign: 'center', color: '#888', fontSize
