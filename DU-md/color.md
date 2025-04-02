Color

Luminance calculation

	Luminance 	= Ri + Gi + Bi
			= 0.2126 * R + 0.7152 * G + 0.0722 * B


Gamma Correction

	Voor Ri, Gi of Bi geldt:
	
	1. If the value is ≤ 0.03928 (R, G of B van 10 of lager), divide it by 12.92.  
	2. If it’s > 0.03928 (R, G, B van 11 of hoger), use ((value + 0.055) / 1.055) ^ 2.4.


Contrast Ratio

(L1 + 0.05) / (L2 + 0.05)

L1 = lichtere kleur
L2 = Donkerdere kleur


Volledige formule

Voor RGB-waarde #123456 = rgb(18,52,86)



WCAG Compliance levels

| Text Size | Level AA | Level AAA |
|---|---|---|
| Normal (< 24px / 18pt) | 4.5:1 | 7:1 |
| Bold (< 18.6px / 14pt) | 4.5:1 | 7:1 |
| Large (≥ 24px / 18pt) | 3:1 | 4.5:1 |



