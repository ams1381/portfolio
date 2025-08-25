precision mediump float;
precision highp float;
precision highp int;


varying vec2 vUv;
varying float vWave;
uniform sampler2D uTexture;

void main() {
  float strength = 0.03;         // distortion strength
  float frequency = 10.0;        // how many waves
  float distortion = sin(vUv.y * frequency + vWave) * strength;

  float wave = vWave * 0.25;
  float r = texture2D(uTexture, vUv ).r;
  float g = texture2D(uTexture, vUv).g;
  float b = texture2D(uTexture, vUv - distortion).b;

  vec3 texture = vec3(r, g, b);
  gl_FragColor = vec4(texture, 0.8);
}