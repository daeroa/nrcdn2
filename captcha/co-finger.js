// =============================================================================
// co-finger.js
// no copy
// =============================================================================

(function() {
  window.getDeviceFingerprint = function() {
    return generateStableFingerprint();
  };
  // ===========================================================================
  function generateStableFingerprint() {
    const components = [];
    if (typeof navigator !== 'undefined' && navigator.userAgent) {
      components.push(navigator.userAgent);
    }
    
    if (typeof navigator !== 'undefined' && navigator.platform) {
      components.push(navigator.platform);
    }
    
    if (typeof navigator !== 'undefined' && navigator.language) {
      components.push(navigator.language);
    }
    
    if (typeof navigator !== 'undefined' && navigator.languages) {
      components.push(navigator.languages.join(','));
    }
    
    if (typeof screen !== 'undefined') {
      components.push(`${screen.width}x${screen.height}`);
      components.push(screen.colorDepth.toString());
    }
    
    components.push(new Date().getTimezoneOffset().toString());
    
    components.push(typeof window !== 'undefined' && !!window.sessionStorage);
    components.push(typeof window !== 'undefined' && !!window.localStorage);
    components.push(typeof window !== 'undefined' && !!window.indexedDB);
    
    if (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) {
      components.push(navigator.hardwareConcurrency.toString());
    }
    
    if (typeof navigator !== 'undefined' && navigator.maxTouchPoints) {
      components.push(navigator.maxTouchPoints.toString());
    }
    
    const canvasFingerprint = generateCanvasFingerprint();
    if (canvasFingerprint) {
      components.push(canvasFingerprint);
    }
    
    const webglFingerprint = generateWebGLFingerprint();
    if (webglFingerprint) {
      components.push(webglFingerprint);
    }
    const audioFingerprint = generateAudioFingerprint();
    if (audioFingerprint) {
      components.push(audioFingerprint);
    }
    
    const fontFingerprint = generateFontFingerprint();
    if (fontFingerprint) {
      components.push(fontFingerprint);
    }
    
    const fingerprintString = components.join('|');
    
    return generate32CharHash(fingerprintString);
  }

  function generateCanvasFingerprint() {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 128;
      canvas.style.display = 'none';
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial, sans-serif';
      ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = '#f60';
      ctx.fillRect(125, 1, 62, 20);
      ctx.fillStyle = '#069';
      ctx.fillText('Fingerprint Canvas', 2, 15);
      ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
      ctx.fillText('Fingerprint Canvas', 4, 17);
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, 'red');
      gradient.addColorStop(0.5, 'green');
      gradient.addColorStop(1, 'blue');
      ctx.fillStyle = gradient;
      ctx.fillRect(10, 50, 100, 50);
      
      const dataUrl = canvas.toDataURL();
      return dataUrl.substring(dataUrl.indexOf(',') + 1, dataUrl.indexOf(',') + 65);
    } catch (error) {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;
        
        ctx.fillStyle = 'rgb(255,0,0)';
        ctx.fillRect(10, 10, 50, 50);
        ctx.fillStyle = 'rgb(0,255,0)';
        ctx.fillRect(30, 30, 50, 50);
        
        const dataUrl = canvas.toDataURL();
        return dataUrl.substring(dataUrl.indexOf(',') + 1);
      } catch (e) {
        return null;
      }
    }
  }

  function generateWebGLFingerprint() {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) return null;
      
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        return `${vendor}|${renderer}`;
      }
      
      // Fallback to basic WebGL parameters
      const params = [
        'VERSION', 'SHADING_LANGUAGE_VERSION', 'VENDOR', 'RENDERER'
      ];
      
      const values = params.map(param => {
        try {
          return gl.getParameter(gl[param]) || '';
        } catch (e) {
          return '';
        }
      });
      
      return values.join('|');
    } catch (error) {
      return null;
    }
  }

  function generateAudioFingerprint() {
    try {
      const audioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      
      if (!audioContext) return null;
      
      const context = new audioContext(1, 44100, 44100);
      const oscillator = context.createOscillator();
      const compressor = context.createDynamicsCompressor();
      
      oscillator.connect(compressor);
      compressor.connect(context.destination);
      
      oscillator.start(0);
      context.startRendering();
      
      return 'audio_available';
    } catch (error) {
      return null;
    }
  }
  function generateFontFingerprint() {
    const testString = "mmMwWLliI0O&1";
    const testSize = '72px';
    const fonts = [
      'Arial', 'Arial Black', 'Helvetica', 'Times New Roman',
      'Courier New', 'Verdana', 'Georgia', 'Palatino',
      'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS'
    ];
    
    const availableFonts = [];
    
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return null;
      ctx.textBaseline = 'alphabetic';
      ctx.textAlign = 'left';
      
      for (const font of fonts) {
        ctx.font = `${testSize} "${font}"`;
        const width1 = ctx.measureText(testString).width;
        
        ctx.font = `${testSize} monospace`;
        const width2 = ctx.measureText(testString).width;
        
        if (width1 !== width2) {
          availableFonts.push(font);
        }
      }
      
      return availableFonts.join(',');
    } catch (error) {
      return null;
    }
  }
  function generate32CharHash(input) {
    if (!input || typeof input !== 'string') {
      input = 'fallback' + Date.now().toString();
    }

    let hash1 = 0;
    let hash2 = 0x811c9dc5; 
    
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      
      hash1 = ((hash1 << 5) - hash1) + char;
      hash1 = hash1 & hash1;
      
      hash2 ^= char;
      hash2 += (hash2 << 1) + (hash2 << 4) + (hash2 << 7) + (hash2 << 8) + (hash2 << 24);
    }
    
    const combinedHash = Math.abs(hash1 ^ hash2);
    return combinedHash.toString(16).padStart(32, '0');
  };

  if (typeof window !== 'undefined') {
    window.getDeviceFingerprint = window.getDeviceFingerprint || generateStableFingerprint;
  }
})();
