# Jupyter Lab
Replace `user-settings` files in `~/.jupyter/lab/user-settings` with the above folder.

```bash
cp --recursive ./user-settings/ ~/.jupyter/lab/user-settings/
```

And replace `jupyter` folder in `~/anaconda3/envs/<env_name>/share/jupyter/`

But before that replace `develop` in `jupyterlab/jupyter/kernels/python3/kernel.json` with your environment name.

```bash
cp --recursive ./jupyter/ ~/anaconda3/envs/<env_name>/share/jupyter/
```