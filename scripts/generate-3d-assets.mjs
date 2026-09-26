import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const stickersDir = path.resolve('public/images/stickers');
if (!fs.existsSync(stickersDir)) {
  fs.mkdirSync(stickersDir, { recursive: true });
}

// Helper to save SVG string as both .webp and .png
async function saveAsset(name, svgContent, width = 600, height = 600) {
  const svgBuffer = Buffer.from(svgContent);
  const webpPath = path.join(stickersDir, `${name}.webp`);
  const pngPath = path.join(stickersDir, `${name}.png`);

  await sharp(svgBuffer, { density: 300 })
    .resize(width, height, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 95, lossless: false })
    .toFile(webpPath);

  await sharp(svgBuffer, { density: 300 })
    .resize(width, height, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(pngPath);

  console.log(`✓ Generated ${name}.webp & ${name}.png`);
}

// 1. EARPHONES: Apple-style white wired earbuds with real looping wire, 3D shading, metallic jack & mesh
const earphonesSvg = `
<svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#282020" flood-opacity="0.18"/>
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#282020" flood-opacity="0.12"/>
    </filter>
    <linearGradient id="cord-cyl-1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="25%" stop-color="#F7F7F8"/>
      <stop offset="60%" stop-color="#DCDFE3"/>
      <stop offset="90%" stop-color="#B8BDC4"/>
      <stop offset="100%" stop-color="#8E939C"/>
    </linearGradient>
    <linearGradient id="earbud-shell-1" x1="0.2" y1="0.1" x2="0.8" y2="0.9">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="40%" stop-color="#FBFBFB"/>
      <stop offset="75%" stop-color="#E1E4E8"/>
      <stop offset="100%" stop-color="#C2C7CE"/>
    </linearGradient>
    <linearGradient id="earbud-shell-2" x1="0.8" y1="0.1" x2="0.2" y2="0.9">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="35%" stop-color="#F9F9FA"/>
      <stop offset="70%" stop-color="#DFE2E6"/>
      <stop offset="100%" stop-color="#BAC0C8"/>
    </linearGradient>
    <radialGradient id="mesh-dark" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#5A5D64"/>
      <stop offset="70%" stop-color="#323438"/>
      <stop offset="100%" stop-color="#1B1C1E"/>
    </radialGradient>
    <linearGradient id="metal-accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#E2E4E8"/>
      <stop offset="30%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#B0B5BD"/>
      <stop offset="100%" stop-color="#7D828A"/>
    </linearGradient>
  </defs>

  <g filter="url(#soft-shadow)">
    <!-- Ambient cable shadow directly on ground -->
    <path d="M 280 280 C 270 380 340 460 410 520 C 460 560 480 620 470 690" stroke="#282020" stroke-width="14" stroke-opacity="0.08" stroke-linecap="round" fill="none"/>
    <path d="M 480 260 C 490 350 430 440 410 520" stroke="#282020" stroke-width="14" stroke-opacity="0.08" stroke-linecap="round" fill="none"/>

    <!-- Left Cable Flowing Loop -->
    <path d="M 280 280 C 270 380 340 460 410 520 C 460 560 480 620 470 690" stroke="url(#cord-cyl-1)" stroke-width="9" stroke-linecap="round" fill="none"/>
    <path d="M 280 280 C 270 380 340 460 410 520 C 460 560 480 620 470 690" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="1000" fill="none" opacity="0.8"/>

    <!-- Right Cable Flowing Loop -->
    <path d="M 480 260 C 490 350 430 440 410 520" stroke="url(#cord-cyl-1)" stroke-width="9" stroke-linecap="round" fill="none"/>
    <path d="M 480 260 C 490 350 430 440 410 520" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="1000" fill="none" opacity="0.8"/>

    <!-- Cable Y-Splitter / Joint Capsule -->
    <rect x="398" y="510" width="24" height="34" rx="10" fill="url(#earbud-shell-1)" stroke="#CAD0D8" stroke-width="1"/>
    <rect x="403" y="515" width="14" height="2" rx="1" fill="#CAD0D8"/>

    <!-- Main Cable Down toward connector -->
    <path d="M 410 544 C 420 590 415 650 420 720" stroke="url(#cord-cyl-1)" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M 410 544 C 420 590 415 650 420 720" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" fill="none" opacity="0.75"/>

    <!-- 3.5mm / Lightning Connector Plug -->
    <rect x="408" y="720" width="24" height="42" rx="4" fill="url(#earbud-shell-1)" stroke="#B8BFC8" stroke-width="1"/>
    <rect x="413" y="762" width="14" height="26" rx="2" fill="url(#metal-accent)"/>
    <line x1="413" y1="772" x2="427" y2="772" stroke="#555" stroke-width="1.5"/>
    <line x1="413" y1="778" x2="427" y2="778" stroke="#555" stroke-width="1.5"/>

    <!-- LEFT EARBUD -->
    <g transform="rotate(-18 280 250)">
      <!-- Stem -->
      <path d="M 276 210 L 278 286" stroke="url(#earbud-shell-1)" stroke-width="18" stroke-linecap="round"/>
      <path d="M 274 212 L 275 284" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
      <!-- Soft rubber strain relief collar -->
      <rect x="268" y="278" width="18" height="12" rx="4" fill="#D2D6DC"/>
      
      <!-- Head / Acoustic chamber -->
      <ellipse cx="266" cy="192" rx="34" ry="40" fill="url(#earbud-shell-1)" stroke="#E4E7EB" stroke-width="1.5"/>
      <!-- Primary Speaker Port -->
      <ellipse cx="254" cy="190" rx="14" ry="22" fill="url(#mesh-dark)"/>
      <ellipse cx="254" cy="190" rx="11" ry="18" fill="none" stroke="#6F747D" stroke-width="1" stroke-dasharray="2 2"/>
      <!-- Back acoustic vent -->
      <rect x="282" y="180" width="7" height="18" rx="3.5" fill="url(#mesh-dark)"/>
      <!-- Specular Gloss Highlight Curve -->
      <path d="M 252 162 C 275 160 292 178 290 206" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" fill="none" opacity="0.85"/>
    </g>

    <!-- RIGHT EARBUD -->
    <g transform="rotate(22 490 230)">
      <!-- Stem -->
      <path d="M 488 190 L 486 266" stroke="url(#earbud-shell-2)" stroke-width="18" stroke-linecap="round"/>
      <path d="M 484 192 L 483 264" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
      <rect x="478" y="258" width="18" height="12" rx="4" fill="#D2D6DC"/>

      <!-- Head / Acoustic chamber -->
      <ellipse cx="498" cy="172" rx="34" ry="40" fill="url(#earbud-shell-2)" stroke="#E4E7EB" stroke-width="1.5"/>
      <!-- Primary Speaker Port -->
      <ellipse cx="510" cy="170" rx="14" ry="22" fill="url(#mesh-dark)"/>
      <ellipse cx="510" cy="170" rx="11" ry="18" fill="none" stroke="#6F747D" stroke-width="1" stroke-dasharray="2 2"/>
      <!-- Back acoustic vent -->
      <rect x="475" y="160" width="7" height="18" rx="3.5" fill="url(#mesh-dark)"/>
      <!-- Specular Gloss Highlight Curve -->
      <path d="M 480 142 C 504 140 524 158 522 186" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" fill="none" opacity="0.85"/>
    </g>
  </g>
</svg>
`;

// 2. LAPTOP: Realistic open silver aluminum MacBook in 3D perspective with realistic code screen
const laptopSvg = `
<svg width="800" height="700" viewBox="0 0 800 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="lap-shadow" x="-15%" y="-15%" width="135%" height="145%">
      <feDropShadow dx="0" dy="24" stdDeviation="18" flood-color="#282020" flood-opacity="0.22"/>
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#282020" flood-opacity="0.14"/>
    </filter>
    <linearGradient id="mac-lid-grad" x1="0.1" y1="0" x2="0.9" y2="1">
      <stop offset="0%" stop-color="#F2F4F7"/>
      <stop offset="40%" stop-color="#D7DBE0"/>
      <stop offset="80%" stop-color="#BFC5CC"/>
      <stop offset="100%" stop-color="#A5ACB5"/>
    </linearGradient>
    <linearGradient id="mac-base-grad" x1="0" y1="0.3" x2="1" y2="0.8">
      <stop offset="0%" stop-color="#EAECEF"/>
      <stop offset="50%" stop-color="#D1D6DC"/>
      <stop offset="100%" stop-color="#A8AFB9"/>
    </linearGradient>
    <linearGradient id="glass-screen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#18181E"/>
      <stop offset="60%" stop-color="#141417"/>
      <stop offset="100%" stop-color="#0E0E12"/>
    </linearGradient>
    <linearGradient id="screen-specular" x1="0" y1="0" x2="0.8" y2="0.6">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.18"/>
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="key-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2C2C32"/>
      <stop offset="100%" stop-color="#18181C"/>
    </linearGradient>
  </defs>

  <g filter="url(#lap-shadow)">
    <!-- Ambient contact shadow under base -->
    <ellipse cx="400" cy="580" rx="320" ry="45" fill="#282020" opacity="0.25"/>

    <!-- TOP DISPLAY LID (Tilted back ~115 degrees) -->
    <!-- Aluminum back bezel -->
    <path d="M 175 140 C 175 125 186 115 200 115 L 600 115 C 614 115 625 125 625 140 L 610 430 L 190 430 Z" fill="url(#mac-lid-grad)" stroke="#9DA4AE" stroke-width="1.5"/>
    <!-- Glass Display Border (Black Bezel) -->
    <path d="M 188 126 C 188 120 193 118 202 118 L 598 118 C 607 118 612 120 612 126 L 600 425 L 200 425 Z" fill="#0A0A0C"/>
    
    <!-- Active Retina Screen Surface -->
    <path d="M 202 132 L 598 132 L 588 416 L 212 416 Z" fill="url(#glass-screen)"/>
    <!-- Screen Specular Glare -->
    <path d="M 202 132 L 460 132 L 212 360 Z" fill="url(#screen-specular)"/>

    <!-- Screen UI: Authentic Code Editor -->
    <!-- Window Controls -->
    <circle cx="218" cy="144" r="3.5" fill="#FF5F56"/>
    <circle cx="228" cy="144" r="3.5" fill="#FFBD2E"/>
    <circle cx="238" cy="144" r="3.5" fill="#27C93F"/>
    <text x="254" y="147" font-family="'JetBrains Mono', monospace" font-size="8.5" fill="#757580">portfolio.tsx — Mokshitha</text>

    <!-- Code Editor Lines -->
    <text x="220" y="172" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7C7C85">01</text>
    <text x="245" y="172" font-family="'JetBrains Mono', monospace" font-size="11" fill="#E8C7C7">import</text>
    <text x="295" y="172" font-family="'JetBrains Mono', monospace" font-size="11" fill="#FFFFFF">{ Craft, Precision }</text>
    <text x="430" y="172" font-family="'JetBrains Mono', monospace" font-size="11" fill="#E8C7C7">from</text>
    <text x="465" y="172" font-family="'JetBrains Mono', monospace" font-size="11" fill="#9B1C31">&apos;@cbit/engineering&apos;</text>

    <text x="220" y="196" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7C7C85">02</text>
    <text x="245" y="196" font-family="'JetBrains Mono', monospace" font-size="11" fill="#9B1C31">export default</text>
    <text x="350" y="196" font-family="'JetBrains Mono', monospace" font-size="11" fill="#E8C7C7">function</text>
    <text x="415" y="196" font-family="'JetBrains Mono', monospace" font-size="11" fill="#FFFFFF">Mokshitha() {</text>

    <text x="220" y="220" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7C7C85">03</text>
    <text x="260" y="220" font-family="'JetBrains Mono', monospace" font-size="11" fill="#D7DBE0">const</text>
    <text x="305" y="220" font-family="'JetBrains Mono', monospace" font-size="11" fill="#D7DBE0">passion = </text>
    <text x="375" y="220" font-family="'JetBrains Mono', monospace" font-size="11" fill="#9B1C31">&quot;Thoughtful Web Experiences&quot;</text>

    <text x="220" y="244" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7C7C85">04</text>
    <text x="260" y="244" font-family="'JetBrains Mono', monospace" font-size="11" fill="#9B1C31">const</text>
    <text x="305" y="244" font-family="'JetBrains Mono', monospace" font-size="11" fill="#D7DBE0">skills = [</text>
    <text x="375" y="244" font-family="'JetBrains Mono', monospace" font-size="11" fill="#E8C7C7">&apos;React&apos;</text>
    <text x="425" y="244" font-family="'JetBrains Mono', monospace" font-size="11" fill="#D7DBE0">, </text>
    <text x="435" y="244" font-family="'JetBrains Mono', monospace" font-size="11" fill="#E8C7C7">&apos;Spring Boot&apos;</text>
    <text x="525" y="244" font-family="'JetBrains Mono', monospace" font-size="11" fill="#D7DBE0">, </text>
    <text x="535" y="244" font-family="'JetBrains Mono', monospace" font-size="11" fill="#E8C7C7">&apos;TS&apos;</text>
    <text x="560" y="244" font-family="'JetBrains Mono', monospace" font-size="11" fill="#D7DBE0">]</text>

    <text x="220" y="268" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7C7C85">05</text>
    <text x="260" y="268" font-family="'JetBrains Mono', monospace" font-size="11" fill="#E8C7C7">return</text>
    <text x="315" y="268" font-family="'JetBrains Mono', monospace" font-size="11" fill="#FFFFFF">&lt;Innovate solve=&quot;real-world&quot; /&gt;</text>

    <text x="220" y="292" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7C7C85">06</text>
    <text x="245" y="292" font-family="'JetBrains Mono', monospace" font-size="11" fill="#FFFFFF">}</text>

    <!-- Webcam lens at top -->
    <circle cx="400" cy="123" r="2.2" fill="#1C1C22" stroke="#333" stroke-width="0.5"/>
    <circle cx="400" cy="123" r="0.8" fill="#3B82F6"/>

    <!-- Display Hinge Bar -->
    <rect x="250" y="426" width="300" height="9" rx="3" fill="#18181A" stroke="#333" stroke-width="0.5"/>

    <!-- LOWER ALUMINUM CHASSIS (Perspective Wedge) -->
    <!-- Base Plate -->
    <path d="M 120 570 C 120 578 128 584 140 584 L 660 584 C 672 584 680 578 680 570 L 610 432 L 190 432 Z" fill="url(#mac-base-grad)" stroke="#9299A2" stroke-width="1.5"/>
    <!-- Chamfered Front Edge Highlight -->
    <path d="M 122 570 L 678 570 L 672 581 L 128 581 Z" fill="#FFFFFF" opacity="0.6"/>

    <!-- Keyboard Well -->
    <path d="M 220 442 L 580 442 L 565 522 L 235 522 Z" fill="#18181B" stroke="#0E0E10" stroke-width="1.5"/>
    
    <!-- Realistic 3D Keycap Rows with subtle lighting -->
    <g fill="url(#key-grad)" stroke="#222226" stroke-width="0.8">
      <!-- Function Row -->
      <path d="M 224 445 L 576 445 L 573 454 L 227 454 Z"/>
      <!-- Number Row -->
      <path d="M 227 457 L 573 457 L 570 469 L 230 469 Z"/>
      <!-- QWERTY Row -->
      <path d="M 230 472 L 570 472 L 567 485 L 233 485 Z"/>
      <!-- Home Row -->
      <path d="M 233 488 L 567 488 L 564 502 L 236 502 Z"/>
      <!-- Bottom Row + Spacebar -->
      <path d="M 236 505 L 564 505 L 561 519 L 239 519 Z"/>
    </g>
    <!-- Key individual separator grid lines -->
    <line x1="260" y1="457" x2="262" y2="519" stroke="#121214" stroke-width="1"/>
    <line x1="310" y1="457" x2="312" y2="519" stroke="#121214" stroke-width="1"/>
    <line x1="360" y1="457" x2="362" y2="519" stroke="#121214" stroke-width="1"/>
    <line x1="410" y1="457" x2="412" y2="519" stroke="#121214" stroke-width="1"/>
    <line x1="460" y1="457" x2="462" y2="519" stroke="#121214" stroke-width="1"/>
    <line x1="510" y1="457" x2="512" y2="519" stroke="#121214" stroke-width="1"/>

    <!-- Glass Trackpad -->
    <rect x="340" y="532" width="120" height="42" rx="4" fill="#CCD1D7" stroke="#A6ACB5" stroke-width="1"/>
    <rect x="342" y="533" width="116" height="40" rx="3" fill="#DCE0E5" opacity="0.6"/>
    <!-- Thumb notch -->
    <path d="M 385 433 C 385 437 392 439 400 439 C 408 439 415 437 415 433" stroke="#8A9099" stroke-width="1.5" fill="none"/>
  </g>
</svg>
`;

// 3. CODING OBJECT: Tactile 3D mechanical keyboard / dev macropad with cherry red keycaps & OLED screen
const codingSvg = `
<svg width="700" height="600" viewBox="0 0 700 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="pad-shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="22" stdDeviation="16" flood-color="#282020" flood-opacity="0.2"/>
      <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#282020" flood-opacity="0.12"/>
    </filter>
    <linearGradient id="case-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#EAE3D5"/>
      <stop offset="60%" stop-color="#D5CCBE"/>
      <stop offset="100%" stop-color="#B8AEA0"/>
    </linearGradient>
    <linearGradient id="cherry-cap" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#B82842"/>
      <stop offset="40%" stop-color="#9B1C31"/>
      <stop offset="100%" stop-color="#6F1221"/>
    </linearGradient>
    <linearGradient id="cream-cap" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F2EBE0"/>
      <stop offset="100%" stop-color="#DDD3C4"/>
    </linearGradient>
    <linearGradient id="grey-cap" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4C4846"/>
      <stop offset="100%" stop-color="#282625"/>
    </linearGradient>
    <linearGradient id="oled-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#14181B"/>
      <stop offset="100%" stop-color="#0B0D0E"/>
    </linearGradient>
  </defs>

  <g filter="url(#pad-shadow)" transform="rotate(-6 350 300)">
    <!-- Heavy Solid Aluminum CNC Macropad Case (Angled perspective) -->
    <path d="M 120 180 C 120 165 132 155 148 155 L 552 155 C 568 155 580 165 580 180 L 595 440 C 595 458 580 475 560 475 L 140 475 C 120 475 105 458 105 440 Z" fill="url(#case-grad)" stroke="#9F9587" stroke-width="2"/>
    <!-- Angled chamfer bevel -->
    <path d="M 125 170 L 575 170 L 585 435 L 115 435 Z" fill="#FDFBF7" opacity="0.4"/>

    <!-- OLED Mini Screen on Top Right -->
    <rect x="380" y="180" width="170" height="60" rx="8" fill="url(#oled-grad)" stroke="#22252A" stroke-width="2"/>
    <text x="395" y="202" font-family="'JetBrains Mono', monospace" font-size="10" fill="#9B1C31" font-weight="700">MOKSHITHA • DEV</text>
    <text x="395" y="222" font-family="'JetBrains Mono', monospace" font-size="9" fill="#75B670">WPM: 112 | SIH &apos;25</text>
    <circle cx="530" cy="200" r="3" fill="#4ADE80"/>

    <!-- Rotary Encoder / Solid Brass Dial Top Left -->
    <circle cx="180" cy="210" r="32" fill="url(#case-grad)" stroke="#8A8072" stroke-width="2"/>
    <circle cx="180" cy="210" r="26" fill="#D39E43" stroke="#8E671E" stroke-width="1.5"/>
    <circle cx="180" cy="210" r="22" fill="#E8B86D"/>
    <!-- Knurled grip notch on dial -->
    <rect x="178" y="190" width="4" height="12" rx="2" fill="#674710"/>

    <!-- KEY MATRIX: 3D Sculpted Keycaps -->
    <!-- Row 1 -->
    <!-- ESC (Cherry Red) -->
    <g transform="translate(145, 260)">
      <rect x="0" y="4" width="70" height="56" rx="6" fill="#580E1A"/>
      <rect x="2" y="0" width="66" height="52" rx="5" fill="url(#cherry-cap)" stroke="#D44962" stroke-width="1"/>
      <text x="18" y="32" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="800" fill="#FFFFFF">ESC</text>
    </g>
    <!-- Code Key (Cream) -->
    <g transform="translate(230, 260)">
      <rect x="0" y="4" width="70" height="56" rx="6" fill="#A89E8F"/>
      <rect x="2" y="0" width="66" height="52" rx="5" fill="url(#cream-cap)" stroke="#FFFFFF" stroke-width="1"/>
      <text x="24" y="32" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="#9B1C31">&lt;/&gt;</text>
    </g>
    <!-- Git Key (Cream) -->
    <g transform="translate(315, 260)">
      <rect x="0" y="4" width="70" height="56" rx="6" fill="#A89E8F"/>
      <rect x="2" y="0" width="66" height="52" rx="5" fill="url(#cream-cap)" stroke="#FFFFFF" stroke-width="1"/>
      <text x="22" y="32" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#282020">GIT</text>
    </g>
    <!-- Run Key (Dark Ink) -->
    <g transform="translate(400, 260)">
      <rect x="0" y="4" width="70" height="56" rx="6" fill="#141312"/>
      <rect x="2" y="0" width="66" height="52" rx="5" fill="url(#grey-cap)" stroke="#666" stroke-width="1"/>
      <text x="22" y="32" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#FAF6EE">RUN</text>
    </g>
    <!-- Enter/Build (Cherry Red) -->
    <g transform="translate(485, 260)">
      <rect x="0" y="4" width="70" height="56" rx="6" fill="#580E1A"/>
      <rect x="2" y="0" width="66" height="52" rx="5" fill="url(#cherry-cap)" stroke="#D44962" stroke-width="1"/>
      <text x="18" y="32" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#FFFFFF">BUILD</text>
    </g>

    <!-- Row 2 -->
    <!-- Tab (Grey) -->
    <g transform="translate(145, 335)">
      <rect x="0" y="4" width="70" height="56" rx="6" fill="#141312"/>
      <rect x="2" y="0" width="66" height="52" rx="5" fill="url(#grey-cap)" stroke="#666" stroke-width="1"/>
      <text x="18" y="32" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#FAF6EE">TAB</text>
    </g>
    <!-- React (Cream) -->
    <g transform="translate(230, 335)">
      <rect x="0" y="4" width="70" height="56" rx="6" fill="#A89E8F"/>
      <rect x="2" y="0" width="66" height="52" rx="5" fill="url(#cream-cap)" stroke="#FFFFFF" stroke-width="1"/>
      <text x="16" y="32" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#282020">REACT</text>
    </g>
    <!-- Java (Cream) -->
    <g transform="translate(315, 335)">
      <rect x="0" y="4" width="70" height="56" rx="6" fill="#A89E8F"/>
      <rect x="2" y="0" width="66" height="52" rx="5" fill="url(#cream-cap)" stroke="#FFFFFF" stroke-width="1"/>
      <text x="20" y="32" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#282020">JAVA</text>
    </g>
    <!-- DB (Cream) -->
    <g transform="translate(400, 335)">
      <rect x="0" y="4" width="70" height="56" rx="6" fill="#A89E8F"/>
      <rect x="2" y="0" width="66" height="52" rx="5" fill="url(#cream-cap)" stroke="#FFFFFF" stroke-width="1"/>
      <text x="22" y="32" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#282020">SQL</text>
    </g>
    <!-- Deploy (Cherry Red) -->
    <g transform="translate(485, 335)">
      <rect x="0" y="4" width="70" height="56" rx="6" fill="#580E1A"/>
      <rect x="2" y="0" width="66" height="52" rx="5" fill="url(#cherry-cap)" stroke="#D44962" stroke-width="1"/>
      <text x="20" y="32" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#FFFFFF">PROD</text>
    </g>

    <!-- Braided USB-C Cable entering top -->
    <path d="M 330 155 C 330 110 300 80 280 40" stroke="#484442" stroke-width="14" stroke-linecap="round" fill="none"/>
    <path d="M 330 155 C 330 110 300 80 280 40" stroke="#7A7470" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 4" fill="none"/>
  </g>
</svg>
`;

// 4. PAPERCLIP: Photorealistic 3D polished chrome steel paperclip with specular gleam
const paperclipSvg = `
<svg width="400" height="600" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="clip-shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="6" dy="16" stdDeviation="12" flood-color="#282020" flood-opacity="0.26"/>
      <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#282020" flood-opacity="0.18"/>
    </filter>
    <linearGradient id="chrome-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="15%" stop-color="#EAECEF"/>
      <stop offset="35%" stop-color="#A5ACB6"/>
      <stop offset="55%" stop-color="#FFFFFF"/>
      <stop offset="75%" stop-color="#7B828D"/>
      <stop offset="90%" stop-color="#D9DCE1"/>
      <stop offset="100%" stop-color="#555B65"/>
    </linearGradient>
    <linearGradient id="chrome-specular" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.1"/>
    </linearGradient>
  </defs>

  <g filter="url(#clip-shadow)" transform="rotate(18 200 300)">
    <!-- Core Metallic 3D Wire Path -->
    <path d="M 175 70 C 120 70 85 105 85 160 L 85 450 C 85 520 130 560 190 560 C 250 560 295 520 295 450 L 295 210 C 295 165 265 135 225 135 C 185 135 155 165 155 210 L 155 440 C 155 470 172 490 200 490 C 228 490 245 470 245 440 L 245 250"
          stroke="url(#chrome-grad)" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- 3D Specular Highlight Ridge (Sharp chrome reflection) -->
    <path d="M 175 70 C 120 70 85 105 85 160 L 85 450 C 85 520 130 560 190 560 C 250 560 295 520 295 450 L 295 210 C 295 165 265 135 225 135 C 185 135 155 165 155 210 L 155 440 C 155 470 172 490 200 490 C 228 490 245 470 245 440 L 245 250"
          stroke="url(#chrome-specular)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          
    <!-- Secondary reflected light edge -->
    <path d="M 175 70 C 120 70 85 105 85 160 L 85 450 C 85 520 130 560 190 560 C 250 560 295 520 295 450 L 295 210 C 295 165 265 135 225 135 C 185 135 155 165 155 210 L 155 440 C 155 470 172 490 200 490 C 228 490 245 470 245 440 L 245 250"
          stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.6"/>
  </g>
</svg>
`;

// 5. COFFEE: Realistic ceramic glazed porcelain cup with rich espresso crema & rosette latte art
const coffeeSvg = `
<svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="coffee-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="28" stdDeviation="22" flood-color="#282020" flood-opacity="0.25"/>
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#282020" flood-opacity="0.14"/>
    </filter>
    <radialGradient id="saucer-ceramic" cx="45%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="65%" stop-color="#EDE7DC"/>
      <stop offset="85%" stop-color="#D6CEBE"/>
      <stop offset="100%" stop-color="#BCB2A0"/>
    </radialGradient>
    <radialGradient id="cup-rim" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#F4EFE6"/>
      <stop offset="85%" stop-color="#DCD4C5"/>
      <stop offset="100%" stop-color="#BCB09E"/>
    </radialGradient>
    <radialGradient id="espresso-crema" cx="42%" cy="40%" r="58%">
      <stop offset="0%" stop-color="#8E5429"/>
      <stop offset="35%" stop-color="#673918"/>
      <stop offset="70%" stop-color="#4B250E"/>
      <stop offset="95%" stop-color="#2C1204"/>
      <stop offset="100%" stop-color="#190901"/>
    </radialGradient>
    <linearGradient id="microfoam" x1="0.2" y1="0.1" x2="0.8" y2="0.9">
      <stop offset="0%" stop-color="#FFFDF9"/>
      <stop offset="50%" stop-color="#F3E9DD"/>
      <stop offset="85%" stop-color="#D6C4B0"/>
      <stop offset="100%" stop-color="#B39980"/>
    </linearGradient>
  </defs>

  <g filter="url(#coffee-shadow)">
    <!-- Contact Ambient Shadow -->
    <ellipse cx="350" cy="360" rx="280" ry="240" fill="#282020" opacity="0.22"/>

    <!-- Ceramic Saucer -->
    <ellipse cx="350" cy="350" rx="270" ry="230" fill="url(#saucer-ceramic)" stroke="#B3A998" stroke-width="2"/>
    <ellipse cx="350" cy="350" rx="220" ry="185" fill="none" stroke="#D1C8B8" stroke-width="2.5" opacity="0.7"/>

    <!-- Cup Ceramic Handle (Right side 3D cylinder) -->
    <path d="M 500 290 C 585 290 610 410 500 410" stroke="#FFFFFF" stroke-width="42" stroke-linecap="round"/>
    <path d="M 500 290 C 585 290 610 410 500 410" stroke="url(#cup-rim)" stroke-width="32" stroke-linecap="round"/>
    <path d="M 500 286 C 580 286 605 406 500 406" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity="0.8"/>

    <!-- Cup Ceramic Body Rim -->
    <ellipse cx="340" cy="350" rx="185" ry="175" fill="url(#cup-rim)" stroke="#B4AA98" stroke-width="2"/>
    <!-- Inner glazed wall -->
    <ellipse cx="340" cy="350" rx="165" ry="155" fill="#E8E1D2" stroke="#CCC2B0" stroke-width="1.5"/>

    <!-- Coffee Liquid Surface (Crema) -->
    <ellipse cx="340" cy="350" rx="155" ry="145" fill="url(#espresso-crema)"/>

    <!-- Crema swirl gradients & micro-bubbles -->
    <ellipse cx="340" cy="345" rx="130" ry="120" fill="none" stroke="#C88E5E" stroke-width="6" opacity="0.35" stroke-dasharray="24 16"/>

    <!-- Realistic Latte Art: Rosetta + Heart Top -->
    <g transform="translate(340, 350)">
      <!-- Main Fern / Leaf Body -->
      <path d="M 0 -90 C -45 -50 -55 -10 -40 25 C -25 55 0 95 0 95 C 0 95 25 55 40 25 C 55 -10 45 -50 0 -90 Z" fill="url(#microfoam)"/>
      
      <!-- Tiered Leaf Layer Highlights -->
      <ellipse cx="0" cy="-60" rx="30" ry="18" fill="#FFFDFB" opacity="0.95"/>
      <ellipse cx="0" cy="-25" rx="38" ry="22" fill="#FFFDFB" opacity="0.92"/>
      <ellipse cx="0" cy="15" rx="34" ry="20" fill="#FFFDFB" opacity="0.88"/>
      <ellipse cx="0" cy="50" rx="24" ry="15" fill="#FFFDFB" opacity="0.82"/>
      <ellipse cx="0" cy="75" rx="14" ry="10" fill="#FFFDFB" opacity="0.75"/>

      <!-- Central Slice Cutting Line -->
      <path d="M 0 -95 L 0 100" stroke="#5C3113" stroke-width="3" stroke-linecap="round" opacity="0.75"/>

      <!-- Heart topper -->
      <path d="M 0 -92 C -18 -112 -35 -92 -20 -75 C -10 -65 0 -55 0 -55 C 0 -55 10 -65 20 -75 C 35 -92 18 -112 0 -92 Z" fill="#FFFFFF"/>
    </g>

    <!-- Glazed Ceramic Specular Reflection Arc -->
    <path d="M 210 240 C 260 200 380 195 440 230" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" fill="none" opacity="0.85"/>
  </g>
</svg>
`;

// 6. VINTAGE CAMERA: 35mm rangefinder camera (chrome, black textured vulcanite, deep optical glass lens)
const cameraSvg = `
<svg width="800" height="650" viewBox="0 0 800 650" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="cam-shadow" x="-15%" y="-15%" width="135%" height="145%">
      <feDropShadow dx="0" dy="26" stdDeviation="20" flood-color="#282020" flood-opacity="0.25"/>
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#282020" flood-opacity="0.14"/>
    </filter>
    <linearGradient id="chrome-plate" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="25%" stop-color="#E9ECEF"/>
      <stop offset="60%" stop-color="#C2C7CE"/>
      <stop offset="90%" stop-color="#9BA1AB"/>
      <stop offset="100%" stop-color="#7A808A"/>
    </linearGradient>
    <linearGradient id="leatherette" x1="0.2" y1="0.2" x2="0.8" y2="0.8">
      <stop offset="0%" stop-color="#342825"/>
      <stop offset="50%" stop-color="#241B18"/>
      <stop offset="100%" stop-color="#140E0C"/>
    </linearGradient>
    <radialGradient id="lens-element-1" cx="45%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#2D4665"/>
      <stop offset="40%" stop-color="#182A40"/>
      <stop offset="75%" stop-color="#0E1825"/>
      <stop offset="100%" stop-color="#04070B"/>
    </radialGradient>
    <linearGradient id="coating-flare" x1="0.1" y1="0.1" x2="0.9" y2="0.9">
      <stop offset="0%" stop-color="#4F95DA" stop-opacity="0.7"/>
      <stop offset="40%" stop-color="#9B1C31" stop-opacity="0.4"/>
      <stop offset="80%" stop-color="#D97706" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <g filter="url(#cam-shadow)" transform="rotate(4 400 325)">
    <!-- Heavy Contact Shadow -->
    <ellipse cx="400" cy="550" rx="310" ry="38" fill="#282020" opacity="0.25"/>

    <!-- CAMERA CHASSIS -->
    <!-- Leatherette Central Grip Section -->
    <rect x="130" y="210" width="540" height="310" rx="20" fill="url(#leatherette)"/>
    <!-- Fine pebbled leather texture grid -->
    <rect x="130" y="210" width="540" height="310" rx="20" fill="none" stroke="#3D2F2B" stroke-width="1.5" stroke-dasharray="4 3"/>

    <!-- Top Solid Brushed Chrome Plate -->
    <path d="M 130 210 L 130 145 C 130 130 142 120 158 120 L 642 120 C 658 120 670 130 670 145 L 670 210 Z" fill="url(#chrome-plate)" stroke="#8C939E" stroke-width="1.5"/>
    <line x1="130" y1="210" x2="670" y2="210" stroke="#5E6570" stroke-width="2"/>
    <!-- Chrome top highlight bevel -->
    <line x1="150" y1="123" x2="650" y2="123" stroke="#FFFFFF" stroke-width="2.5" opacity="0.8"/>

    <!-- Bottom Chrome Base Plate -->
    <path d="M 130 500 L 670 500 L 670 530 C 670 545 658 555 642 555 L 158 555 C 142 555 130 545 130 530 Z" fill="url(#chrome-plate)" stroke="#8C939E" stroke-width="1.5"/>

    <!-- TOP MECHANICAL DIALS & CONTROLS -->
    <!-- Shutter Speed Dial (Left) -->
    <rect x="210" y="94" width="70" height="26" rx="4" fill="url(#chrome-plate)" stroke="#6C727D" stroke-width="1.5"/>
    <line x1="225" y1="94" x2="225" y2="120" stroke="#333" stroke-width="1"/>
    <line x1="245" y1="94" x2="245" y2="120" stroke="#333" stroke-width="1"/>
    <line x1="265" y1="94" x2="265" y2="120" stroke="#333" stroke-width="1"/>

    <!-- Shutter Release Button + Threaded Cable Mount (Right) -->
    <rect x="540" y="90" width="36" height="30" rx="6" fill="url(#chrome-plate)" stroke="#6C727D" stroke-width="1.5"/>
    <circle cx="558" cy="85" r="14" fill="#9B1C31" stroke="#FFFFFF" stroke-width="1.5"/>
    <circle cx="558" cy="85" r="5" fill="#3B050F"/>

    <!-- Film Advance Winding Lever -->
    <path d="M 590 105 L 650 96 C 655 95 660 100 658 106 L 650 118 L 590 118 Z" fill="url(#chrome-plate)" stroke="#6C727D" stroke-width="1.2"/>

    <!-- Hotshoe Flash Mount (Center) -->
    <rect x="365" y="106" width="70" height="14" rx="2" fill="url(#chrome-plate)" stroke="#555" stroke-width="1"/>

    <!-- Optical Viewfinder Window (Right Front) -->
    <rect x="525" y="145" width="60" height="38" rx="6" fill="#15212E" stroke="#A4ABB5" stroke-width="2.5"/>
    <rect x="532" y="152" width="46" height="24" rx="3" fill="#2E4A68" opacity="0.9"/>
    <!-- Glass diagonal glare -->
    <path d="M 532 152 L 560 152 L 542 176 L 532 176 Z" fill="#FFFFFF" opacity="0.5"/>

    <!-- Rangefinder Prism Window (Center Front) -->
    <rect x="440" y="152" width="32" height="24" rx="4" fill="#F59E0B" stroke="#A4ABB5" stroke-width="2"/>

    <!-- Red Iconic Brand Dot Accent -->
    <circle cx="230" cy="265" r="22" fill="#9B1C31" stroke="#FFFFFF" stroke-width="2"/>
    <text x="220" y="273" font-family="'Playfair Display', serif" font-weight="800" font-size="20" fill="#FFFFFF">M</text>

    <!-- LARGE CENTRAL 3D OPTICAL LENS (Protruding Barrel) -->
    <!-- Outermost Chrome Flange Ring -->
    <circle cx="400" cy="365" r="140" fill="url(#chrome-plate)" stroke="#6A717B" stroke-width="3"/>
    <!-- Knurled Metal Aperture Grip Ring -->
    <circle cx="400" cy="365" r="126" fill="#221D1B" stroke="#483E3A" stroke-width="3"/>
    <circle cx="400" cy="365" r="122" fill="none" stroke="#756762" stroke-width="2" stroke-dasharray="4 4"/>

    <!-- Lens Specs Engraving Ring -->
    <circle cx="400" cy="365" r="110" fill="#141110" stroke="#000" stroke-width="2"/>
    <text x="360" y="278" font-family="'JetBrains Mono', monospace" font-size="11" fill="#EAEAEA" letter-spacing="1.5">f/1.4  50mm</text>
    <text x="362" y="462" font-family="'JetBrains Mono', monospace" font-size="9" fill="#9B1C31" letter-spacing="1">MOKSHITHA • CBIT</text>

    <!-- Deep Multi-Coated Optical Glass Element -->
    <circle cx="400" cy="365" r="88" fill="url(#lens-element-1)"/>
    <circle cx="400" cy="365" r="84" fill="url(#coating-flare)"/>

    <!-- Aperture Blades Inner Iris -->
    <circle cx="400" cy="365" r="38" fill="#040608"/>
    
    <!-- Optical Specular Reflection Curves -->
    <ellipse cx="370" cy="335" rx="28" ry="15" transform="rotate(-30 370 335)" fill="#FFFFFF" opacity="0.85"/>
    <ellipse cx="435" cy="400" rx="14" ry="8" transform="rotate(-30 435 400)" fill="#78B9ED" opacity="0.6"/>
  </g>
</svg>
`;

// 7. CHERRY: Realistic glossy deep red cherries with organic green stems and leaf
const cherrySvg = `
<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="cherry-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="4" dy="18" stdDeviation="14" flood-color="#282020" flood-opacity="0.22"/>
      <feDropShadow dx="1" dy="4" stdDeviation="5" flood-color="#282020" flood-opacity="0.15"/>
    </filter>
    <radialGradient id="cherry-skin-left" cx="38%" cy="32%" r="65%">
      <stop offset="0%" stop-color="#FF5C78"/>
      <stop offset="35%" stop-color="#BA1D39"/>
      <stop offset="70%" stop-color="#751022"/>
      <stop offset="95%" stop-color="#3B050F"/>
      <stop offset="100%" stop-color="#1F0106"/>
    </radialGradient>
    <radialGradient id="cherry-skin-right" cx="36%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#FF5C78"/>
      <stop offset="35%" stop-color="#BA1D39"/>
      <stop offset="70%" stop-color="#751022"/>
      <stop offset="95%" stop-color="#3B050F"/>
      <stop offset="100%" stop-color="#1F0106"/>
    </radialGradient>
    <linearGradient id="stem-wood" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#84A853"/>
      <stop offset="50%" stop-color="#55752E"/>
      <stop offset="100%" stop-color="#344819"/>
    </linearGradient>
    <linearGradient id="leaf-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7CA347"/>
      <stop offset="70%" stop-color="#4F7124"/>
      <stop offset="100%" stop-color="#314815"/>
    </linearGradient>
  </defs>

  <g filter="url(#cherry-shadow)">
    <!-- Contact Shadows on ground -->
    <ellipse cx="180" cy="420" rx="70" ry="22" fill="#282020" opacity="0.22"/>
    <ellipse cx="330" cy="380" rx="65" ry="20" fill="#282020" opacity="0.2"/>

    <!-- Green Stems Meeting at Top Joint -->
    <ellipse cx="250" cy="80" rx="10" ry="7" fill="#425722"/>
    
    <!-- Left Curved Stem -->
    <path d="M 250 80 C 195 140 160 220 185 320" stroke="url(#stem-wood)" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M 252 80 C 197 140 162 220 187 320" stroke="#A2CA6B" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.7"/>

    <!-- Right Curved Stem -->
    <path d="M 250 80 C 275 160 315 220 330 285" stroke="url(#stem-wood)" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M 252 80 C 277 160 317 220 332 285" stroke="#A2CA6B" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.7"/>

    <!-- Fresh Green Leaf at Junction -->
    <path d="M 252 84 C 295 65 350 78 375 115 C 335 130 280 120 252 84 Z" fill="url(#leaf-grad)"/>
    <path d="M 252 84 C 295 95 340 108 375 115" stroke="#90BC50" stroke-width="2" fill="none"/>

    <!-- LEFT CHERRY FRUIT -->
    <circle cx="185" cy="355" r="80" fill="url(#cherry-skin-left)"/>
    <!-- Stem Dimple Cavity -->
    <path d="M 175 295 C 185 302 195 302 205 295" stroke="#260309" stroke-width="6" stroke-linecap="round"/>
    <!-- Gloss Specular Highlight Reflection -->
    <ellipse cx="155" cy="325" rx="24" ry="14" transform="rotate(-35 155 325)" fill="#FFFFFF" opacity="0.88"/>
    <circle cx="140" cy="355" r="5" fill="#FFFFFF" opacity="0.6"/>

    <!-- RIGHT CHERRY FRUIT -->
    <circle cx="330" cy="325" r="74" fill="url(#cherry-skin-right)"/>
    <path d="M 320 270 C 330 276 340 276 350 270" stroke="#260309" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="305" cy="300" rx="22" ry="12" transform="rotate(-35 305 300)" fill="#FFFFFF" opacity="0.88"/>
    <circle cx="292" cy="328" r="4.5" fill="#FFFFFF" opacity="0.6"/>
  </g>
</svg>
`;

async function run() {
  console.log('Rendering 3D realistic objects with sharp...');
  await saveAsset('earphones', earphonesSvg, 600, 600);
  await saveAsset('laptop', laptopSvg, 700, 600);
  await saveAsset('coding', codingSvg, 600, 500);
  await saveAsset('paperclip', paperclipSvg, 400, 600);
  await saveAsset('coffee', coffeeSvg, 600, 600);
  await saveAsset('vintage-camera', cameraSvg, 700, 560);
  await saveAsset('cherry', cherrySvg, 500, 500);
  console.log('All 3D assets generated successfully!');
}

run().catch(console.error);
