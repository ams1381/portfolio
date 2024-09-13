precision mediump float;
precision highp float;
precision highp int;

varying vec2 vUv;
varying float vWave;
uniform sampler2D uTexture;

void main() {
    float wave = vWave * 0.25;

    // Sample the texture at the given UV coordinates
    vec4 textureColor = texture2D(uTexture, vUv + wave);

    // Define the custom background color #f7f7fd (converted to normalized RGB values)
    vec3 customBackground = vec3(0.9686, 0.9686, 0.9922); // #f7f7fd in normalized RGB

    // Mix the texture color with the custom background color based on texture transparency
    vec3 finalColor = mix(customBackground, textureColor.rgb, textureColor.a);

    // Set the final fragment color with full opacity
    gl_FragColor = vec4(finalColor, 1.0);
}
