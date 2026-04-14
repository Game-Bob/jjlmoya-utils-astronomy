import os
import re

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    changed = False
    for line in lines:
        # Match const title = '...' or title: '...'
        match_const = re.search(r'const\s+title\s*=\s*([\'"])([^\'"]+)([\'"])', line)
        match_prop = re.search(r'title\s*:\s*([\'"])([^\'"]+)([\'"])', line)
        
        if match_const:
            quote_type = match_const.group(1)
            title_text = match_const.group(2)
            if '-' in title_text or '|' in title_text:
                new_title = title_text.replace('-', ' ').replace('|', ' ')
                line = line.replace(f'{quote_type}{title_text}{quote_type}', f'{quote_type}{new_title}{quote_type}')
                changed = True
        elif match_prop:
            quote_type = match_prop.group(1)
            title_text = match_prop.group(2)
            if '-' in title_text or '|' in title_text:
                new_title = title_text.replace('-', ' ').replace('|', ' ')
                line = line.replace(f'{quote_type}{title_text}{quote_type}', f'{quote_type}{new_title}{quote_type}')
                changed = True
        
        new_lines.append(line)
    
    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Fixed: {filepath}")

def main():
    for folder in ["src/tool", "src/category"]:
        base_dir = os.path.join(r"d:\code\jjlmoya-utils-astronomy", folder)
        for root, dirs, files in os.walk(base_dir):
            if 'i18n' in root:
                for file in files:
                    if file.endswith('.ts'):
                        fix_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
