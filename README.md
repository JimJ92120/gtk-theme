# gtk-theme

Overriding [`gtk-theme`](https://gitlab.gnome.org/GNOME/gtk/-/tree/gtk-4.0/gtk/theme/Adwaita).

![screenshot](./screenshot.png)

---

---

# installation

| requirements |     |
| ------------ | --- |
| `node`       |     |

```sh
git clone <repository-name>

npm install
```

### base theme

Copy [`gtk-theme-adwaita`](https://gitlab.gnome.org/GNOME/gtk/-/tree/gtk-4.0/gtk/theme/Adwaita) content in `static/theme/`.

Any theme may be used instead as long as following the structure:

```
static/
  theme/
    some-stylesheet.scss
    assets/
      some-assets.(png|svg|...)
```

# build

```sh
npm run build:dev # development
npm run build # production
```

Then copy the build (`dist/`) to the `themes` directory.

e.g `~/.themes` with [`nwg-look`](https://github.com/nwg-piotr/nwg-look)

### output

```
/dist
  (assets)
  index.theme

  /gtk-3.0
    gtk.css
  /gtk-4.0
    gtk.css
```

---

---

#
