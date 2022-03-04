# ddc-register

Register completion for [ddc.vim](https://github.com/Shougo/ddc.vim)


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
