# Terminal

![Black Box](/images/blackbox.png)

I use [Black Box](https://gitlab.gnome.org/raggesilver/blackbox) by Paulo Queiroz as my default terminal emulator.

The default theme is something while resembles new dark theme of JetBrains IDE. Move the `jetbrains-dark-darcula.json` to scheme folder of Black Box and switch from it's GUI.

# Shell
As for the shell, I use [nushell](https://github.com/nushell/nushell/):

Install it as: 

```bash
sudo dnf copr enable atim/nushell
sudo dnf install nushell
nu
```

Copy `nushell` directory of config files:

```bash
cp nushell ~/.config/nushell
```

This sets, table to use `light` mode and bunch of other things, use these [LS_COLORS](https://github.com/trapd00r/LS_COLORS/blob/master/lscolors.sh) 

The keybindings are:

- `Ctrl+s` move to start of line
- `Ctrl+e` move to end of line
- `Ctrl+h` for history and remove older `Ctrl+r` keybinding
- `Ctrl+f` to search for commands menu (list mode)
- `Ctrl+d` to search for commands menu (description mode)
- `Ctrl+q` discard the line

## Prompt 
The prompt is configured by [Starship](https://github.com/starship/starship)

```bash
sudo dnf copr enable atim/starship
sudo dnf install starship
```

and copy it's config:

```bash
cp starship.toml ~/.config/starship.toml
```

# For Autocompletions
[External autocompletions](https://www.nushell.sh/book/custom_completions.html#external-completions) beyond nushell are performed by [Carapace](https://github.com/rsteube/carapace-bin).

```bash
sudo nano /etc/yum.repos.d/fury.repo
```

And put this there:

```
[fury]
name=Gemfury Private Repo
baseurl=https://yum.fury.io/rsteube/
enabled=1
gpgcheck=0
```

And install *Carapace*
```bash
sudo yum install carapace-bin
```