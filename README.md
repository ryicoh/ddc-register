# ddc-register

Register completion for [ddc.vim](https://github.com/Shougo/ddc.vim)

# Demo



https://user-images.githubusercontent.com/37844673/156731148-37242454-55d2-4423-8ec5-2a0f44c2e0e8.mov



## Required

### denops.vim

https://github.com/vim-denops/denops.vim


### ddc.vim

https://github.com/Shougo/ddc.vim


## Configuration

```vim
" Use register source.
call ddc#custom#patch_global('sources', ['register'])

" Change source options
call ddc#custom#patch_global('sourceOptions', {
      \ 'register': {'mark': 'reg'},
      \ })
```
