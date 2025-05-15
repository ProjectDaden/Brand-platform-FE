const archetypes = {
Rebel: { hueMin: 0, hueMax: 30, center: 0 },
Hero: { hueMin: 30, hueMax: 60, center: 30 },
Innocent: { hueMin: 60, hueMax: 90, center: 60 },
Explorer: { hueMin: 90, hueMax: 120, center: 90 },
Everyman: { hueMin: 120, hueMax: 150, center: 120 },
Caregiver: { hueMin: 150, hueMax: 180, center: 150 },
Sage: { hueMin: 180, hueMax: 210, center: 180 },
Creator: { hueMin: 210, hueMax: 240, center: 210 },
Magician: { hueMin: 240, hueMax: 270, center: 240 },
Ruler: { hueMin: 270, hueMax: 300, center: 270 },
Lover: { hueMin: 300, hueMax: 330, center: 300 },
Jester: { hueMin: 330, hueMax: 360, center: 330 }
};

const archetype1Select = document.getElementById('archetype1');
const archetype2Select = document.getElementById('archetype2');
const hueSlider = document.getElementById('hueSlider');
const hueLabel = document.getElementById('hueLabel');
const hueValue = document.getElementById('hueValue');
const satSlider = document.getElementById('satSlider');
const satValue = document.getElementById('satValue');
const lightSlider = document.getElementById('lightSlider');
const lightValue = document.getElementById('lightValue');
const secondaryHueSlider = document.getElementById('secondaryHueSlider');
const secondaryHueLabel = document.getElementById('secondaryHueLabel');
const secondaryHueValue = document.getElementById('secondaryHueValue');
const colorPreview = document.getElementById('colorPreview');
const secondaryColorPreview = document.getElementById('secondaryColorPreview');
const secondaryColorContainer = document.getElementById('secondaryColorContainer');
const secondaryColorPreviewContainer = document.getElementById('secondaryColorPreviewContainer');
const tintsContainer = document.getElementById('tintsContainer');
const hueIndicators = document.getElementById('hueIndicators');
const secondaryHueIndicators = document.getElementById('secondaryHueIndicators');

function animateSlider(slider, targetValue, duration = 500) {
const startValue = parseFloat(slider.value);
const startTime = performance.now();

function update(time) {
	const elapsed = time - startTime;
	const progress = Math.min(elapsed / duration, 1);
	const easedProgress = progress * (2 - progress); // Ease-in-out
	const newValue = startValue + (targetValue - startValue) * easedProgress;
	slider.value = newValue;
	slider.dispatchEvent(new Event('input'));
	if (progress < 1) {
	requestAnimationFrame(update);
	}
}

requestAnimationFrame(update);
}

function hslToRgb(h, s, l) {
s /= 100;
l /= 100;
const c = (1 - Math.abs(2 * l - 1)) * s;
const x = c * (1 - Math.abs((h / 60) % 2 - 1));
const m = l - c / 2;
let r = 0, g = 0, b = 0;

if (0 <= h && h < 60) { r = c; g = x; b = 0; }
else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

r = Math.round((r + m) * 255);
g = Math.round((g + m) * 255);
b = Math.round((b + m) * 255);
return [r, g, b];
}

function getContrastTextColor(l) {
return l > 50 ? '#000000' : '#FFFFFF';
}

function updateSliderValuePosition(slider, valueElement) {
const min = parseFloat(slider.min);
const max = parseFloat(slider.max);
const value = parseFloat(slider.value);
const percentage = (value - min) / (max - min) * 100;
valueElement.style.left = `${percentage}%`;
}

function updateHSLSliders() {
const arch1 = archetype1Select.value;
const arch2 = archetype2Select.value;

if (arch1) {
	const { hueMin, hueMax, center } = archetypes[arch1];
	animateSlider(hueSlider, center);
	hueLabel.textContent = `Primary Hue (Recommended: ${hueMin}–${hueMax}°)`;
	hueIndicators.querySelector('.recommended-range').style.left = `${(hueMin / 360) * 100}%`;
	hueIndicators.querySelector('.recommended-range').style.width = `${((hueMax - hueMin) / 360) * 100}%`;
	hueIndicators.querySelector('.standard-value').style.left = `${(center / 360) * 100}%`;
} else {
	hueSlider.value = 0;
	hueLabel.textContent = 'Primary Hue (Recommended: Select an archetype)';
	hueIndicators.querySelector('.recommended-range').style.left = '0%';
	hueIndicators.querySelector('.recommended-range').style.width = '0%';
	hueIndicators.querySelector('.standard-value').style.left = '0%';
}

if (arch2) {
	const { hueMin, hueMax, center } = archetypes[arch2];
	animateSlider(secondaryHueSlider, center);
	secondaryHueLabel.textContent = `Secondary Hue (Recommended: ${hueMin}–${hueMax}°)`;
	secondaryHueIndicators.querySelector('.recommended-range').style.left = `${(hueMin / 360) * 100}%`;
	secondaryHueIndicators.querySelector('.recommended-range').style.width = `${((hueMax - hueMin) / 360) * 100}%`;
	secondaryHueIndicators.querySelector('.standard-value').style.left = `${(center / 360) * 100}%`;
	secondaryColorContainer.classList.remove('hidden');
	secondaryColorPreviewContainer.classList.remove('hidden');
} else {
	secondaryColorContainer.classList.add('hidden');
	secondaryColorPreviewContainer.classList.add('hidden');
	secondaryHueIndicators.querySelector('.recommended-range').style.left = '0%';
	secondaryHueIndicators.querySelector('.recommended-range').style.width = '0%';
	secondaryHueIndicators.querySelector('.standard-value').style.left = '0%';
}

updateSliderGradients();
updateColorPreview();
generateColors();
}

function updateSliderGradients() {
const h = hueSlider.value;
const s = satSlider.value;
const l = lightSlider.value;
satSlider.style.setProperty('--current-hue', h);
satSlider.style.setProperty('--current-lightness', `${l}%`);
lightSlider.style.setProperty('--current-hue', h);
lightSlider.style.setProperty('--current-sat', `${s}%`);
}

function updateColorPreview() {
const h = hueSlider.value;
const s = satSlider.value;
const l = lightSlider.value;
const h2 = secondaryHueSlider.value;
colorPreview.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
colorPreview.querySelector('span').style.color = getContrastTextColor(l);
if (archetype2Select.value) {
	secondaryColorPreview.style.backgroundColor = `hsl(${h2}, ${s}%, ${l}%)`;
	secondaryColorPreview.querySelector('span').style.color = getContrastTextColor(l);
}
hueValue.textContent = `${Math.round(h)}°`;
satValue.textContent = `${s}%`;
lightValue.textContent = `${Math.round(l)}%`;
secondaryHueValue.textContent = `${Math.round(h2)}°`;
updateSliderValuePosition(hueSlider, hueValue);
updateSliderValuePosition(satSlider, satValue);
updateSliderValuePosition(lightSlider, lightValue);
updateSliderValuePosition(secondaryHueSlider, secondaryHueValue);
updateSliderGradients();
generateColors();
}

function generateTints(color, prefix) {
const userLightness = parseFloat(lightSlider.value);
const tints = [];
const names = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

const lightnessLevels = [];
const lowerStep = (userLightness - 5) / 4;
for (let i = 0; i < 4; i++) {
	lightnessLevels.push(5 + i * lowerStep);
}
lightnessLevels.push(userLightness);
const upperStep = (95 - userLightness) / 4;
for (let i = 1; i <= 4; i++) {
	lightnessLevels.push(userLightness + i * upperStep);
}

lightnessLevels.forEach((l, i) => {
	tints.push({
	name: `${prefix}-${names[i]}`,
	h: color.h,
	s: color.s,
	l: l
	});
});
return tints;
}

function generateColors() {
const arch1 = archetype1Select.value;
const arch2 = archetype2Select.value;

if (!arch1) {
	tintsContainer.innerHTML = '';
	tintsContainer.classList.remove('grid-cols-2');
	tintsContainer.classList.add('grid-cols-1');
	return;
}

const primary = {
	h: parseFloat(hueSlider.value),
	s: parseFloat(satSlider.value),
	l: parseFloat(lightSlider.value)
};
let secondary = null;

if (arch2) {
	secondary = {
	h: parseFloat(secondaryHueSlider.value),
	s: primary.s,
	l: primary.l
	};
	tintsContainer.classList.remove('grid-cols-1');
	tintsContainer.classList.add('grid-cols-2');
} else {
	tintsContainer.classList.remove('grid-cols-2');
	tintsContainer.classList.add('grid-cols-1');
}

// Generate tints
tintsContainer.innerHTML = '';
const primaryTints = generateTints(primary, 'primary');
const secondaryTints = secondary ? generateTints(secondary, 'secondary') : [];

// Create columns
const primaryColumn = document.createElement('div');
primaryColumn.className = 'flex flex-col gap-6';
primaryTints.forEach(tint => {
	const [r, g, b] = hslToRgb(tint.h, tint.s, tint.l);
	const tintDiv = document.createElement('div');
	tintDiv.className = 'flex items-center';
	tintDiv.innerHTML = `
	<div class="w-12 h-12 rounded mr-4" style="background-color: hsl(${tint.h}, ${tint.s}%, ${tint.l}%);"></div>
	<div>
		<span class="font-medium text-base text-gray-800">${tint.name}</span>
		<p class="text-sm text-gray-600">HSL(${Math.round(tint.h)}, ${tint.s}%, ${tint.l}%)</p>
		<p class="text-sm text-gray-600">RGB(${r}, ${g}, ${b})</p>
	</div>
	`;
	primaryColumn.appendChild(tintDiv);
});

tintsContainer.appendChild(primaryColumn);

if (secondary) {
	const secondaryColumn = document.createElement('div');
	secondaryColumn.className = 'flex flex-col gap-6';
	secondaryTints.forEach(tint => {
	const [r, g, b] = hslToRgb(tint.h, tint.s, tint.l);
	const tintDiv = document.createElement('div');
	tintDiv.className = 'flex items-center';
	tintDiv.innerHTML = `
		<div class="w-12 h-12 rounded mr-4" style="background-color: hsl(${tint.h}, ${tint.s}%, ${tint.l}%);"></div>
		<div>
		<span class="font-medium text-base text-gray-800">${tint.name}</span>
		<p class="text-sm text-gray-600">HSL(${Math.round(tint.h)}, ${tint.s}%, ${tint.l}%)</p>
		<p class="text-sm text-gray-600">RGB(${r}, ${g}, ${b})</p>
		</div>
	`;
	secondaryColumn.appendChild(tintDiv);
	});
	tintsContainer.appendChild(secondaryColumn);
}
}

function handleSliderClick(e, slider) {
const rect = slider.getBoundingClientRect();
const min = parseFloat(slider.min);
const max = parseFloat(slider.max);
const range = max - min;
const position = (e.clientX - rect.left) / rect.width;
const targetValue = min + position * range;
animateSlider(slider, Math.min(max, Math.max(min, targetValue)));
}

archetype1Select.addEventListener('change', updateHSLSliders);
archetype2Select.addEventListener('change', updateHSLSliders);
hueSlider.addEventListener('input', updateColorPreview);
satSlider.addEventListener('input', updateColorPreview);
lightSlider.addEventListener('input', updateColorPreview);
secondaryHueSlider.addEventListener('input', updateColorPreview);
hueSlider.addEventListener('mousedown', e => handleSliderClick(e, hueSlider));
satSlider.addEventListener('mousedown', e => handleSliderClick(e, satSlider));
lightSlider.addEventListener('mousedown', e => handleSliderClick(e, lightSlider));
secondaryHueSlider.addEventListener('mousedown', e => handleSliderClick(e, secondaryHueSlider));

// Initialize
updateHSLSliders();