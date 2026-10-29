from PIL import Image, ImageFilter
import numpy as np
import math
from pathlib import Path
out=Path('C:/Users/dlwng/WSE/output/pigeon')
src=Image.open('C:/Users/dlwng/.codex/generated_images/01a14df1-e87c-7811-9398-5e2a5336be17/exec-9b87f02e-4a6f-4527-b002-c2bee8610e03.png').convert('RGB')
src.thumbnail((480,520),Image.Resampling.LANCZOS)
w,h=src.size
a=np.array(src)
pink=(a[:,:,0].astype(int)>a[:,:,1].astype(int)+25)&(a[:,:,0]>190)&(a[:,:,1]>130)
mask=Image.fromarray(np.uint8(~pink)*255).filter(ImageFilter.GaussianBlur(.45))
bird=src.convert('RGBA'); bird.putalpha(mask)
# Extend bottom so the bust stays anchored while it gently bobs.
layer=Image.new('RGBA',(w,h+60)); layer.paste(bird,(0,0))
strip=bird.crop((0,h-2,w,h)).resize((w,60))
layer.paste(strip,(0,h))
color=tuple(np.median(a[:80].reshape(-1,3),axis=0).astype(int))
frames=[]
for i in range(32):
    t=2*math.pi*i/32
    angle=3.5*math.sin(t)
    dx=round(4*math.sin(t))
    dy=round(-5+5*math.cos(2*t))
    moved=layer.rotate(angle,Image.Resampling.BICUBIC,center=(w*.52,h*.93))
    canvas=Image.new('RGBA',(w,h),color+(255,))
    canvas.alpha_composite(moved,(dx,dy))
    frames.append(canvas.convert('RGB'))
palette=frames[0].quantize(colors=128)
frames=[f.quantize(palette=palette,dither=Image.Dither.NONE) for f in frames]
path=out/'rock-pigeon-bob.gif'
frames[0].save(path,save_all=True,append_images=frames[1:],duration=50,loop=0,disposal=2,optimize=False)
check=Image.open(path)
assert check.n_frames==32 and check.info['loop']==0
print(str(path),path.stat().st_size,'bytes',check.size,check.n_frames,'frames')
