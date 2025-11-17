Shield: [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

# NMB Mercenaries Website

This is the code repository of the museum visualisation that is used in the main exhibition of the Neues Museum Biel. The application
is browser-based and intended to run in offline kiosk mode at location. There is however also a static online version. Be aware that the resolution of 2560x1440 Pixels is recommended for the best experience as the application uses fixed pixel sizes for layouting.

This project was developed by [Sebastian Flick](https://github.com/flicksolutions), [Levyn Bürki](https://github.com/vvvyyynet) and [Peter Dängeli](https://github.com/pdaengeli) of the [Data Science Lab](https://github.com/dsl-unibe-ch) for the [Neues Museum Biel](https://www.nmbiel.ch/).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```
