
// ORANGE STUDIO 访问保护
(function() {
    const CORRECT_PASSWORD = 'orange2026';
    
    // 先隐藏整个页面，防止闪烁
    const style = document.createElement('style');
    style.innerHTML = 'body { display: none !important; }';
    document.head.appendChild(style);

    const checkAuth = () => {
        const stored = localStorage.getItem('orange_studio_authed');
        if (stored === 'true') {
            style.remove(); // 已授权，显示内容
            return;
        }

        const input = prompt('🍊 橘子创作室 | 请输入访问码：');
        if (input === CORRECT_PASSWORD) {
            localStorage.setItem('orange_studio_authed', 'true');
            style.remove();
        } else {
            alert('访问码错误。');
            document.documentElement.innerHTML = '<body style="background:#0A0F14; color:#666; display:flex; justify-content:center; align-items:center; height:100vh; font-family:sans-serif;"><div><h1>🍊 橘子创作室</h1><p>访问码错误，请刷新页面重试。</p></div></body>';
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkAuth);
    } else {
        checkAuth();
    }
})();
