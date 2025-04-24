# gtk-theme

Overriding [`gtk-theme`](https://gitlab.gnome.org/GNOME/gtk/-/tree/gtk-4.0/gtk/theme/Adwaita).

---

---

# installation

|        |     |
| ------ | --- |
| `node` |     |

```sh
git clone <repository-name>

npm install
```

### base theme

[`gtk-theme-adwaita`](https://gitlab.gnome.org/GNOME/gtk/-/tree/gtk-4.0/gtk/theme/Adwaita) is set in `src/Adwaita`.

Any theme may be used instead.

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
