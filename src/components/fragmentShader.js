const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    vec3 yellow = vec3(1.0, 0.9, 0.3);  // Soft yellow color
    vec3 orange = vec3(1.0, 0.6, 0.2);  // Soft orange color
    vec3 color = mix(yellow, orange, distort);
    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;
