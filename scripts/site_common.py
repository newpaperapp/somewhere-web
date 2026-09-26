"""Read the existing browser dictionaries without maintaining a second catalog."""
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ORIGIN = "https://npsomewhere.com"


def catalog():
    source = ROOT / "assets/js/i18n.js"
    script = """
const fs = require('node:fs');
const vm = require('node:vm');
const result = vm.runInNewContext(fs.readFileSync(process.argv[1], 'utf8') +
  ';' + fs.readFileSync(process.argv[2], 'utf8') +
  '; ({ translations: I18N, languages: SUPPORTED, config: window.SOMEWHERE })', { window: {} }, { timeout: 1000 });
process.stdout.write(JSON.stringify(result));
"""
    return json.loads(subprocess.check_output(["node", "-e", script, str(source), str(ROOT / "assets/js/config.js")], text=True))


def home_path(lang):
    return "/" if lang == "ko" else "/" + lang.lower() + "/"
