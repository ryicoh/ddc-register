# ddc-register

Register completion for [ddc.vim](https://github.com/Shougo/ddc.vim)

# Demo

https://user-images.githubusercontent.com/37844673/156794565-de1bf6e3-df9b-4bda-b02a-bfe61726efab.mov


## Required

### denops.vim

https://github.com/vim-denops/denops.vim


### ddc.vim

https://github.com/Shougo/ddc.vim


## Configuration

```vim

call dein#add('Shougo/ddc-around')
call dein#add('shun/ddc-vim-lsp')
call dein#add('tani/ddc-fuzzy')
call dein#add('ryicoh/ddc-register')

" Use register source.
call ddc#custom#patch_global('sources', ['vsnip', 'vim-lsp', 'around', 'register'])

" Change source options
call ddc#custom#patch_global('sources', ['vsnip', 'vim-lsp', 'around', 'register'])
call ddc#custom#patch_global('sourceOptions', {
   \ '_': {
   \   'matchers': ['matcher_fuzzy'],
   \   'sorters': ['sorter_fuzzy'],
   \   'converters': ['converter_fuzzy'],
   \ },
   \ 'around': {'mark': 'aro'},
   \ 'vsnip': {'mark': 'sni'},
   \ 'vim-lsp': {'mark': 'lsp'},
   \ 'register': { 'mark': "reg" },
   \ })

" Add your preferred the mapping
inoremap <expr> <C-x><C-r> ddc#map#manual_complete(['register'])

```
