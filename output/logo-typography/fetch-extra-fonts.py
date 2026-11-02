"""Fetch official Google Fonts assets for the additional AI+X specimens."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen
import json
import re

ROOT = Path(__file__).resolve().parent
DEST = ROOT / 'fonts'
DEST.mkdir(exist_ok=True)
SPECS = [
    ('S', 'Space Grotesk', '几何科技无衬线', 600),
    ('T', 'Sora', '利落几何无衬线', 600),
    ('U', 'Outfit', '圆润几何无衬线', 600),
    ('V', 'Manrope', '简洁现代无衬线', 600),
    ('W', 'Plus Jakarta Sans', '精致几何无衬线', 600),
    ('X', 'Montserrat', '都市几何无衬线', 600),
    ('Y', 'Poppins', '正圆几何无衬线', 600),
    ('Z', 'Raleway', '纤细结构无衬线', 600),
    ('AA', 'Exo 2', '圆角科技体', 700),
    ('AB', 'Rajdhani', '方形窄体', 600),
    ('AC', 'Orbitron', '未来科技体', 600),
    ('AD', 'Oxanium', '切角科技体', 600),
    ('AE', 'Audiowide', '宽体科幻字', 400),
    ('AF', 'Syncopate', '宽体几何字', 700),
    ('AG', 'Michroma', '宽扁科技体', 400),
    ('AH', 'Unbounded', '厚实宽体字', 500),
    ('AI', 'Space Mono', '复古科技等宽体', 700),
    ('AJ', 'Bodoni Moda', '高对比时尚衬线', 600),
]

def fetch(url):
    request = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urlopen(request, timeout=40) as response:
        return response.read()

def download(spec):
    ident, name, style, weight = spec
    slug = name.lower().replace(' ', '')
    css_url = 'https://fonts.googleapis.com/css2?' + urlencode({
        'family': f'{name}:wght@{weight}', 'text': 'AI+X', 'display': 'swap'
    })
    css = fetch(css_url).decode()
    match = re.search(r'src:\s*url\(([^)]+)\)\s*format\([\'\"]([^\'\"]+)', css)
    if not match:
        raise RuntimeError(f'No font asset returned for {name}')
    asset_url, font_format = match.groups()
    extension = {'truetype': 'ttf', 'woff': 'woff', 'woff2': 'woff2'}[font_format]
    font_bytes = fetch(asset_url)
    asset_file = DEST / f'{slug}-{weight}.{extension}'
    asset_file.write_bytes(font_bytes)
    category, license_name = ('apache', 'LICENSE.txt') if slug == 'syncopate' else ('ofl', 'OFL.txt')
    license_url = f'https://raw.githubusercontent.com/google/fonts/main/{category}/{slug}/{license_name}'
    license_text = fetch(license_url).decode()
    (DEST / f'{slug}-LICENSE.txt').write_text(license_text)
    return dict(id=ident, name=name, style=style, weight=weight,
                file='output/logo-typography/fonts/' + asset_file.name,
                mime='font/' + extension, license=license_text,
                source=css_url, licenseSource=license_url,
                bytes=len(font_bytes), isNew=True)

with ThreadPoolExecutor(max_workers=6) as pool:
    fonts = list(pool.map(download, SPECS))
(ROOT / 'extra-fonts.json').write_text(json.dumps(fonts, ensure_ascii=False, indent=2))
print(json.dumps({'downloaded': len(fonts), 'fontBytes': sum(f['bytes'] for f in fonts),
                  'names': [f['name'] for f in fonts]}, ensure_ascii=False))
