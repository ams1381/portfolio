const getDeviceCapability = () => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) return 'low';

    const renderer = gl.getParameter(gl.RENDERER);
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEnd = isMobile || renderer.includes('Intel') || renderer.includes('Mali');

    return isLowEnd ? 'low' : 'high';
};