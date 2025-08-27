export const getDeviceCapability = () => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) return 'low';

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        : gl.getParameter(gl.RENDERER);

    const vendor = debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
        : gl.getParameter(gl.VENDOR);

    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Hardware limits
    const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE); // higher = better
    const maxRenderBuffer = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE);
    const maxVertexAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);

    // Heuristics
    let score = 0;

    // Texture size is a good proxy for GPU tier
    if (maxTextureSize >= 16384) score += 3;
    else if (maxTextureSize >= 8192) score += 2;
    else if (maxTextureSize >= 4096) score += 1;

    // Vendor/Renderer hints
    if (/NVIDIA|AMD|Apple/i.test(renderer)) score += 3;
    else if (/Intel/i.test(renderer)) score += 1;
    else if (/Mali|PowerVR|Adreno/i.test(renderer)) score += isMobile ? 1 : 2;

    // Renderbuffer size (usually similar to texture size)
    if (maxRenderBuffer >= 8192) score += 2;
    else if (maxRenderBuffer >= 4096) score += 1;

    // Vertex attributes (desktop GPUs are usually >16)
    if (maxVertexAttribs >= 16) score += 1;

    // Mobile penalty
    if (isMobile) score -= 1;

    // Final decision
    if (score >= 6) return 'high';
    if (score >= 3) return 'medium';
    return 'low';
};
