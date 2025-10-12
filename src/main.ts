import { engineInit } from 'littlejsengine';
import { init, update, updatePost, render, renderPost, sources } from './core';

engineInit(init, update, updatePost, render, renderPost, sources);
