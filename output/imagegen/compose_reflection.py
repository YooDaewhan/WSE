from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

root = Path(r"C:\Users\dlwng\WSE\output\imagegen")
clean = Image.open(r"C:\Users\dlwng\.codex\generated_images\01a15944-fd86-75f1-8aac-864f8b733c1d\call_a45562234fee407987c89105ee7f9756.png").convert("RGB")
original = Image.open(root / "rescue-pack-logo-v14-faded-reflection.png").convert("RGB")
clean.paste(original.crop((0, 0, original.width, 490)), (0, 0))
w, h = clean.size
font = ImageFont.truetype(r"C:\Windows\Fonts\malgunbd.ttf", 240)
upright = Image.new("L", (1160, 148))
for i, char in enumerate("레스큐팩"):
    glyph = Image.new("L", (400, 400))
    ImageDraw.Draw(glyph).text((20, 0), char, font=font, fill=255, stroke_width=2)
    glyph = glyph.crop(glyph.getbbox()).resize((230, 148), Image.Resampling.LANCZOS)
    upright.paste(glyph, (i * 310, 0))
upright.save(root / "rescue-pack-hangul-upright-proof.png")
# Apply an actual vertical pixel flip, never a generated interpretation.
flipped = upright.transpose(Image.Transpose.FLIP_TOP_BOTTOM)
layer = Image.new("L", clean.size)
left, top = (w - upright.width) // 2, 506
layer.paste(flipped, (left, top))
arr = np.asarray(layer, dtype=np.float32) / 255
yy = np.arange(h)[:, None]
t = np.clip((yy - top) / 148, 0, 1)
fade = 0.86 * (1 - t) ** 0.85 + 0.035
scan = np.where(yy % 4 == 0, 0.48, 1.0)
arr *= fade * scan
mask = Image.fromarray(np.uint8(np.clip(arr * 255, 0, 255)))
soft = mask.filter(ImageFilter.GaussianBlur(0.8))
glow = mask.filter(ImageFilter.GaussianBlur(4))
# Sparse soft horizontal trails retain the signal/reflection feel.
trail = np.zeros((h, w), dtype=np.float32)
rng = np.random.default_rng(14)
for y in range(top + 3, top + 145, 7):
    shift = int(rng.integers(-18, 19))
    trail[y:y+1] = np.roll(arr[y:y+1], shift, axis=1) * 0.22
trail_image = Image.fromarray(np.uint8(trail * 255)).filter(ImageFilter.GaussianBlur(1.2))
base = np.asarray(clean, dtype=np.float32)
base *= 1 - (np.asarray(soft, dtype=np.float32) / 255)[..., None] * 0.9
light = (np.asarray(soft, dtype=np.float32) / 255)[..., None] * np.array([27, 245, 86])
light += (np.asarray(glow, dtype=np.float32) / 255)[..., None] * np.array([8, 100, 35])
light += (np.asarray(trail_image, dtype=np.float32) / 255)[..., None] * np.array([15, 180, 60])
result = Image.fromarray(np.uint8(np.clip(base + light, 0, 255)))
out = root / "rescue-pack-logo-v15-real-hangul.png"
result.save(out)
print(out)
