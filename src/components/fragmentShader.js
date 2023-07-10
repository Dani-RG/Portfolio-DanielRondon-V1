const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
    gl_FragColor = vec4(color, 1.0);
}

`;

export default fragmentShader;




// const fragmentShader = `
//   uniform float u_intensity;
//   uniform float u_time;

//   varying vec2 vUv;
//   varying float vDisplacement;

//   void main() {
//     float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
//     vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
    
//     float contrast = 2.0;
//     color = (color - 0.5) * contrast + 0.5;
    
//     gl_FragColor = vec4(color, 1.0);
//   }
// `;

// export default fragmentShader;