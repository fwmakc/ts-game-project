import { engineInit } from 'littlejsengine';
import { init, update, updatePost, render, renderPost, sources } from './game';

engineInit(init, update, updatePost, render, renderPost, sources);
