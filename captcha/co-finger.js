export function gendfp() {
      try {
        const components = [];
    
        if (navigator.userAgent) {
          components.push(navigator.userAgent);
        }
        
        if (navigator.platform) {
          components.push(navigator.platform);
        }
        
        if (navigator.language) {
          components.push(navigator.language);
        }
        
        components.push(`${screen.width}x${screen.height}`);
        
        components.push(screen.colorDepth);
        
        components.push(new Date().getTimezoneOffset());
        
        components.push(!!window.sessionStorage);
        components.push(!!window.localStorage);
        components.push(!!window.indexedDB);
        
        if (navigator.hardwareConcurrency) {
          components.push(navigator.hardwareConcurrency);
        } else {
          components.push('unknown');
        }
        
        if (navigator.maxTouchPoints) {
          components.push(navigator.maxTouchPoints);
        } else {
          components.push('unknown');
        }
        
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.textBaseline = 'top';
          ctx.font = '14px Arial';
          ctx.fillStyle = '#f60';
          ctx.fillRect(125, 1, 62, 20);
          ctx.fillStyle = '#069';
          ctx.fillText('SiCaptcha', 2, 15);
          ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
          ctx.fillText('SiCaptcha', 4, 17);
          const canvasData = canvas.toDataURL();
          components.push(canvasData.substring(canvasData.indexOf(',') + 1, canvasData.indexOf(',') + 33));
        }
        
        const fingerprintString = components.join('|');
        
        let hash = 0;
        for (let i = 0; i < fingerprintString.length; i++) {
          const char = fingerprintString.charCodeAt(i);
          hash = ((hash << 5) - hash) + char;
          hash = hash & hash;
        }
        this.deviceFingerprint = Math.abs(hash).toString(16).padStart(32, '0');
        return this.deviceFingerprint;
      } catch (error) {
        const timestamp = Date.now().toString();
        let deterministicHash = 0;
        for (let i = 0; i < timestamp.length; i++) {
          deterministicHash = ((deterministicHash << 5) - deterministicHash) + timestamp.charCodeAt(i);
          deterministicHash = deterministicHash & deterministicHash;
        }
        this.deviceFingerprint = Math.abs(deterministicHash).toString(16).padStart(32, '0');
        return this.deviceFingerprint;
      }
    }
